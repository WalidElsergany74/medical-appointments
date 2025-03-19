import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getSpecialties = cache(
  async () => {
    try {
      const specialties = await db.specialty.findMany({
        select: { name: true },
      });

      return specialties.map((s) => s.name); // إرجاع مصفوفة أسماء التخصصات فقط
    } catch (error) {
      console.error("Error fetching specialties:", error);
      return []; // إرجاع مصفوفة فارغة في حالة حدوث خطأ
    }
  },
  ["specialties"],
  { revalidate: 3600 }
);
