"use client";

import HeroImgBackg from "@/components/heroImgBackg/HeroImgBackg";
import HeroImgText from "@/components/heroImgText/HeroImgText";
import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "@/components/imageGallery/ImageGallery";
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";
import CallToAction from "@/components/cta/cta";
import VideoPlayer2 from "@/components/videoPlayer2/VideoPlayer2";

const imageSrc = "/assets/images/servicios/car-wash/hero.jpg";
const mainText = "Limpieza de Autos";
const secondaryText = [
  "En EcuaCleaner, nos especializamos en proporcionar servicios de limpieza de vehículos de alta calidad",
  "Garantizamos la satisfacción del cliente a través de un servicio eficiente y amigable con el medio ambiente.",
  "Nuestro equipo de trabajo está altamente capacitado para brindar un servicio de calidad y eficiente.",
  "Contamos con los mejores productos y equipos para garantizar la limpieza de tu vehículo.",
  "Ofrecemos servicios de limpieza de autos a domicilio, para tu comodidad y seguridad",
];

const images = [
  { src: "/assets/images/servicios/car-wash/car_washing1.jpg", alt: "Imagen 1", title: "Car Wash 1" },
  { src: "/assets/images/servicios/car-wash/car_washing2.jpg", alt: "Imagen 2", title: "Car Wash 2" },
  { src: "/assets/images/servicios/car-wash/car_washing3.jpg", alt: "Imagen 3", title: "Car Wash 3" },
  { src: "/assets/images/servicios/car-wash/car_washing4.jpg", alt: "Imagen 4", title: "Car Wash 4" },
  { src: "/assets/images/servicios/car-wash/car_washing5.jpg", alt: "Imagen 5", title: "Car Wash 5" },
  { src: "/assets/images/servicios/car-wash/car_washing6.jpg", alt: "Imagen 6", title: "Car Wash 6" },
  { src: "/assets/images/servicios/car-wash/car_washing7.jpg", alt: "Imagen 7", title: "Car Wash 7" },
  { src: "/assets/images/servicios/car-wash/car_washing8.jpg", alt: "Imagen 8", title: "Car Wash 8" },
  { src: "/assets/images/servicios/car-wash/car_washing9.jpg", alt: "Imagen 9", title: "Car Wash 9" },
];

const videoUrl = '/assets/videos/car_washing1.mp4';

export default function CarWash() {
  return (
    <section className="relative  bg-dark text-center overflow-hidden  ">
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/car-wash/hero_back.jpg"
        mainText="Limpieza de Autos"
        secondaryText="Ofrecemos los mejores servicios de limpieza para tu vehículo."
        buttonText="Contáctanos"
      />
      <div className="py-spacing-5 bg-dark">
        <HeroImgText imageSrc={imageSrc} mainText={mainText} secondaryText={secondaryText} />
      </div>

      <div>
        <ImageGallery title="Galería de Imágenes" images={images} />
      </div>

      <div className="py-spacing-3 bg-gradient-to-br from-[#000000] to-[#717175]">
        <VideoPlayer2 videoUrl={videoUrl} />
      </div>

      <div>
        <CallToAction ctaText="¿Listo para limpiar tu auto?" buttonText="Contáctanos" buttonLink="/contacto" />
      </div>
    </section>


  );
}

