

import { getSpecialties } from "@/server/db/specialties";
import DoctorsList from "./_components/DoctorList";
import { getDoctorsBySpecialty, getDoctorsWithAvailability } from "@/server/db/doctors";





const Doctors = async () => {
  const specialties = await getSpecialties();
  const doctors = await getDoctorsBySpecialty()
  const doctorsWithSlots = await getDoctorsWithAvailability();

 

  
 ;


  console.log("Specialties:", specialties);
console.log("Doctors:", doctors);

  return (
    <div className="container mx-auto py-4">
      <DoctorsList doctorsWithSlots={doctorsWithSlots} doctors={doctors} specialties={specialties} />
    </div>
  );
};

export default Doctors;
