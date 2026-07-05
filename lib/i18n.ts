export const en = {
  agenticaiPage: {
    what_p1:
      "Agentic AI goes beyond simple chatbots and scripted decision trees. It's a new class of AI system that understands context, makes decisions, and takes real actions on your behalf — not just answering questions, but actually getting things done.",
  },
};

function get(obj: unknown, path: string[]): string | undefined {
  return path.reduce<unknown>((acc, key) => (acc && typeof acc === "object" ? (acc as Record<string, unknown>)[key] : undefined), obj) as
    | string
    | undefined;
}

export function t(key: string): string {
  const value = get(en, key.split("."));
  return typeof value === "string" ? value : key;
}
