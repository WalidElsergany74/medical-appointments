import React from "react";

const steps = [
  {
    id: 1,
    title: "Check Doctor Profile",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eum repellat voluptatibus quia quam harum cupiditate, nulla nam quae quos!",
    icon: "👨‍⚕️",
  },
  {
    id: 2,
    title: "Book an Appointment",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eum repellat voluptatibus quia quam harum cupiditate, nulla nam quae quos!",
    icon: "📅",
  },
  {
    id: 3,
    title: "Get Consultation",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eum repellat voluptatibus quia quam harum cupiditate, nulla nam quae quos!",
    icon: "📝",
  },
  {
    id: 4,
    title: "Receive Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eum repellat voluptatibus quia quam harum cupiditate, nulla nam quae quos!",
    icon: "💊",
  },
];

const StepsSection = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h5 className="text-lg font-medium ">- Fastest Solution</h5>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          <span className="text-primary">4 Easy Steps</span> And Get Your Solution
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-gray-50 p-8 rounded-2xl shadow-md flex flex-col items-center cursor-pointer hover:bg-primary hover:text-white transition-all duration-400  hover:shadow-lg"
          >
           
            <div className="text-4xl    mb-4 self-start">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2  self-start">{step.title}</h3>
            <p className="text-base self-start font-light ">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
