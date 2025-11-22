import Java from "@/assets/icons/java.svg";
import SpringBoot from "@/assets/icons/spring-boot.svg";
import MicroServices from "@/assets/icons/micro-services.svg";
import Jwt from "@/assets/icons/jwt.svg";
import Hibernate from "@/assets/icons/hibernate.svg";
import AWS from "@/assets/icons/aws.svg";
import Git from "@/assets/icons/git.svg";
import CircleCi from "@/assets/icons/circle-ci.svg";
import React from "@/assets/icons/react.svg";
import Tailwind from "@/assets/icons/tailwind.svg";
import MySQL from "@/assets/icons/my-sql.svg";
import Figma from "@/assets/icons/figma.svg";
import Finance from "@/assets/finance.jpg";
import BOM from "@/assets/bom.jpg";
import Retail from "@/assets/retail.jpg";
import { HiCodeBracket } from "react-icons/hi2";
import { PiGraduationCapLight } from "react-icons/pi";
import { PiSquaresFourLight } from "react-icons/pi";

export const info = [
  {
    icon: <HiCodeBracket />,
    title: "Core Skills",
    description:
      "Java · Springboot · Microservices · JWT · JPA/Hibernate · SQL",
    link: "#skills",
  },
  {
    icon: <PiSquaresFourLight />,
    title: "Projects",
    description:
      "Worked on 3 large-scale projects: Financial, BOM, and Retail.",
    link: "#projects",
  },
  {
    icon: <PiGraduationCapLight />,
    title: "Education",
    description: "B.Tech in Computer Science from BBDNITM, Lucknow.",
    link: "#education",
  },
];

export const skills = [
  { name: "Java", icon: Java },
  { name: "Spring-boot", icon: SpringBoot },
  { name: "Microservice", icon: MicroServices },
  { name: "Jwt", icon: Jwt },
  { name: "Hibernate", icon: Hibernate },
  { name: "MySQL", icon: MySQL },
  { name: "AWS", icon: AWS },
  { name: "Git", icon: Git },
  { name: "Circle Ci", icon: CircleCi },
  { name: "React", icon: React },
  { name: "Tailwind", icon: Tailwind },
  { name: "Figma", icon: Figma },
];

export const projects = [
  {
    image: Finance,
    name: "Financial Services Development",
    role: "Developer",
    duration: "(Sep 2020 – Jan 2023)",
    description:
      "Developed core banking systems to streamline online transactions, mobile payments, foreign remittances, loan management, and mortgage processing. My work focused on optimizing these services to enhance security and improve the overall digital banking experience for users.",
    techStack: ["Java 1.8", "Spring Boot", "MySQL", "IBM WebSphere", "STS 4.2"],
  },
  {
    image: BOM,
    name: "BOM Manufacturing Development ",
    role: "Developer",
    duration: "(Jan 2023 – Jan 2024)",
    description:
      "Worked on the Bill of Materials (BOM) module, within the manufacturing data management tool. This project involved standardizing production data across multiple global locations and streamlining the process of regularizing new configuration changes and updates across various manufacturing facilities.",
    techStack: ["Java 1.8", "Spring Boot", "MySQL", "Oracle VBS", "Jira"],
  },
  {
    image: Retail,
    name: "Retail Customer Support Application",
    role: "Developer",
    duration: "(Jan 2024 – Present)",
    description:
      "Developing a Customer Support Application for the retail sector, modernizing legacy systems, and proposing automated solutions for manual efforts. As part of this, I am actively involved in solving existing system issues while creating scalable and efficient solutions for future needs.",
    techStack: [
      "Java 21",
      "Spring Boot",
      "AWS",
      "Circle CI",
      "Oracle SQL",
      "Jira",
    ],
  },
];
