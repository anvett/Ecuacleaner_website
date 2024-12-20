"use client";

import Introduction from "@/components/Introduction/Introduction";
import Benefits from "@/components/beneficts/beneficts";
import CallToAction from "@/components/cta/cta";
import FeaturedServices from "@/components/featureServices/FeatureServices";
import Hero from "@/components/hero/Hero";
import { AuroraHero } from "@/components/heroAurora/AuroraHero";
import { LampContainer } from "@/components/lamp/Lamp";
import Testimonials from "@/components/testimonials/Testimonials";
import TwoCards from "@/components/twoCards/TwoCards";
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";
import VideoPlayer2 from "@/components/videoPlayer2/VideoPlayer2";
import { motion } from "framer-motion";

export default function Home() {
  //----------------------------------------------
  // Texto de introducción
  //----------------------------------------------

  const introductionText = `
  En EcuaCleaner, nos especializamos en proporcionar servicios de limpieza de vehículos de alta calidad, garantizando la satisfacción del cliente a través de un servicio eficiente y amigable con el medio ambiente.
  `;

  //----------------------------------------------
  // Servicios destacados
  //----------------------------------------------

  const services = [
    {
      icon: "assets/images/servicios/limpieza-lotes-autos/auto_lote1.png",
      title: "Lotes de Autos",
      description: "Limpieza meticulosa y rápida de lotes de autos en concesionarios o parqueos.",
      link: "/servicios/lotes-autos",
    },

    {
      icon: "assets/images/servicios/limpieza-pisos/washing_patio.jpg",
      title: "Limpieza de Pisos, Casas y Techos",
      description: "Limpieza de pisos, casas y techos, garantizando un ambiente limpio y seguro.",
      link: "/servicios/limpieza-pisos",
    },
    {
      icon: "assets/images/servicios/limpieza-edificios/limpieza_edificios1.png",
      title: "Limpieza de Edificios y Gasolineras",
      description: "Limpieza profesional de edificios y gasolineras, manteniendo un ambiente limpio y seguro.",
      link: "/servicios/limpieza-edificios",
    },
    {
      icon: "assets/images/servicios/car-wash/car_washing3.jpg",
      title: "Car Wash",
      description: "Lavado profesional de vehículos, garantizando un acabado impecable.",
      link: "/servicios/car-wash",
    },
  ];

  //----------------------------------------------
  // Beneficios array y src img
  //----------------------------------------------

  const benefits = [
    "Equipo profesional y capacitado en limpieza de vehículos",
    "Estrategias personalizadas para cada cliente",
    "Uso de productos y métodos amigables con el medio ambiente",
    "Resultados de alta calidad y satisfacción garantizada",
    "Atención al cliente excepcional y soporte constante",
    "Precios competitivos con alto retorno de inversión",
  ];

  const imageSrc = "assets/images/benefits/car_washing6.png";

  //----------------------------------------------
  // Testimonios array
  //----------------------------------------------

  const testimonials = [
    {
      name: "Juan Pérez",
      photo: "assets/images/testimonials/test1.webp",
      text: "El servicio de EcuaCleaner es increíble. Mi auto siempre queda como nuevo.",
    },
    {
      name: "María Gómez",
      photo: "assets/images/testimonials/test2.webp",
      text: "Gracias a EcuaCleaner, la limpieza de mi flota de camiones nunca ha sido tan fácil y efectiva.",
    },
    {
      name: "Carlos Ramírez",
      photo: "assets/images/testimonials/test3.webp",
      text: "La atención al cliente y la calidad del trabajo de EcuaCleaner son inigualables. Muy recomendados.",
    },
  ];

  const videoUrl = "/assets/videos/main_video.mp4";

  const videoUrlen = "/assets/videos/ecuacleaner_eng.mp4";
  const videoUrles = "/assets/videos/ecuacleaner_esp.mp4";

  //----------------------------------------------

  return (
    <main className="">
      <Hero />
      <Introduction text={introductionText} />

      <div className="pt-4 pb-4 sm:pt-6 sm:pb-6 bg-gradient-to-br from-[#000000] to-[#717175]">
        <div className="flex flex-col sm:flex-row justify-center items-start">
          <div className="w-full sm:w-1/2 p-2">
            <h2 className="section-title text-primary mb-2 sm:mb-4">About Us</h2>
            <VideoPlayer2 videoUrl={videoUrlen} />
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <h2 className="section-title text-primary mb-2 sm:mb-4">Acerca de nosotros</h2>
            <VideoPlayer2 videoUrl={videoUrles} />
          </div>
        </div>
      </div>

      <FeaturedServices services={services} />
      <Benefits benefits={benefits} imageSrc={imageSrc} />

      <div className=" pt-spacing-1 pb-spacing-1 sm:pt-spacing-3 sm:pb-spacing-4 bg-dark">
        <h2 className="section-title text-primary">Servicios Profesionales y Garantizados</h2>
        <VideoPlayer2 videoUrl={videoUrl} />
      </div>

      <Testimonials testimonials={testimonials} />
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-6 bg-gradient-to-br from-white to-accent py-4 bg-clip-text text-center  font-bold font-primary text-size-6  leading-tight text-transparent sm:text-size-8 sm:leading-tight md:text-size-10 md:leading-tight"
        >
          <p className="pb-spacing-2">¿Listo para que tus vehículos luzcan como nuevos? </p>
          <a href="/contacto">
            <button className="bg-primary text-light font-bold px-3 py-2 rounded-full btn-custom text-size-2  hover:bg-accent hover:text-primary">
              Contáctanos
            </button>
          </a>
        </motion.h1>
      </LampContainer>
    </main>
  );
}
