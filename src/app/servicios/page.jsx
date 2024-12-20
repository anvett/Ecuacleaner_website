"use client";

import React from "react";
import CategoryLinks from "../../components/categoryLinks/CategoryLinks";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
  //----------------------------------------------
  // This is the data that will be used to render the services page
  //----------------------------------------------

  const serviciosItems = [
    {
      imageSrc: "/assets/images/servicios/limpieza-lotes-autos/auto_lote1.png",
      title: "Lotes de Autos",
      description: "Lavamos lotes de autos en concesionarios o parqueos con precisión y cuidado.",
      link: "/servicios/lotes-autos",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/camiones/limpieza_camiones1.jpg",
      title: "Limpieza de Camiones",
      description:
        "Ofrecemos servicios de limpieza para camiones, asegurando que estén impecables.",
      link: "/servicios/camiones",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/car-wash/car_washing2.jpg",
      title: "Car Wash",
      description: "Servicio de lavado de autos completo, cuidando cada detalle.",
      link: "/servicios/car-wash",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/full-detail/detailing_interior3.jpg",
      title: "Full Detail",
      description: "Detalle completo del vehículo para mantenerlo en las mejores condiciones.",
      link: "/servicios/full-detail",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/correccion-pintura/correccion_pintura2.jpg",
      title: "Corrección de Pintura",
      description:
        "Servicios de corrección de pintura para eliminar imperfecciones y restaurar el brillo.",
      link: "/servicios/paint-correction",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/remocion-tinta/hero_back.jpg",
      title: "Windows Tint Removal and Installation",
      description: "Eliminamos tintes del vehículo de manera profesional.",
      link: "/servicios/tint-removal",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/limpieza-botes/limpieza_botes.png",
      title: "Limpieza de Botes",
      description: "Limpieza de botes y yates para mantenerlos en perfecto estado.",
      link: "/servicios/limpieza-botes",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/remocion-olores/odor_removal.png",
      title: "Remoción de Olores",
      description: "Eliminamos olores desagradables del interior del vehículo.",
      link: "/servicios/odor-removal",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/leather-paint-sealing/leather_paint1.png",
      title: "Leather & Paint Sealing",
      description: "Sellado de cuero y pintura para proteger y prolongar su durabilidad.",
      link: "/servicios/leather-paint-sealing",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/limpieza-pisos/washing_patio.jpg",
      title: "Limpieza de Pisos, Casas y Techos",
      description: "Limpieza de pisos, casas y techos para mantenerlos en perfecto estado.",
      link: "/servicios/limpieza-pisos",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/limpieza-edificios/limpieza_edificios1.png",
      title: "Limpieza de Edificios y Gasolineras",
      description: "Limpieza de edificios y gasolineras para mantenerlos en perfecto estado.",
      link: "/servicios/limpieza-edificios",
      linkText: "Ver más",
      
    },
    {
      imageSrc: "/assets/images/servicios/ceramic-coat/ceramic_coating5.jpg",
      title: "Ceramic Coating",
      description: "Aplicación de cerámica para proteger la pintura del vehículo y mantener su brillo.",
      link: "/servicios/ceramic-coat",
      linkText: "Ver más",
      
    },
  ];

  return (
    <section className="relative  bg-dark text-center overflow-hidden  ">
      <motion.div
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <CategoryLinks
          title="Nuestros Servicios"
          subtitle="Somos especialistas con varios años de experiencia"
          items={serviciosItems}
        />
        ;
      </motion.div>
    </section>
  );
}
