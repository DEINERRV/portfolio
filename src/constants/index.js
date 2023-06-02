import {
    mobile,
    backend,
    web,
    reactjs,
    bootstrap,
    tailwind,
    nodejs,
    mongodb,
    git,
    una,
    muni,
    jobit,
    tripguide,
    jobAplications,
    springboot,
    mysql
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Bootstrap",
      icon: bootstrap
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Spring Boot",
      icon: springboot
    },
    {
      name: "MySQL",
      icon: mysql
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Basic University Projects",
      company_name: "UNA",
      icon: una,
      iconBg: "#383E56",
      date: "Jan 2019 - Dec 2020",
      points: [
        "Develop console applications using C++ and other related technologies.",
        "Collaborating with other classmates",
        "Performing unit tests",
        "Participating in code reviews and providing constructive feedback to my classmates",
      ],
    },
    {
      title: "Web University Projects",
      company_name: "UNA",
      icon: una,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Dec 2021",
      points: [
        "Developing and deplying web applications using html,css,js and java with mysql for backend",
        "Collaborating with other classmates",
        "Implementing responsive design",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Municipality of San Pablo",
      icon: muni,
      iconBg: "#383E56",
      date: "Jan 2022 - May 2023",
      points: [
        "Developing and deploying web applications using React and Spring Boot",
        "Eliciting project's requirements",
        "Collaborating with a team",
        "Using Scrum",
        "Performing unit tests",
        "Participating in code reviews and providing constructive feedback to my team members",
      ],
    },
    {
      title: "Mobile University Project",
      company_name: "UNA",
      icon: una,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Jun 2023",
      points: [
        "Developing a mobile applications using kotlin, Spring Boot and other related technologies.",
        "Performing Postman test",
        "Collaborating with other classmates",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Job Aplications",
      description:
        "Application dedicated to managing personal job applications. This comprehensive application encompassed essential functionalities such as authentication, registration, adding, modifying, and deleting job applications.",
      tags: [
        {
          name: "nodejs",
          color: "green-text-gradient"
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobAplications,
      links:[
        {
        name: "BackEnd",
        link: "https://github.com/DEINERRV/jobs-api"
        },
        {
          name: "FrontEnd",
          link: "https://github.com/DEINERRV/jobs-front"
        }
      ],
    },
  ];
  
  export { services, technologies, experiences, projects };