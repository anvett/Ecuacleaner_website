"use client";

import HeroImgBackg from "@/components/heroImgBackg/HeroImgBackg";
import HeroImgText from "@/components/heroImgText/HeroImgText";
import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "@/components/imageGallery/ImageGallery";
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";
import CallToAction from "@/components/cta/cta";
import VideoPlayer2 from "@/components/videoPlayer2/VideoPlayer2";

const imageSrc = "/assets/images/servicios/ceramic-coat/hero.jpg";
const mainText = "Revestimiento Cerámico";
const secondaryText = [
  "En EcuaCleaner, ofrecemos un servicio de aplicación de revestimiento cerámico para proteger y embellecer tu vehículo.",
  "Nuestro proceso de aplicación garantiza una capa protectora que realza el brillo y protege la pintura de tu auto contra factores externos.",
  "Contamos con un equipo experto que utiliza productos de la más alta calidad para asegurar resultados duraderos y efectivos.",
  "El revestimiento cerámico proporciona una barrera contra rayones leves, contaminantes y la exposición a los rayos UV, manteniendo la pintura en perfecto estado.",
  "Ofrecemos este servicio en nuestro establecimiento, asegurando un tratamiento cuidadoso y detallado para tu vehículo.",
];

const images = [
  { src: "/assets/images/servicios/ceramic-coat/ceramic_coating1.jpg", alt: "Imagen 1", title: "Revestimiento Cerámico 1" },
  { src: "/assets/images/servicios/ceramic-coat/ceramic_coating2.jpg", alt: "Imagen 2", title: "Revestimiento Cerámico 2" },
  { src: "/assets/images/servicios/ceramic-coat/ceramic_coating3.jpg", alt: "Imagen 3", title: "Revestimiento Cerámico 3" },
  { src: "/assets/images/servicios/ceramic-coat/ceramic_coating4.jpg", alt: "Imagen 4", title: "Revestimiento Cerámico 4" },
  { src: "/assets/images/servicios/ceramic-coat/ceramic_coating5.jpg", alt: "Imagen 5", title: "Revestimiento Cerámico 5" },
  { src: "/assets/images/servicios/ceramic-coat/ceramic_coating6.jpg", alt: "Imagen 6", title: "Revestimiento Cerámico 6" },
  { src: "/assets/images/servicios/ceramic-coat/ceramic_coating7.jpg", alt: "Imagen 7", title: "Revestimiento Cerámico 7" },
  { src: "/assets/images/servicios/ceramic-coat/ceramic_coating8.jpg", alt: "Imagen 8", title: "Revestimiento Cerámico 8" },
  { src: "/assets/images/servicios/ceramic-coat/ceramic_coating9.jpg", alt: "Imagen 9", title: "Revestimiento Cerámico 9" },
];

const videoUrl = '/assets/videos/ceramic_coating1.mp4';

export default function CeramicCoat() {
  return (
    <section className="relative  bg-dark text-center overflow-hidden  ">
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/ceramic-coat/hero_back.jpg"
        mainText="Revestimiento Cerámico"
        secondaryText="Protege y embellece tu vehículo con nuestro servicio de revestimiento cerámico."
        buttonText="Contáctanos"
      />
      <div className="py-spacing-5 bg-dark">
        <HeroImgText imageSrc={imageSrc} mainText={mainText} secondaryText={secondaryText} />
      </div>

      <div>
        <ImageGallery title="Galería de Imágenes" images={images} />
      </div>

      {/* <div className="py-spacing-3 bg-gradient-to-br from-[#000000] to-[#717175]">
        <VideoPlayer2 videoUrl={videoUrl} />
      </div> */}

      <div>
        <CallToAction ctaText="¿Listo para proteger tu auto con un revestimiento cerámico?" buttonText="Contáctanos" buttonLink="/contacto" />
      </div>
    </section>
  );
}

