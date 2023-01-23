export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const visuallyHidden: React.CSSProperties = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
};
