// All site copy lives here — edit this file to change text anywhere on the page.

import slawomir from "../assets/team/slawomir-chodor.jpg";
import mikolaj from "../assets/team/mikolaj-fiedorczuk.jpg";
import stanislaw from "../assets/team/stanislaw-kolodziejczyk.jpg";
import michal from "../assets/team/michal-lejwoda.jpg";
import sebastian from "../assets/team/sebastian-kalitowski.jpg";
import kamil from "../assets/team/kamil-sadowski.jpg";

export const site = {
  email: "vb@vectorb.one",
  tagline: "We detect hidden threats before they strike",
  subline: "AI-driven solutions for blue security",
};

export const mission = {
  heading: "Threat intelligence at inhuman speed",
  body: "We analyze hundreds of thousands of data points, events, and signals at inhuman speeds, giving Critical Infrastructure operators threat intelligence and response time.",
  sectors: ["Wind farms", "Ports", "Pipelines", "Subsea cables"],
};

export const solutions = [
  {
    title: "Real-time anomaly detection",
    description:
      "Continuous analysis of live data streams to surface anomalies the moment they emerge.",
  },
  {
    title: "Situational awareness",
    description:
      "Enhance situational awareness around Critical Infrastructure with a unified operational picture.",
  },
  {
    title: "Response recommendations",
    description:
      "Actionable security alerts with recommended responses, so operators act fast and with confidence.",
  },
  {
    title: "Vulnerability testing",
    description:
      "Testing Critical Infrastructure vulnerability to physical and cyber threats before adversaries do.",
  },
];

export const platform = {
  heading: "The Vector Baltic AI engine",
  body: "Our AI engine is the foundation for building multi-agent solutions that enable autonomous handling of processes requiring creative approaches in critical infrastructure protection. It operates on the domain expertise of our advisors combined with technologies that enable agent self-learning and autonomous operation.",
  technologies: ["Knowledge graphs", "Neural networks", "LLMs", "Multi-agent systems"],
};

export const agents = {
  intro: "Our platform currently features two AI Agents+ tools for civil and military use.",
  items: [
    {
      name: "OSINT Agent+",
      description:
        "Operates like an intelligence officer, gathering information from targeted sources.",
      screenshotAlt: "OSINT Agent+ analysis results",
    },
    {
      name: "Cyber Agent+",
      description:
        "Trained like a penetration tester to detect security gaps and vulnerabilities.",
      screenshotAlt: "Cyber Agent+ technical findings",
    },
  ],
};

export const team = {
  heading: "Our Team",
  subheading: "Meet the professionals behind our AI solutions",
  members: [
    {
      name: "Sławomir J. Chodor",
      role: "CoFounder / CSO",
      description: "Venture builder | entrepreneur | maritime & autonomy expert",
      image: slawomir,
    },
    {
      name: "Mikołaj Fiedorczuk",
      role: "Engineer",
      description: "AI agent specialist | cybersecurity",
      image: mikolaj,
    },
    {
      name: "Stanisław Kołodziejczyk",
      role: "Engineer",
      description: "AI agent specialist | robotics autonomy",
      image: stanislaw,
    },
    {
      name: "Michał Lejwoda",
      role: "Engineer",
      description: "Robotics & embedded systems | autonomous drones",
      image: michal,
    },
    {
      name: "LT CDR Sebastian Kalitowski",
      role: "Advisor",
      description: "Ex military intelligence officer | OSINT & HUMINT expert",
      image: sebastian,
    },
    {
      name: "CDR Kamil Sadowski",
      role: "Advisor",
      description: "Experienced naval officer | from sonar systems operator to tactical officer",
      image: kamil,
    },
  ],
};

export const contact = {
  heading: "Let's dock together!",
  body: "Ready to secure your critical infrastructure? Get in touch with us today.",
};
