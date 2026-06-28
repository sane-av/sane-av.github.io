export const statusColors: Record<string, string> = {
  published: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  "under-review": "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  draft: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  deprecated: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
};

export const statusDescriptions: Record<string, string> = {
  published: "Ratified and recommended for implementation.",
  "under-review": "In the 60-day public review period. Comments welcome.",
  draft: "Work in progress. Not yet ready for formal review.",
  deprecated: "Superseded or no longer recommended.",
};
