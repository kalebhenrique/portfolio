import { atom } from "nanostores";

export const isChatOpen = atom<boolean>(false);

let lastTrigger: Element | null = null;

export function openChat() {
  lastTrigger = document.activeElement;
  isChatOpen.set(true);
}

export function closeChat() {
  isChatOpen.set(false);
  if (lastTrigger instanceof HTMLElement) {
    lastTrigger.focus();
    lastTrigger = null;
  }
}

export function toggleChat() {
  isChatOpen.get() ? closeChat() : openChat();
}
