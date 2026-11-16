import { workProjects } from "@/data/work";

export const buildDomains=["Digital Public Infrastructure","Commerce Systems","Educational Technology","Developer Infrastructure","Media Platforms","Community & Culture Platforms","Operational Systems","Emerging Market Infrastructure"];
export const leadership=[
  {period:"2025 — 2026",role:"General Manager",organization:"Five Stars Digital Media",description:"Led technology, media, product development, digital transformation and innovation strategy."},
  {period:"2024 — 2025",role:"Chief Technology Officer",organization:"Diaspora Digital Media",description:"Contributed to technology architecture and digital expansion initiatives serving African communities."},
  {period:"2016 — present",role:"Software Engineering & Architecture",organization:"Independent and contract work",description:"Designs and builds full-stack platforms, APIs, dashboards and operational tools for real institutions and markets."},
];

export const liveProjects = workProjects;

export const kwechiri={
  name:"Kwechiri",version:"1.2.0",status:"Available on npm and in VS Code",description:"Kwechiri is an Igbo-first programming language built around Unicode Igbo identifiers, Igbo keywords and an explicit compiler path to executable JavaScript.",note:"Kwechiri 1.2.0 adds multiline string literals to the compiler and npm CLI. VS Code extension 0.2.2 includes the updated compiler bundle with syntax highlighting and diagnostics for .kwe files.",links:{
    website:"https://kwechiri.dev",npm:"https://www.npmjs.com/package/kwechiri",vscode:"https://marketplace.visualstudio.com/items?itemName=kwechiri.kwechiri-language",source:"https://github.com/Jmmadubuike/kwechiri-programming-language",
  },layers:[
    {name:"Compiler & CLI",status:"1.2.0 on npm"},{name:"VS Code support",status:"0.2.2 available"},{name:"Language foundations",status:"Released"},{name:"Documentation",status:"In development"},
  ],roadmap:[{name:"Kwechiri 1.2.0",status:"Released"},{name:"npm CLI + VS Code",status:"Available"},{name:"Documentation & ecosystem",status:"In development"},{name:"Kwechiri Browser",status:"Future project"}],
};
