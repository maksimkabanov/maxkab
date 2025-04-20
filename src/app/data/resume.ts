import { ResumeFromServer } from "@/app/api/types";

export const resume: ResumeFromServer = {
  basics: {
    name: "Maksim Kabanov",
    label: "Senior Frontend or Fullstack Engineer",
    image: "",
    email: "maksimkabanov@gmail.com",
    phone: "+34698990700",
    url: "https://www.linkedin.com/in/maksim-kabanov/",
    summary: `With over 15 years of professional experience in JavaScript development, I have built and maintained large-scale enterprise systems for both private companies and government-level clients. Throughout my career, I have delivered complex web applications using modern frontend frameworks like React.js, Angular, and Vue.js, while also keeping a strong interest in backend development with Node.js.

I bring a deep understanding of JavaScript and TypeScript, along with solid architectural thinking, attention to detail, and the ability to take ownership of features from concept to production. While frontend remains my core expertise, I am ready and motivated to contribute on the server side as well — updating my previous experience with PHP, Node.js, and databases like PostgreSQL and MongoDB.`,
    location: {
      address: "Balmes 59",
      postalCode: "08007",
      city: "Barcelona",
      countryCode: "34",
      region: "Barcelona",
    },
    profiles: [],
  },
  work: [
    {
      name: "Janea Systems",
      position: "Senior Frontend Engineer",
      url: "https://www.janeasystems.com",
      startDate: "April 2022",
      endDate: "Present",
      description:
        "Worked as a Senior Frontend Engineer on multiple enterprise projects for international clients. Took part in greenfield development, architecture design, performance optimization, and delivery of complex UI features using React, Angular, and TypeScript in agile teams.",
      accomplishments:
        "Contributed to three major projects across different domains, delivering key features and improvements tailored to each system's specific needs.",
      technologies: [],
      projects: [
        {
          name: "Microsoft – Report Viewer (part of Microsoft BI suite)",
          description: `Worked on performance-critical and feature-rich components of the Report Viewer.
	Bugfixing, new components and Sagas, unit tests and end-to-end Cypress tests for new features`,
          accomplishments: `
                    •	Refactored the table subsystem: introduced virtualization for dynamic tables with complex structures (rowspans, colspans, fixed headers/columns)
	•	Fully restructured and optimized existing codebase for maintainability
	•	Implemented accurate rendering logic for table borders to match behavior of native Report Builder`,
          technologies: [
            "React",
            "TypeScript",
            "Redux",
            "Redux-Saga",
            "Jest",
            "Cypress",
            "Fluent UI",
            "React-Virtual",
          ],
        },
        {
          name: "Internal Staffing Dashboard",
          description: `Developed an internal tool to visualize team allocations, projects, and roles over time.
	•	Built drag-and-drop timeline interface for hierarchical (tree-based) project-role structures
	•	Used Angular Signals and OnPush Change Detection to optimize performance`,
          accomplishments:
            "Implemented dynamic PDF and Excel export directly from client-side, faster, more light-weight and very flexible comparing to server generation",
          technologies: [
            "Angular 18",
            "TypeScript",
            "PrimeNG",
            "Signals",
            "ChangeDetectionStrategy.OnPush",
            "jsPDF",
            "ExcelJS",
            "Drag and Drop",
            "Client-side rendering",
          ],
        },
        {
          name: "F5 – Policy Management System",
          description: `Lead frontend engineer on a greenfield project to build a policy configuration and management platform.
	•	Designed and implemented the entire project structure and reusable architecture
	•	Delivered a production-ready MVP within 4 months
	•	Built core components, state management with Redux Toolkit and Thunk
	•	Integrated OpenAPI for automated typed API consumption`,
          accomplishments: "",
          technologies: [
            "React",
            "TypeScript",
            "Redux",
            "Thunk",
            "Redux Toolkit",
            "OpenAPI",
          ],
        },
      ],
    },
    {
      name: "Sberbank -Technology Moscow",
      position: "Senior Frontend developer",
      url: "",
      startDate: "Jan 2018",
      endDate: "Mar 2022",
      description:
        "Developer on internal projects, focusing on client-side applications. ",
      accomplishments: "",
      technologies: [],
      projects: [
        {
          name: "Frontend Engineer",
          description: `	•	Developed a modular frontend application from scratch using React, Redux, and Thunk, with integration of third-party components and internal systems
	•	Worked on building a self-contained bundle with dynamic loading of external applications via DataBus, supporting both internal (via app manager) and external launch environments
	•	Led the integration of components developed by other teams into a unified system
	•	Implemented flexible build configuration with Webpack, introduced optional TypeScript typings
	•	Successfully deployed the product into production across the organization`,
          technologies: ["React.js", "Redux", "Thunk", "Webpack", "TypeScript"],
        },
        {
          name: "React Native Engineer",
          description: `	•	Maintained and evolved a React Native mobile application used across the organization
	•	Resolved bugs, implemented new features, and improved overall application stability
	•	Gradually migrated legacy components to a modern architecture using React, Redux, and Thunk, improving maintainability and performance`,
          technologies: [
            "React.js",
            "React Native",
            "Redux",
            "Redux-Thunk",
            "Reselect",
            "Node.js",
            "Webpack",
            "JavaScript (ES6+)",
            "TypeScript (partial)",
            "REST APIs",
            "HTML",
            "CSS",
            "Git",
          ],
        },
      ],
    },
    {
      name: "Time and Space",
      position: "Lead Full Stack Developer",
      url: "https://tas-project.ru",
      startDate: "April 2014",
      endDate: "December 2017",
      description:
        "Led development of internal reporting systems and Gantt-chart tools for enterprise use.",
      accomplishments: `
            • Developed automatic reporting tools with DB integrations (MSSQL, Postgres, Oracle)
            • Built a Gantt chart based on SlickGrid with custom graphic rendering and printing to PDF
            • Implemented map service integration, widgets via d3, jQuery, ExtJS
            • Optimized backend with caching, refactored server for better maintainability`,
      technologies: [
        "PHP",
        "PostgreSQL",
        "JavaScript",
        "ExtJS",
        "SlickGrid",
        "HTML",
        "CSS",
        "REST",
        "d3.js",
        "jQuery",
        "Oracle",
        "MSSQL",
      ],
    },
    {
      name: "Time and Space",
      position: "Full Stack Engineer",
      url: "https://tas-project.ru",
      startDate: "February 2012",
      endDate: "April 2014",
      description:
        "Co-developer of a modular, visual reporting system with rich data interaction.",
      accomplishments: `
            • Built table, chart, and graph components with interactive data elements
            • Participated in architectural planning and user-driven UI/UX decisions
            • Maintained and improved error handling, performance, and system logic`,
      technologies: [
        "PHP",
        "PostgreSQL",
        "JavaScript",
        "ExtJS",
        "HTML",
        "CSS",
        "REST",
      ],
    },
    {
      name: "Integral KT",
      position: "Full Stack Developer",
      url: "",
      startDate: "August 2010",
      endDate: "October 2011",
      description:
        "Full stack development of a web-based production management system for X5 Retail Group, covering both backend and frontend components.",
      accomplishments: `
            • Built modules such as order management: PHP backend classes, ExtJS components, and complex SQL queries (PL/SQL)
            • Developed features for data import/export in Excel and PDF using PHP libraries• Refactored and optimized legacy code for performance and maintainability
            • Worked in a small team with version control (SVN, Mercurial) and NetBeans IDE`,
      technologies: [
        "PHP",
        "Oracle",
        "JavaScript",
        "ExtJS",
        "HTML",
        "CSS",
        "REST",
        "PL/SQL",
        "Excel (PHP)",
        "PDF (PHP)",
        "SVN",
        "Mercurial",
        "NetBeans",
      ],
    },
  ],
  volunteer: [],
  education: [
    {
      institution:
        "National Research Nuclear University MEPhi (Moscow Engineering Physics Institute)",
      url: "",
      area: "Engineering, Computer Science",
      studyType: "Bachelor",
      startDate: "",
      endDate: "2011",
      score: "",
      courses: [],
    },
  ],
  awards: [],
  certificates: [],
  publications: [],
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
    {
      language: "English",
      fluency: "Upper-Intermediate",
    },
    {
      language: "Spanish",
      fluency: "Upper-Intermediate",
    },
    {
      language: "Russian",
      fluency: "Native",
    },
  ],
  interests: [
    {
      name: "Wildlife",
      keywords: ["Ferrets", "Unicorns"],
    },
  ],
  references: [],
  projects: [
    {
      name: "Microsoft Report Viewer",
      startDate: "2022",
      endDate: "Present",
      description:
        "Performance-critical and feature-rich components of the Report Viewer, part of Microsoft BI suite. Implemented virtualization for dynamic tables, optimized codebase, and accurate rendering logic.",
      highlights: [
        "Refactored table subsystem with virtualization for complex structures",
        "Optimized existing codebase for maintainability",
        "Implemented accurate rendering logic for table borders",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Redux",
        "Redux-Saga",
        "Jest",
        "Cypress",
        "Fluent UI",
        "React-Virtual",
      ],
      url: "",
    },
    {
      name: "Internal Staffing Dashboard",
      startDate: "2022",
      endDate: "Present",
      description:
        "Internal tool for visualizing team allocations, projects, and roles over time. Features drag-and-drop timeline interface and dynamic export capabilities.",
      highlights: [
        "Built drag-and-drop timeline interface for hierarchical structures",
        "Implemented dynamic PDF and Excel export",
        "Optimized performance with Angular Signals",
      ],
      technologies: [
        "Angular 18",
        "TypeScript",
        "PrimeNG",
        "Signals",
        "ChangeDetectionStrategy.OnPush",
        "jsPDF",
        "ExcelJS",
      ],
      url: "",
    },
    {
      name: "F5 Policy Management System",
      startDate: "2022",
      endDate: "Present",
      description:
        "Lead frontend engineer on a greenfield project for policy configuration and management platform. Delivered production-ready MVP within 4 months.",
      highlights: [
        "Designed and implemented project structure and architecture",
        "Built core components and state management",
        "Integrated OpenAPI for typed API consumption",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Redux",
        "Thunk",
        "Redux Toolkit",
        "OpenAPI",
      ],
      url: "",
    },
  ],
  id: "d8225f73-e065-4b54-b7f4-8e86d5cd1e0a",
};

// Экспортируем отдельные части резюме для удобства
export const { basics, work, education, skills, projects, languages } = resume;
