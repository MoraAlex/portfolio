import goRaw from "simple-icons/icons/go.svg?raw";
import javascriptRaw from "simple-icons/icons/javascript.svg?raw";
import typescriptRaw from "simple-icons/icons/typescript.svg?raw";
import pythonRaw from "simple-icons/icons/python.svg?raw";
import reactRaw from "simple-icons/icons/react.svg?raw";
import vuedotjsRaw from "simple-icons/icons/vuedotjs.svg?raw";
import nodedotjsRaw from "simple-icons/icons/nodedotjs.svg?raw";
import dockerRaw from "simple-icons/icons/docker.svg?raw";
import kubernetesRaw from "simple-icons/icons/kubernetes.svg?raw";
import apachekafkaRaw from "simple-icons/icons/apachekafka.svg?raw";

function parseIcon(raw: string, hex: string) {
  const title = raw.match(/<title>([^<]+)<\/title>/)?.[1] ?? "";
  const path = raw.match(/<path d="([^"]+)"/)?.[1] ?? "";
  return { title, path, hex };
}

export const TECH_ICONS = {
  go: parseIcon(goRaw, "#00ADD8"),
  javascript: parseIcon(javascriptRaw, "#F7DF1E"),
  typescript: parseIcon(typescriptRaw, "#3178C6"),
  python: parseIcon(pythonRaw, "#3776AB"),
  react: parseIcon(reactRaw, "#61DAFB"),
  vue: parseIcon(vuedotjsRaw, "#4FC08D"),
  nodejs: parseIcon(nodedotjsRaw, "#5FA04E"),
  docker: parseIcon(dockerRaw, "#2496ED"),
  kubernetes: parseIcon(kubernetesRaw, "#326CE5"),
  kafka: parseIcon(apachekafkaRaw, "#231F20"),
} as const;

export type TechKey = keyof typeof TECH_ICONS;
