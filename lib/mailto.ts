export function mailto(subject: string, to: string = "hello@tiberius.co.nz") {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}`;
}
