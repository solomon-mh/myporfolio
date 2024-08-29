import ScrollReveal from "scrollreveal";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { myServices } from "../data/myService";
import ProjectAndServiceCard from "./project/ProjectAndServiceCard";
import Section from "./Section";
import { ShootingStarsAndStarsBackground } from "./ShootingStarsAndStarsBackground";

const Services = () => {
  const rightRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(rightRef.current, {
      origin: "right",
      distance: "100px",
      rotate: { y: 90 },
      duration: 1500,
      delay: 300,
      easing: "ease",
      reset: true,
    });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedId, setSelectedId] = useState(myServices[0].id); // Set initial selected ID to the first service

  const handleMouseEnter = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const servicesName = myServices.map((service) => (
    <div
      key={service.id}
      className={`relative px-6 py-4 rounded-lg cursor-pointer duration-300 transform transition-all
    ${
      selectedId === service.id
        ? "bg-gray-500 text-white shadow-lg scale-110"
        : "bg-gray-700 text-gray-200 hover:bg-gray-600 hover:shadow-md hover:scale-105"
    }`}
      onClick={() => setSelectedId(service.id)}
      onMouseEnter={() => handleMouseEnter(service.id)}
    >
      <div className="flex flex-col items-center">
        <div className="mb-4 text-3xl text-blue-400">
          <FontAwesomeIcon icon={faCode} />
        </div>
        <h2 className="text-lg font-semibold text-center">
          {service.serviceName}
        </h2>
      </div>
    </div>
  ));

  return (
    <Section
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="services"
      className="pl-16 py-32 mx-auto text-center"
    >
      <ShootingStarsAndStarsBackground />
      <div
        ref={rightRef}
        className="flex justify-center items-center w-9/10 mx-auto gap-6"
      >
        <aside className="w-1/2 space-y-8 py-6 px-6 rounded-lg shadow-lg">
          {servicesName}
        </aside>
        {isModalOpen && (
          <div className="w-full max-w-scremen-lg">
            <div className="rounded-lg shadow-lg relative">
              <ProjectAndServiceCard id={selectedId} />
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Services;
