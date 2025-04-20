import { resumeObject } from "@/app/api/infoHelpers";
import { ResumeFromServer, ResumeReady } from "@/app/api/types";

const me: ResumeFromServer = {
  id: "achivments",
  basics: {
    name: "Maksim Kabanov",
    label: "Senior Frontend Engineer",
    email: "maksimkabanov@gmail.com",
    phone: "+34698990700",
    location: {
      address: "Balmes 59",
      postalCode: "08007",
      city: "Barcelona",
      countryCode: "ES",
      region: "Catalonia",
    },
    summary: `Senior Frontend Engineer with over 15 years of experience delivering enterprise-grade applications across finance, analytics, and infrastructure. Specialized in building scalable architectures with React, Angular, and TypeScript, and in optimizing complex UI systems for performance, maintainability, and business value. 
Led frontend efforts in greenfield and legacy projects, including UI virtualization for 10,000+ row tables (reducing load time from minutes to seconds) and smart automation dashboards that cut manual workflows by over 70%. 
While frontend is my core focus, I also bring hands-on Node.js experience for prototyping APIs, some Firebase Functions, and building dev tools. I love myjob, clean code, and solving hard problems with pragmatic solutions.

Watch my attachments and "Features" also.`,
  },
  work: [
    {
      name: "Janea Systems",
      position: "Senior Frontend Engineer",
      startDate: "2022-04",
      endDate: "2025-04",
      description:
        "Worked across multiple high-profile enterprise projects in greenfield and legacy environments, delivering performant UIs and reusable architecture.\n\n" +
        "• Built staffing dashboard in Angular 18 with Signals, OnPush change detection, and drag-and-drop timelines. Replaced manual planning with a smart assignment system, increasing efficiency by ~70%. Enabled dynamic PDF/Excel export — reduced time to generate 60 CVs from 7–10 min to 20 sec, with support for multiple templates.\n" +
        "• Refactored Microsoft BI Report Viewer: introduced table virtualization for 10,000+ row datasets, reducing page load time from indefinite to a few seconds. Redesigned border rendering logic to eliminate visual glitches and match Report Builder behavior, significantly improving user satisfaction.\n" +
        "• Led frontend architecture and implementation of F5 Policy Supervisor using React, Redux Toolkit, and OpenAPI. Delivered MVP in 4 months.\n" +
        "• Wrote extensive Cypress and Jest tests. Collaborated with product and design in tight feedback loops.",
      technologies: [
        "React",
        "Redux Toolkit",
        "TypeScript",
        "Angular 18",
        "Signals",
        "OpenAPI",
        "Jest",
        "Cypress",
        "jsPDF",
        "ExcelJS",
      ],
    },
    {
      name: "Sberbank Technologies",
      position: "Senior Frontend Developer",
      startDate: "2018-01",
      endDate: "2022-03",
      description:
        "Delivered modular internal systems using React and React Native, collaborating across distributed teams and integrating with legacy environments.\n\n" +
        "• Developed a modular React-based frontend with dynamic loading via DataBus, supporting internal and external environments. Led integration of third-party components and deployed the system organization-wide.\n" +
        "• Maintained and evolved a React Native app for appointment and contract handling. Migrated legacy architecture to modern Redux-based stack, resolving critical bugs and improving app performance and stability.\n" +
        "• Built reusable frontend modules for internal appointment workflows, streamlining business processes and improving time-to-delivery.",
      technologies: [
        "React",
        "React Native",
        "Redux",
        "Thunk",
        "TypeScript",
        "Webpack",
        "REST",
      ],
    },
    {
      name: "Time and Space",
      position: "Lead Full-Stack Developer",
      startDate: "2012-02",
      endDate: "2017-12",
      description:
        "Led full-stack development of custom analytics and reporting systems for enterprise clients, with deep integration into backend infrastructure and high-performance UI components.\n\n" +
        "• Built a Gantt chart system on SlickGrid with custom rendering, real-time filtering, and print-to-PDF capabilities, enabling project teams to manage timelines with precision.\n" +
        "• Developed interactive dashboards with d3.js, jQuery, and ExtJS, integrating multiple databases (PostgreSQL, Oracle, MSSQL) and implementing automated reporting logic.\n" +
        "• Implemented caching strategies and refactored PHP backend for better performance and long-term maintainability.\n" +
        "• Added custom visual elements like maps and advanced widgets, improving UX for complex business intelligence tools.\n" +
        "• Led architectural decisions, coordinated across teams, and maintained strong data consistency across systems.",
      technologies: [
        "JavaScript",
        "SlickGrid",
        "ExtJS",
        "d3.js",
        "PostgreSQL",
        "MSSQL",
        "Oracle",
        "PHP",
        "REST",
      ],
    },
    {
      name: "Integral KT",
      position: "Full-Stack Developer",
      startDate: "2010-08",
      endDate: "2011-10",
      description:
        "Developed internal production management tools for X5 Retail Group, covering both frontend and backend workflows with strong database logic and document automation.\n\n" +
        "• Built an order management system with PHP backend and ExtJS frontend, using advanced PL/SQL queries to handle complex business logic.\n" +
        "• Implemented PDF and Excel export features using PHP libraries, automating reporting processes that were previously manual.\n" +
        "• Refactored legacy codebase for improved performance and maintainability, resolving major bottlenecks.\n" +
        "• Worked in a small agile team using SVN and Mercurial for version control and NetBeans as IDE.",
      technologies: [
        "PHP",
        "ExtJS",
        "PL/SQL",
        "Excel (PHP)",
        "PDF (PHP)",
        "SVN",
      ],
    },
  ],
  education: [
    {
      institution: "National Research Nuclear University MEPhi",
      area: "Engineering, Computer Science",
      studyType: "Bachelor",
      endDate: "2011",
    },
  ],
  skills: [
    { name: "React.js", level: 4 },
    { name: "Angular", level: 3 },
    { name: "TypeScript", level: 4 },
    { name: "JavaScript", level: 4 },
    { name: "Functional Programming", level: 4 },
    { name: "State Management (Redux, Signals, NgRx)", level: 4 },
    { name: "Node.js", level: 2 },
    { name: "React Native", level: 2 },
    { name: "Cypress", level: 3 },
    { name: "Jest", level: 3 },
    { name: "PDF & Excel Generation (jsPDF, ExcelJS)", level: 3 },
    { name: "API Integration (REST, OpenAPI)", level: 3 },
    {
      name: "UI Frameworks (Fluent UI, PrimeNG, Material UI)",
      level: 3,
    },
    { name: "Architecture & Design Patterns", level: 3 },
    { name: "Agile & Remote Collaboration", level: 3 },
    { name: "Performance Optimization", level: 3 },
    { name: "Problem Solving", level: 4 },
    { name: "Mentoring & Technical Leadership", level: 3 },
    { name: "Product Thinking & UX Awareness", level: 3 },
  ],
  languages: [
    { language: "English", fluency: "Upper-Intermediate" },
    { language: "Spanish", fluency: "Upper-Intermediate" },
    { language: "Russian", fluency: "Native" },
  ],
};

export default resumeObject(me) as ResumeReady;
