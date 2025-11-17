export function classNames(
  displayClass?: "mobile-only" | "desktop-only",
  ...classes: string[]
): string {
  if (displayClass) {
    classes.push(displayClass)
  }
  return classes.join(" ")
}
