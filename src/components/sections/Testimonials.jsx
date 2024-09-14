import React from "react";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This is an amazing service! Highly recommend to everyone.",
  },
  {
    name: "Jane Smith",
    feedback:
      "Fantastic experience! The team was professional and the results were impressive.",
  },
  {
    name: "Michael Johnson",
    feedback:
      "I loved the quality of the work. Will definitely use this service again!",
  },
  {
    name: "Emily Davis",
    feedback:
      "Great service with excellent customer support. Totally satisfied!",
  },
  {
    name: "Alice Brown",
    feedback:
      "An excellent experience overall. The team went above and beyond!",
  },
  {
    name: "Bob White",
    feedback:
      "Very happy with the outcome. Will definitely return for future needs.",
  },
  // Add more testimonials if needed
];

const Testimonials = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-14">
      <div>
        <h2 className="text-4xl font-sans font-semibold w-full text-center">
          Testimonials
        </h2>
        <p className="w-full text-center font-sans text-gray-400 mt-2">
          What my Fake clients say about me because i dont have any
        </p>
      </div>
      <div className="tech-slideshow relative overflow-hidden mx-auto w-full flex items-center justify-center">
        <div className="flex animate-slide w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card flex-none w-[20rem] mx-4 p-4 bg-gray-800 text-white rounded-lg shadow-lg"
            >
              <p className="text-lg mb-4">"{testimonial.feedback}"</p>
              <p className="font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
