// Dietary badge colours. Vegetarian and Nut Free are the app's own pairs.
// TODO(confirm): the other pairs are derived to match the app's palette, and 2 of the 12 badge names are still missing.
export type Diet = { abbr: string; label: string; bg: string; fg: string };

export const diets: Diet[] = [
  { abbr: "V", label: "Vegetarian", bg: "#e5f2d8", fg: "#355d2a" },
  { abbr: "VG", label: "Vegan", bg: "#d5ebcb", fg: "#2d5a2e" },
  { abbr: "PS", label: "Pescatarian", bg: "#d6e8f2", fg: "#27506b" },
  { abbr: "K", label: "Kosher", bg: "#d9bfa0", fg: "#4e2e14" },
  { abbr: "H", label: "Halal", bg: "#d8ede0", fg: "#245a43" },
  { abbr: "DF", label: "Dairy Free", bg: "#c4d4ee", fg: "#1f3f7a" },
  { abbr: "GF", label: "Gluten Free", bg: "#f3e3b8", fg: "#6a4c0e" },
  { abbr: "EF", label: "Egg Free", bg: "#f6e7a8", fg: "#6b5a0a" },
  { abbr: "NF", label: "Nut Free", bg: "#f2d8d2", fg: "#8a3f36" },
  { abbr: "SF", label: "Shellfish Free", bg: "#f4d6e0", fg: "#7a3350" },
];
