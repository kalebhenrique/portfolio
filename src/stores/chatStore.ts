import { atom } from "nanostores";

export const isChatOpen = atom<boolean>(false);

export function openChat() {
  isChatOpen.set(true);
}

export function closeChat() {
  isChatOpen.set(false);
}

export function toggleChat() {
  isChatOpen.set(!isChatOpen.get());
}
