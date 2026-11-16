export type WorkFamily = "Public & civic" | "Commerce" | "Media & community" | "Education & operations";

export type WorkProject = {
  slug: string;
  name: string;
  category: string;
  family: WorkFamily;
  description: string;
  context: string;
  capabilities: string[];
  url: string;
  domain: string;
  image: string;
};

export const workProjects: WorkProject[] = [
  {
    slug: "school-grid",
    name: "SchoolGrid",
    category: "Government Education Infrastructure",
    family: "Public & civic",
    description:
      "A school-supervision platform that helps government and education authorities monitor attendance, lessons, incidents and compliance.",
    context:
      "Designed for ministries, education boards, school administrators and institutional supervisors that need real-time operational intelligence across schools.",
    capabilities: [
      "Teacher attendance monitoring",
      "Lesson delivery verification",
      "Administrative reporting",
      "Institutional visibility",
      "Education oversight systems",
      "Operational accountability",
    ],
    url: "https://schoolgrid.sanjosedynamics.com",
    domain: "schoolgrid.sanjosedynamics.com",
    image: "/images/projects/live/schoolgrid.png",
  },
  {
    slug: "vote-guard-africa",
    name: "VoteGuard Africa",
    category: "Civic Technology",
    family: "Public & civic",
    description:
      "An election-transparency platform for controlled result submission, verification, evidence traceability and accountable review.",
    context:
      "Built around the need for greater trust, visibility and accountability in democratic processes, from polling-unit monitoring to structured review.",
    capabilities: [
      "Election result verification",
      "Polling-unit monitoring",
      "Electoral data transparency",
      "Citizen reporting systems",
      "Real-time monitoring dashboards",
      "Incident reporting infrastructure",
    ],
    url: "https://voteguard.sanjosemart.com",
    domain: "voteguard.sanjosemart.com",
    image: "/images/projects/live/voteguard.png",
  },
  {
    slug: "sanjose-mart",
    name: "SanJoseMart",
    category: "Digital Commerce",
    family: "Commerce",
    description:
      "A digital commerce platform for discovering, comparing and buying technology products and other goods online.",
    context:
      "A commerce model that coordinates product discovery, customer ordering, inventory and fulfilment inside one public-facing system.",
    capabilities: [
      "Product discovery",
      "Customer order management",
      "Commerce operations",
      "Inventory coordination",
      "Vendor workflows",
      "Consumer accessibility",
    ],
    url: "https://www.sanjosemart.com",
    domain: "sanjosemart.com",
    image: "/images/projects/live/sanjosemart.png",
  },
  {
    slug: "events-trybe",
    name: "EventsTrybe",
    category: "Events & Ticketing",
    family: "Media & community",
    description:
      "An event discovery and booking platform connecting people with live culture, entertainment and trusted event access.",
    context:
      "Designed to modernise entertainment operations for organisers, creators and audiences through discovery, ticketing and event access.",
    capabilities: [
      "Event discovery",
      "Online ticketing",
      "Event booking",
      "Organiser workflows",
      "Audience access",
      "Creator and community infrastructure",
    ],
    url: "https://www.eventstrybe.com",
    domain: "eventstrybe.com",
    image: "/images/projects/live/eventstrybe.png",
  },
  {
    slug: "buzz-buntu",
    name: "BuzzBuntu",
    category: "Media & Community Platform",
    family: "Media & community",
    description:
      "A live platform for discovering and connecting with African people, stories, culture, enterprise and opportunities.",
    context:
      "Built as a discovery layer for African stories, businesses and opportunities, connecting continental and diaspora audiences inside one platform.",
    capabilities: [
      "Editorial publishing",
      "Story and culture discovery",
      "Business directory",
      "Marketplace and service listings",
      "Community membership",
      "Sponsored placement",
    ],
    url: "https://www.buzzbuntu.com",
    domain: "buzzbuntu.com",
    image: "/images/projects/live/buzzbuntu.png",
  },
  {
    slug: "jm-devlab",
    name: "JM DevLab",
    category: "Technology Education",
    family: "Education & operations",
    description:
      "A learning platform where people acquire practical ICT, digital productivity and software-development skills.",
    context:
      "Built for learners who need practical, job-relevant digital capability rather than abstract instruction.",
    capabilities: [
      "Practical ICT learning",
      "Digital productivity skills",
      "Software-development pathways",
      "Learner-facing education delivery",
      "Structured technology skills",
      "Public digital access",
    ],
    url: "https://devlab.josephmmadubuike.com",
    domain: "devlab.josephmmadubuike.com",
    image: "/images/projects/live/devlab.png",
  },
  {
    slug: "chop-quick",
    name: "ChopQuick",
    category: "Food Commerce",
    family: "Commerce",
    description:
      "An online food-ordering platform connecting customers with local restaurants, kitchens and quick delivery.",
    context:
      "Built around the operating chain from restaurant discovery and customer ordering through kitchen fulfilment and delivery.",
    capabilities: [
      "Restaurant discovery",
      "Customer ordering",
      "Kitchen workflows",
      "Local delivery coordination",
      "Food commerce operations",
      "Consumer convenience",
    ],
    url: "https://www.chopquick.com",
    domain: "chopquick.com",
    image: "/images/projects/live/chopquick.png",
  },
  {
    slug: "task-proof",
    name: "TaskProof",
    category: "Operational Systems",
    family: "Education & operations",
    description:
      "A task delegation, assignment and accountability platform for tracking work, reports and supporting proof.",
    context:
      "Built for teams that need visibility into delegated work and a clear record of completion.",
    capabilities: [
      "Task delegation",
      "Assignment tracking",
      "Work reports",
      "Proof of completion",
      "Operational visibility",
      "Accountability workflows",
    ],
    url: "https://taskproof.sanjosedynamics.com",
    domain: "taskproof.sanjosedynamics.com",
    image: "/images/projects/live/taskproof.png",
  },
];

export const workFamilies: Array<"All" | WorkFamily> = [
  "All",
  "Public & civic",
  "Commerce",
  "Media & community",
  "Education & operations",
];

export function getWorkProject(slug: string) {
  return workProjects.find((project) => project.slug === slug);
}

export function getRelatedWork(slug: string, limit = 3) {
  return workProjects.filter((project) => project.slug !== slug).slice(0, limit);
}
