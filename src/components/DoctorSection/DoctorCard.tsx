"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import DialogSlot from "@/app/doctors/_components/DialogSlot";
import { DoctorWithRelations } from "@/types/doctors";


const DoctorCard = ({ doctor  } : {doctor : DoctorWithRelations }) => {
 
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl  shadow-lg border border-gray-200 h-fit 
      transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer p-4 md:p-6">
      
     
      {doctor.image && (
        <div className="w-full h-[300px] md:h-[250px] relative rounded-2xl overflow-hidden">
          <Image 
            src={doctor.image} 
            alt={doctor.username} 
            layout="fill" 
            objectFit="cover" 
          />
        </div>
      )}

 
      <div className="flex flex-col items-center text-center mt-6 space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">{doctor.username}</h3>
        <p className="text-gray-500 text-sm">{doctor.specialty?.name || "No Specialty"}</p>

      
        <Button
          className="ring ring-primary text-primary rounded-full px-6 py-2 
          hover:bg-primary hover:text-white transition duration-300 hover:ring-transparent"
          variant="outline"
          onClick={() => setOpen(true)}
        >
          Book Now
        </Button>
      </div>

 
      <DialogSlot open={open} setOpen={setOpen} doctor={doctor} />
    </div>
  );
};

export default DoctorCard;
