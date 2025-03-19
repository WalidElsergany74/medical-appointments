import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const appointments = [
  {
    id: 1,
    name: "Dr. Jane Cooper",
    address: "547 Carrington Trace Drive, Cornelius",
    date: "20-Feb-2024",
    time: "4:30 PM",
    image: "https://doctor-health-care-website.vercel.app/main%20male%20doctor4.jpg",
  },
  {
    id: 2,
    name: "Dr. Emma Watson",
    address: "525 N Tryon Street, NC 28117",
    date: "23-Feb-2024",
    time: "2:00 PM",
    image: "https://doctor-health-care-website.vercel.app/main%20male%20doctor4.jpg",
  },
  {
    id: 3,
    name: "Dr. Harry Potter",
    address: "547 Carrington Trace Drive, Cornelius",
    date: "22-Feb-2024",
    time: "2:00 PM",
    image: "https://doctor-health-care-website.vercel.app/main%20male%20doctor4.jpg",
  },
];

export default function MyBooking() {
  return (
    <section className=" py-10">
      <h2 className="text-2xl font-bold mb-4">My Booking</h2>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="bg-gray-100 p-1 rounded-lg flex">
          <TabsTrigger value="upcoming" className="flex-1">Upcoming</TabsTrigger>
          <TabsTrigger value="expired" className="flex-1">Expired</TabsTrigger>
        </TabsList>

        {/* Upcoming Appointments */}
        <TabsContent value="upcoming">
          <div className="space-y-4 mt-4">
            {appointments.map((appointment) => (
              <Card key={appointment.id} className="py-10 px-6 flex  gap-4">
              <div className="flex items-start flex-col md:flex-row gap-5 justify-start md:justify-between w-full">
              <Image 
                  src={appointment.image} 
                  alt={appointment.name} 
                  width={100} 
                  height={100} 
                  className="rounded-full"
                />
                <CardContent className="flex-1 space-y-1">
                  <h3 className="text-lg font-semibold">{appointment.name}</h3>
                  <p className="text-sm text-gray-500">{appointment.address}</p>
                  <p className="text-sm text-blue-600">📅 Appointment On: {appointment.date}</p>
                  <p className="text-sm text-blue-600">⏰ At Time: {appointment.time}</p>
                </CardContent>
                <Button variant="outline">Cancel Appointment</Button>
              </div>
                
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Expired Appointments */}
        <TabsContent value="expired">
          <div className="text-gray-500 mt-4">No expired appointments.</div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
