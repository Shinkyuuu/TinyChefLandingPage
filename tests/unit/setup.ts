import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// Newer Node versions ship a partial localStorage that shadows jsdom's, so use a plain in-memory one.
const store = new Map<string, string>();
vi.stubGlobal("localStorage", {
  getItem: (k: string) => store.get(k) ?? null,
  setItem: (k: string, v: string) => void store.set(k, String(v)),
  removeItem: (k: string) => void store.delete(k),
  clear: () => store.clear(),
});

afterEach(() => {
  cleanup();
  document.documentElement.removeAttribute("data-theme");
  localStorage.clear();
});

export function mockMatchMedia(matches: (query: string) => boolean) {
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: matches(query),
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
  }));
}

export class FakeIntersectionObserver {
  static instances: FakeIntersectionObserver[] = [];
  constructor(public callback: IntersectionObserverCallback) {
    FakeIntersectionObserver.instances.push(this);
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}
