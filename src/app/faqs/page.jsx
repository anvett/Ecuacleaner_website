"use client";

import React from "react";



const faqData = [
  {
    question: "¿Cómo funciona el servicio de lavado de autos?",
    answer: "El servicio de lavado de autos de EcuaCleaner utiliza equipos y productos de alta calidad para asegurar que tu vehículo quede impecable. Ofrecemos servicios tanto a domicilio como en nuestro establecimiento, brindando flexibilidad y comodidad a nuestros clientes. Nuestro proceso incluye un lavado detallado del exterior, limpieza de ruedas y cristales, así como un secado manual para garantizar un acabado sin manchas.",
  },
  {
    question: "¿Qué incluye el servicio de limpieza de camiones?",
    answer: "Nuestro servicio de limpieza de camiones incluye una limpieza profunda tanto del interior de la cabina como del exterior del vehículo. Utilizamos productos ecológicos y técnicas avanzadas para asegurar una limpieza completa y segura, eliminando suciedad persistente, polvo y manchas, y cuidando siempre las superficies del vehículo para evitar daños.",
  },
  {
    question: "¿Qué implica el servicio de detallado completo?",
    answer: "El servicio de detallado completo incluye una limpieza exhaustiva del interior y exterior del vehículo, que abarca desde el lavado de alfombras y tapicerías hasta la eliminación de manchas y la restauración de superficies. Además, aplicamos productos protectores para mantener el brillo y la durabilidad de las superficies tratadas, garantizando que tu vehículo luzca como nuevo.",
  },
  {
    question: "¿En qué consiste el sellado de pintura de cuero?",
    answer: "El sellado de pintura de cuero es un tratamiento especializado que protege la pintura del vehículo contra los elementos y el desgaste diario. Utilizamos productos de alta calidad que crean una capa protectora duradera, proporcionando un acabado brillante y resistente. Este proceso ayuda a prevenir la decoloración y los daños causados por la exposición al sol y otros factores ambientales.",
  },
  {
    question: "¿Qué servicios ofrecen para la limpieza de edificios?",
    answer: "Ofrecemos servicios de limpieza profunda para edificios, que incluyen la eliminación de polvo, suciedad y residuos acumulados en diferentes superficies. Utilizamos productos ecológicos y técnicas avanzadas para garantizar un entorno limpio y saludable, adaptándonos a las necesidades específicas de cada espacio, desde oficinas hasta grandes instalaciones comerciales.",
  },
  {
    question: "¿Cómo se realiza la limpieza de pisos?",
    answer: "La limpieza de pisos de EcuaCleaner incluye la eliminación de manchas, suciedad y residuos, utilizando productos seguros y técnicas avanzadas para asegurar un acabado impecable. Dependiendo del tipo de piso, empleamos métodos específicos como la limpieza a vapor, pulido o aplicación de productos que realzan el brillo natural de la superficie, manteniéndola protegida y como nueva.",
  },
  {
    question: "¿Qué beneficios tiene la limpieza de lotes de autos?",
    answer: "La limpieza de lotes de autos mejora la presentación de los vehículos, asegurando que estén limpios y relucientes para los clientes. Este servicio incluye un lavado minucioso del exterior de cada vehículo, limpieza de ruedas y ventanas, y una revisión general para garantizar que cada auto luzca en su mejor estado. Utilizamos productos y técnicas avanzadas para mantener una presentación uniforme y profesional.",
  },
  {
    question: "¿Cómo funciona la remoción de olores?",
    answer: "Nuestro servicio de remoción de olores elimina olores desagradables del vehículo mediante un proceso de limpieza profunda y desodorización, utilizando productos seguros y técnicas avanzadas. Esto incluye la aplicación de neutralizadores de olores de larga duración que penetran en las fibras de los asientos y alfombras, asegurando un ambiente fresco y limpio que mejora la experiencia de los ocupantes.",
  },
  {
    question: "¿Qué incluye la corrección de pintura?",
    answer: "La corrección de pintura incluye la eliminación de rayones y defectos en la pintura del vehículo mediante técnicas de pulido y abrillantado. Utilizamos productos de alta calidad y herramientas especializadas para restaurar el acabado original de la pintura, devolviendo su brillo y uniformidad. Este servicio es ideal para revitalizar la apariencia del vehículo y protegerlo de futuros daños.",
  },
  {
    question: "¿Cómo se realiza la remoción de tinte?",
    answer: "La remoción de tinte de ventanas se lleva a cabo utilizando herramientas especializadas y productos que no dañan la superficie del vidrio ni la pintura circundante. Nuestro equipo de profesionales se asegura de eliminar todo rastro de tinte de forma cuidadosa y eficiente, dejando las ventanas completamente transparentes y sin residuos. Este proceso ayuda a mejorar la visibilidad y le da al vehículo un aspecto renovado.",
  },
];


const FAQPage = () => {
  return (
    <section className="relative bg-dark text-center overflow-hidden">
      <div className="bg-gradient-to-br from-[#000000] to-[#717175] pt-spacing-3 py-spacing-1 sm:py-spacing-5 ">
        <h1 className="section-title text-primary">Preguntas Frecuentes</h1>
        
      
      </div>
      
      <div className="py-spacing-5 bg-dark">
        <div className="container mx-auto px-4 lg:px-0">
          {faqData.map((item, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl text-start font-semibold text-primary">{item.question}</h3>
              <p className="text-light text-start leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
