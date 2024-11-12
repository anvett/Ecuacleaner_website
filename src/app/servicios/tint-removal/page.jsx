"use client";

import HeroImgBackg from "@/components/heroImgBackg/HeroImgBackg";
import HeroImgText from "@/components/heroImgText/HeroImgText";
import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "@/components/imageGallery/ImageGallery";

import CallToAction from "@/components/cta/cta";
import VideoPlayer2 from "@/components/videoPlayer2/VideoPlayer2";

const imageSrc = "/assets/images/servicios/remocion-tinta/hero.jpg";

const mainText = "Tint Windows Removal and Installation";
const secondaryTextOption1 = [
  "En EcuaCleaner, nos especializamos en servicios avanzados de windows tint removal and installation, devolviendo a tu vehículo su estética original o mejorando su apariencia con un tintado de alta calidad.",
  "Utilizamos productos de última generación y técnicas especializadas para instalar o remover el tintado de las ventanas sin comprometer la integridad de las superficies.",
  "Nuestro equipo de profesionales está altamente capacitado para brindar tratamientos de windows tint removal and installation adaptados a las características únicas de cada vehículo, asegurando resultados precisos y duraderos.",
  "Disponemos de tecnología avanzada y productos de calidad superior para una instalación o eliminación completa del tintado de las ventanas, manteniendo la seguridad y el acabado del vidrio.",
  "Adaptamos nuestros servicios de windows tint removal and installation a tu disponibilidad, brindando opciones flexibles para una experiencia conveniente y sin contratiempos.",
];

const secondaryTextOption2 = [
  "En EcuaCleaner, nos enorgullece brindar servicios de windows tint removal que restauran la apariencia de tu vehículo.",
  "Empleamos técnicas avanzadas y productos de alta calidad para eliminar el tinte sin dañar la superficie del auto.",
  "Nuestros profesionales están equipados con las herramientas y conocimientos necesarios para remover cualquier tipo de tinte en tu auto.",
  "Garantizamos una remoción de tinte profunda y detallada, utilizando solo los mejores productos del mercado.",
  "Ofrecemos servicios de remoción de tinte a domicilio, adaptándonos a tus necesidades y horarios para tu máxima comodidad.",
];

const images = [
  {
    src: "/assets/images/servicios/remocion-tinta/remocion_tinta1.jpg",
    alt: "Windows Tint Removal",
    title: "Tint Service 1",
  },
  {
    src: "/assets/images/servicios/remocion-tinta/remocion_tinta2.jpg",
    alt: "Windows Tint Removal",
    title: "Tint Service 2",
  },
  {
    src: "/assets/images/servicios/remocion-tinta/remocion_tinta3.jpg",
    alt: "Windows Tint Removal",
    title: "Tint Service 3",
  },
  {
    src: "/assets/images/servicios/remocion-tinta/remocion_tinta4.jpg",
    alt: "Windows Tint Removal",
    title: "Tint Service 4",
  },
  {
    src: "/assets/images/servicios/remocion-tinta/remocion_tinta5.jpg",
    alt: "Windows Tint Removal",
    title: "Tint Service 5",
  },
  {
    src: "/assets/images/servicios/remocion-tinta/remocion_tinta6.jpg",
    alt: "Windows Tint Removal",
    title: "Tint Service 6",
  },
  {
    src: "/assets/images/servicios/remocion-tinta/remocion_tinta7.jpg",
    alt: "Windows Tint Removal",
    title: "Tint Service 7",
  },
  {
    src: "/assets/images/servicios/remocion-tinta/remocion_tinta8.jpg",
    alt: "Windows Tint Removal",
    title: "Tint Service 8",
  },
  {
    src: "/assets/images/servicios/remocion-tinta/remocion_tinta9.jpg",
    alt: "Windows Tint Removal",
    title: "Tint Service 9",
  },
];


const videoUrl = "/assets/videos/remocion_tinta.mp4";

const cta1 = "¡Devuelve a tu vehículo su estética original o mejora su estilo con nuestro servicio de windows tint removal and installation! Contáctanos hoy mismo y descubre cómo nuestro equipo puede transformar la apariencia de tu auto con profesionalismo y precisión.";
const cta2 = "¡Haz que tu auto luzca impecable! Llámanos ahora para agendar un servicio profesional de instalación o remoción de tinte, confiable y detallado.";

const heroSecondaryText1 = "En EcuaCleaner, transformamos tu vehículo con nuestro servicio profesional de windows tint removal and installation. Con técnicas avanzadas y productos de calidad, instalamos o removemos el tintado de las ventanas, restaurando o mejorando la apariencia de tu auto con precisión y cuidado.";
//RemovaleroSecondaryText2 = "Confía en EcuaCleaner para un servicio impecable de instalación o remoción de tinte. Nuestro equipo de profesionales utiliza las mejores técnicas y productos para dejar tu auto con el estilo y acabado que deseas.";


export default function RemocionTinta() {
  return (
    <section className="relative bg-dark text-center overflow-hidden">
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/remocion-tinta/hero_back.jpg"
        mainText="Tint Windows Removal and Installation" 
        secondaryText={heroSecondaryText1}  // Puedes cambiar a heroSecondaryText2 según lo necesites
        buttonText="Contáctanos"
      />
      <div className="py-spacing-5 bg-dark">
        <HeroImgText imageSrc={imageSrc} mainText={mainText} secondaryText={secondaryTextOption1} />
      </div>

      <div>
        <ImageGallery title="Galería de Imágenes" images={images} />
      </div>

      {/* <div className="py-spacing-3 bg-gradient-to-br from-[#000000] to-[#717175]">
        <VideoPlayer2 videoUrl={videoUrl} />
      </div> */}

      <div>
        <CallToAction
          ctaText={cta1}  // Puedes cambiar a cta2 según lo necesites
          buttonText="Contáctanos"
          buttonLink="/contacto"
        />
      </div>
    </section>
  );
}
