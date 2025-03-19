import { getDoctorsBySpecialty } from "@/server/db/doctors";
import DoctorCard from "./DoctorCard";
import Link from "next/link";
import { Button } from "../ui/button";
import { Routes } from "@/constants";

const DoctorsSection = async () => {
  const specialties = await getDoctorsBySpecialty(); 

  return (
    <section className="py-16 px-4">
      <div className="text-center mb-12">
        <h5 className="text-lg">- Doctor Team</h5>
        <h2 className="text-3xl font-semibold mt-2">
          Our <span className="text-primary font-bold">Specialist</span> Doctor Team
        </h2>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {specialties.flatMap((specialty) =>
          specialty.doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        )}
      </div>

      <div className="flex justify-center mt-6">
        <Link href={Routes.DOCTORS}>
          <Button className="rounded-full px-10 py-5" size={"lg"}>View all</Button>
        </Link>
      </div>
    </section>
  );
};

export default DoctorsSection;
