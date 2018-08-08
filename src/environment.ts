export const canUseDOM =
  typeof window !== "undefined" && typeof window.document !== "undefined";

export const isInNode =
  typeof process !== "undefined" &&
  process.versions != null &&
  process.versions.node != null;

export const isInWorker = typeof importScripts !== "undefined";
