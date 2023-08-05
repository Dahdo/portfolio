//intro
export const NAME = "Daniel Ndashimye";
export const TAGLINE = "A Computer Science Student";
export const INTERESTS = "I am an enthusiastic developer with a diverse skillset that spans across Android app development, full-stack development, and system development. Coding in C is my favorite!";
export const ABOUT = "I am presently a Computer Science student at Warsaw University of Technology(Politechnika Warszawska) with interest in Software Development, Web Development, Android App Development, and Linux systems. I have about 2 years of experience in IT.";

//social
export const LINK_GITHUB = "https://github.com/dahdo";
export const LINK_LINKEDIN = "https://www.linkedin.com/in/ndashimye";
export const LINK_X = "https://twitter.com/ndashimye_";

//experience
export const EXPERIENCE = [
  {
    from: "Jul 2023",
    to: "Present",
    title: "Azure SQL Support Engineer",
    company: "Microsoft",
    skills: ["SQL", "Transact SQL", "Azure", "HA/DR"],
    description: "Database maintenance plans, backups, and restores, supported HA/DR solutions, assisted with Replication Models, implemented Always On and Database Mirroring, contributed to Cluster Installation and Configuration, enhanced security settings, tuned system performance."
  },

  {
    from: "Sep 2022",
    to: "Mar 2023",
    title: "IT Assistant",
    company: "Kyndryl",
    skills: ["Linux", "Azure", "Networking"],
    description: "Managing, Configuring and Maintaining Linux OS Systems, Analyze and Resolve Problems Associated with Clients' servers, Up-skilled in such areas as: Cloud Computing(Azure), Systems Administration(Linux), Mainframe(IBM Z), Networking."
  }
];

//projects
export const PROJECTS = [
  {
    title: "CPU Usage Tracker (Linux)",
     imageLink: "cpu_tracker.gif",
     skills: ["C", "Makefile", "Valgrind"],
     projectLink: "https://github.com/Dahdo/cpu-usage-tracker",
     description: "The program computes the cpu usage every second. It prints the total cpus usage and individually per each cpu. It terminates upon SIGTERM delivery to it or when at least one of its threads exceedes 2 sec response time. It keeps track of log in a file. The program makes use 6 threads."
  },

  {
    title: "NoteEasy App (published on Play Store)",
     imageLink: "note_easy.png",
     skills: ["Android", "Java", "RoomDB", "MVVM"],
     projectLink: "https://github.com/Dahdo/The-Notes",
     description: "NoteEasy is a no-nonsense notepad for easy note-taking, to-do lists, and text organization. It's offline for data security, adapts to your device's theme, supports various bullet styles, and offers sharing, time stamps, and search features. Edit and save with a tap."
  },

  {
     title: "Pong Game (Windows API)",
     imageLink: "pong.gif",
     skills: ["C++", "C", "WinAPI"],
     projectLink: "https://github.com/Dahdo/Pong-WinAPI",
     description: "Developed as part of a university project, the Pong game showcases my skills in utilizing the Windows API along with C and C++. This classic game implementation demonstrates graphics programming and game development skills, using low-level programming languages and system libraries."
  }
    ];
