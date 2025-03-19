import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getDoctorsBySpecialty = cache(
    () => {
      const doctors = db.specialty.findMany({
        include: {
          doctors: {
            include :{
                AvailableTimeSlot :true,
            },
            select: {
              id: true,
              image: true,
              username: true,
              specialty: {
                select: {
                  name: true
                }
              },
              AvailableTimeSlot: {  
                select: {
                  day: true,
                  timeSlot: true
                }
              }
            }
          },
        },
      });
      return doctors;
    },
    ["doctors-by-specialty"],
    { revalidate: 3600 }
);



  
export const getDoctorsWithAvailability = cache(
    async () => {
      const doctors = await db.user.findMany({
        where: { role: "DOCTOR" },
        select: {
          id: true,
          username: true,
          image: true,
          specialty: {
            select: { name: true }
          },
          AvailableTimeSlot: {  // ✅ جلب المواعيد المتاحة
            select: {
              day: true,
              timeSlot: true
            }
          }
        }
      });
  
      // ✅ تحديث availableDays بناءً على AvailableTimeSlot
      return doctors.map((doctor) => ({
        ...doctor,
        availableDays: [...new Set(doctor.AvailableTimeSlot.map(slot => slot.day))], // استخراج الأيام بدون تكرار
      }));
    },
    ["doctors-with-availability"],
    { revalidate: 3600 }
  );
  
  
  