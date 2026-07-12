export type Project = {
  name: string;
  tag: string;
  description: string;
  longDescription: string;
  features: string[];
  stack: string[];
  github: string;
  live: string;
  images: string[];
};

export const PROJECTS: Project[] = [
  {
    name: "ZYNTRA",
    tag: "E-commerce · MERN Stack",
    description:
      "Final-year project: a full e-commerce platform with product catalog, cart, secure checkout, order tracking, and an admin dashboard for inventory management.",
    longDescription:
      "ZYNTRA is a complete e-commerce platform built as my final-year project, covering the full customer journey from browsing to checkout. The backend exposes a REST API for product, cart, and order management, secured with JWT-based authentication, while the frontend handles dynamic product filtering, a persistent cart, and order tracking. An admin dashboard lets store owners manage inventory, view orders, and update stock levels in real time.",
    features: [
      "JWT-based authentication & role-based access (customer / admin)",
      "Product catalog with search, filtering, and category browsing",
      "Persistent cart and secure checkout flow",
      "Order tracking and order history per user",
      "Admin dashboard for inventory and order management",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/KaushalRana1999/Zyntra",
    live: "https://zyntrafrontend.vercel.app/",
    images: [
      "/projects/Zyntra/Zyntra.png",
      "/projects/Zyntra/Zyntra-2.png",
      "/projects/Zyntra/Zyntra-3.png",
    ],
  },
  {
    name: "Hospital Management System",
    tag: "Full-Stack Web App",
    description:
      "A system for managing patient records, appointment scheduling, and doctor availability, with role-based access for admins, doctors, and front-desk staff.",
    longDescription:
      "A role-based hospital management system designed to streamline day-to-day clinic operations. Admins manage staff and departments, doctors manage their availability and view patient records, and front-desk staff handle appointment scheduling — all from dedicated dashboards built on a shared Node.js + Express backend with a MongoDB schema in the MERN stack.",
    features: [
      "Role-based dashboards for admin, doctor, and front-desk staff",
      "Patient record management with appointment history",
      "Doctor availability and appointment scheduling",
      "RESTful API built with MERN stack",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/KaushalRana1999/Hospital",
    live: "https://hospital-frontend-orhk.onrender.com",
    images: [
      "/projects/Hospital/Hospital.png",
      "/projects/Hospital/Hospital-2.png",
      "/projects/Hospital/Hospital-3.png",
    ],
  },
  {
    name: "Employee Management System (EMS) Portal",
    tag: "Full-Stack Web App",
    description:
      "A portal for managing employees, departments, tasks, and leave requests, with role-based access for Admin, HR, and Employees.",
    longDescription:
      "A comprehensive employee management system built with the MERN stack to streamline HR and organizational workflows. Admins can oversee departments, manage employees, and generate analytics. HR staff handle onboarding, leave approvals, and performance reports. Employees have their own portal to update profiles, track tasks, and apply for leave. The system features secure authentication, role-based dashboards, and a responsive UI for efficient workforce management.",
    features: [
      "Role-based dashboards for Admin, HR, and Employees",
      "Employee record management with CRUD operations",
      "Department creation and management",
      "Task assignment and tracking",
      "Leave application and approval workflow",
      "Analytics and reporting with charts",
      "Secure authentication with JWT",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "TailwindCSS"],
    github: "https://github.com/KaushalRana1999/EMS",
    live: "https://ems-frontend-0ua1.onrender.com",
    images: ["/projects/EMS/EMS-1.png", "/projects/EMS/EMS-2.png"],
  },
  {
    name: "Todo Application",
    tag: "Full-Stack Web App",
    description:
      "A simple application for managing tasks, allowing users to create, update, and delete to‑dos, set deadlines, and track completion status",
    longDescription:
      "A simple yet powerful task management application built with Spring Boot (Java) and PostgreSQL. Users can create, update, delete, and mark tasks as complete, with support for deadlines and status tracking. The backend is powered by RESTful APIs with Hibernate/JPA for ORM, while the frontend is served through Spring Boot's resources/static directory, enabling a single deployment structure. Designed with a responsive UI and secure database integration, the app helps users organize and track their daily activities efficiently.",
    features: [
      "CRUD operations for task management",
      "Deadline and completion status tracking",
      "Spring Boot RESTful APIs with Java",
      "PostgreSQL database integration with Hibernate/JPA",
      "Frontend served via resources/static for unified deployment",
      "Responsive UI for seamless user experience",
      "Cloud-ready configuration with environment-based DB connection",
    ],
    stack: ["React", "java", "SpringBoot", "PostgreSQL", "TailwindCSS"],
    github: "https://github.com/KaushalRana1999/Todo-App/tree/main/src",
    live: "https://todo-app-nczm.onrender.com/",
    images: ["/projects/Todo/Todo.png"],
  },
];