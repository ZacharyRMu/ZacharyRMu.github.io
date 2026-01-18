export const siteConfig = {
  name: "Zachary Murray",
  title: "Electrical Engineer",
  description: "Portfolio website of Zachary Murray",
  accentColor: "#1d4ed8",
  social: {
    email: "z.zacharym@gmail.com",
    linkedin: "https://www.linkedin.com/in/murrayzachary/",
    github: "https://github.com/ZacharyRMu",
  },
  aboutMe:
    "I'm an engineer with a deep respect for how things actually work. My background spans embedded systems, RF and signal processing and system integation, with a strong hands-on focus: Designing PCB's, validating hardware, debugging real signals, and building systems that survive outside of simulations. I enjoy working at the boundaries between theory and reality, where datasheets meet oscilloscopes. At the same time, I care deeply about clarity, communication, and design. I believe good engineering should be understandable, documented, and thoughtfully presented. This shows up in how I structure projects, write documentation, design interfaces, and even in how I approach visual layout and storytelling. Engineering isn't just about solving problems, it's about making solutions legible to others.",
  skills: ["Electrical Design and Analysis", "C/C++", "Python", "Multisim", "Intrumentation", "Docker", "Microsoft Office", "Studio 5000", "Siemens TIA Portal", "VNA Operation", "Soidworks", "AutoCAD Electrical", "KiCad", "Adobe Creative Cloud"],
  projects: [
    {
      name: "MATS Antenna Rotator",
      description:
        "Mobile Satellite Antenna Rotator capable of tracking, receiving, and decoding.",
      link: "https://github.com/ZacharyRMu/MATS",
      skills: ["System Design", "Linux", "Embedded Systems", "Python","C/C++","Power Electronics","Mechanical Design"],
    },
    {
      name:"ESP32 Alarm Clock",
      description: "An wifi-enabled alarm clock using an ESP32. Custom PCB created in KiCad, ordered through OSHPark. PCB was built up using common lab hardware, and through-hole components soldered by hand. Solidworks was used to create an enclosure, and 3D printed using PLA. Entire system assembled and tested, ensuring a working prototype.",
      link: "https://github.com/ZacharyRMu/Alarm-Clock",
      skills: ["KiCad","PCB Assembly", "PCB Testing","Oscilloscope","Logic Analyzer","C/C++","Git","Solidworks","3D Printing (FDM)"]
    },
    {
      name: "Simple DirectMedia Layer Library Pong",
      description:
        "Designed a Pong game using Simple Direct Media Layer, including an AI opponent. Compiled for Windows, Linux, and MacOS.",
      link: "to be added later",
      skills: ["C Programming", "Simple Direct Media Layer", "Git","Bash","Linux"],
    },
  ],
  experience: [
    {
      company: "Dematic",
      title: "Controls Engineering Intern",
      dateRange: "May 2025 - August 2025",
      bullets: [
        "Perform system testing and validation using Emulate 3D on multiple types of material handling systems.",
        "Utilize both Rockwell Automation’s Studio 5000 and Siemens’ TIA Portal V17 and V20 to validate PLC programs for operation, safety, and reliability.",
        "Assisted in upgrading existing PLC programs from Siemens TIA V17 to Siemens TIA V20, performing validation testing to ensure reliable operation.",
        "Established an emulation checklist to perform when validating future material handling systems, ensuring quality of work, functionality, and reliability of the system enabling a more efficient commissioning timeline."
      ],
    },
    {
      company: "Komatsu",
      title: "Electrical Engineering Product Support Intern",
      dateRange: "May 2024 - August 2024",
      bullets: [
        "Develop, draft, and publish comprehensive service documentation, including global service bulletins and knowledge base articles to ensure clear and accurate communication of technical information.",
        "Collaborate with subject matter experts to investigate machine component failures, determining root causes and outlining the resolution process to ensure timely and effective problem-solving.",
        "erform thorough inspections of machine parts both in laboratory and field settings to assess supplier quality and identify any non-conformances or potential issues.",
        "Lead research projects to analyze a series of component failures, isolating common causes and recommending solutions to mitigate recurrence in future operations."
      ],
    },
  ],
  education: [
    {
      school: "Milwaukee School of Engineering",
      degree: "Bachelor of Science in Electrical Engineering",
      dateRange: "2023 - 2025",
      achievements:[]
    },
    {
      school: "Gateway Technical College",
      degree: "Associates of Applied Science in Electrical Engineering Technology",
      dateRange: "2023",
      achievements:[]
    },
    {
      school: "Gateway Technical College",
      degree: "Associates of Applied Science in Electronics",
      dateRange: "2023",
      achievements:[]
    },
    {
      school: "Gateway Technical College",
      degree: "Electronics Technician Fundamentals Diploma",
      dateRange: "2021",   
      achievements:[]   
    }, 
    {
      school: "Gateway Technical College",
      degree: "Automotive Maintenance Technician Diploma",
      dateRange: "2019", 
      achievements:[]     
    },
    {
      school: "Gateway Technical College",
      degree: "Automotive Under Car Technician Certificate",
      dateRange: "2018",     
      achievements:[] 
    }
    
  ],
};
