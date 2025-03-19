"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import DoctorCard from "@/components/DoctorSection/DoctorCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DoctorWithRelations } from "@/types/doctors";

interface SpecialtyWithDoctors {
  name: string;
  doctors: DoctorWithRelations[];
}

interface DoctorsListProps {
  doctors: SpecialtyWithDoctors[]; 
  specialties: string[];
  doctorsWithSlots : DoctorWithRelations
}

const DoctorsList = ({ doctors, specialties , doctorsWithSlots}: DoctorsListProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ["All", ...specialties];
  const selectedCategory = searchParams.get("specialty") || "All";

  const handleFilterChange = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category === "All") {
      params.delete("specialty");
    } else {
      params.set("specialty", category);
    }
    router.push(`${pathname}?${params.toString()}`);
    setIsFilterOpen(false);
  };

  const allDoctors = useMemo(() => doctors.flatMap((specialty) => specialty.doctors), [doctors]);


  const filteredDoctors = useMemo(() => {
    return selectedCategory === "All"
      ? allDoctors
      : allDoctors.filter((doctor) => doctor.specialty?.name === selectedCategory);
  }, [selectedCategory, allDoctors]);



  return (
    <div>
    
      <div className="md:hidden flex justify-end mb-4">
        <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Filter</Button>
          </DialogTrigger>
          <DialogContent className="w-4/5 max-w-md">
            <DialogHeader>
              <DialogTitle>Filter by Specialty</DialogTitle>
            </DialogHeader>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li
                  key={category}
                  className={`p-3 rounded-md cursor-pointer ${
                    selectedCategory === category ? "bg-primary text-white" : "bg-gray-100 hover:bg-blue-100"
                  }`}
                  onClick={() => handleFilterChange(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
       
        <div className="hidden md:block md:col-span-1">
          <ul className="space-y-3">
            {categories.map((category) => (
              <li
                key={category}
                className={`p-3 rounded-md cursor-pointer ${
                  selectedCategory === category ? "bg-primary text-white" : "bg-gray-100 hover:bg-blue-100"
                }`}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

      
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard doctorsWithSlots={doctorsWithSlots} key={doctor.id} doctor={doctor} />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">No doctors found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
