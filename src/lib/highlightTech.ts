const TECH_TERMS = [
  "TypeScript",
  "JavaScript",
  "Node.js",
  "React",
  "Angular",
  "Kubernetes",
  "RabbitMQ",
  "Docker",
  "Python",
  "gRPC",
  "Java",
  "SQL",
  "Go",
];

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const TECH_PATTERN = new RegExp(
  `\\b(${[...TECH_TERMS].sort((a, b) => b.length - a.length).map(escapeRegExp).join("|")})\\b`,
  "g"
);

export function highlightTech(text: string): string {
  return escapeHtml(text).replace(TECH_PATTERN, "<strong>$1</strong>");
}
