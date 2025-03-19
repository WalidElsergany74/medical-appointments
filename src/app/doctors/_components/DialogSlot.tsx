import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DoctorWithRelations } from "@/types/doctors";

interface DoctorTimeSlot {
  day: string;
  timeSlot: string;
}

interface DialogSlotProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  doctor: DoctorWithRelations | null;
 
}

const DialogSlot: React.FC<DialogSlotProps> = ({ open, setOpen, doctor,  }) => {
  if (!doctor) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const availableDays: string[] = doctor.AvailableTimeSlot
    ? [...new Set(doctor.AvailableTimeSlot.map((slot: DoctorTimeSlot) => slot.day))]
    : [];

  const availableSlots: string[] =
    doctor.AvailableTimeSlot?.filter((slot: DoctorTimeSlot) => slot.day === selectedDay)
      ?.map((slot: DoctorTimeSlot) => slot.timeSlot) || [];

  const handleSubmit = () => {
    if (!selectedDay || !selectedTime) return;


}
  

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Appointment for {doctor?.username}</DialogTitle>
        </DialogHeader>

        <div>
          <h3>Select Day</h3>
          <div className="grid grid-cols-3 gap-2">
            {availableDays.map((day) => (
              <Button variant={"outline"} className="active:bg-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white " key={day} onClick={() => { setSelectedDay(day); setSelectedTime(null); }}>
                {day}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3>Select Time Slot</h3>
          <div className="grid grid-cols-3 gap-2">
            {availableSlots.map((time) => (
              <Button className="active:bg-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white " variant={"outline"} key={time} onClick={() => setSelectedTime(time)}>
                {time}
              </Button>
            ))}
          </div>
        </div>

        <DialogFooter>
          <Button className="active:bg-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white " variant="outline" onClick={() => setOpen(false)}>Close</Button>
          <Button onClick={handleSubmit} disabled={!selectedTime}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogSlot;
