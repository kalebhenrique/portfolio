import React, { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { useStore } from "@nanostores/react";
import { isChatOpen, closeChat } from "~/stores/chatStore";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import MessageWrapper from "./messageWrapper";
import MessageOption from "./messageOption";
import type { Lang } from "~/i18n/ui";

interface Message {
  text: string | React.ReactNode;
  isUser: boolean;
}

interface Option {
  text: string;
  nextState: string;
}

interface State {
  message?: string | React.ReactNode;
  options: Option[];
}

interface States {
  [key: string]: State;
}

interface ChatProps {
  lang?: Lang;
}

export default function Chat({ lang = "pt" }: ChatProps) {
  const isEn = lang === "en";
  const isOpen = useStore(isChatOpen);
  const [messages, setMessages] = useState<Message[]>([
    { text: isEn ? "Hello, this is Kaleb" : "Olá, aqui é o Kaleb", isUser: false },
    { text: isEn ? "How can I help you?" : "Como posso ajudar?", isUser: false },
  ]);
  const [currentState, setCurrentState] = useState<string>("initial");
  const [isLoadingCat, setIsLoadingCat] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const states: States = {
    loading: {
      options: [],
    },
    initial: {
      message: isEn ? "How can I help you?" : "Como posso ajudar?",
      options: [
        {
          text: isEn ? "Where is this portfolio's repository?" : "Cadê o repositório deste portfólio?",
          nextState: "repository",
        },
        {
          text: isEn ? "Surprise me with a cat photo! 🐱" : "Quero uma foto surpresa de gato! 🐱",
          nextState: "catPhoto",
        },
        {
          text: isEn ? "I'd like to get in touch." : "Gostaria de entrar em contato.",
          nextState: "contact",
        },
      ],
    },
    repository: {
      message: (
        <>
          {isEn ? "The repository link is right " : "O link do repositório está "}
          <a
            className="font-bold underline hover:text-violeta-base-hover"
            href="https://github.com/kalebhenrique/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            {isEn ? "here." : "aqui."}
          </a>
        </>
      ),
      options: [{ text: isEn ? "Back to menu" : "Voltar ao menu", nextState: "initial" }],
    },
    catPhoto: {
      options: [
        { text: isEn ? "Give me another photo!" : "Quero mais uma foto!", nextState: "catPhoto" },
        { text: isEn ? "Back to menu" : "Voltar ao menu", nextState: "initial" },
      ],
    },
    contact: {
      message: (
        <>
          {isEn ? "Reach out on " : "Me chama no "}
          <a
            className="font-bold underline hover:text-violeta-base-hover"
            href="https://www.linkedin.com/in/kalebhenrique/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          {isEn ? "! I reply quickly there." : "! Respondo rápido por lá."}
        </>
      ),
      options: [{ text: isEn ? "Back to menu" : "Voltar ao menu", nextState: "initial" }],
    },
  };

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoadingCat, currentState]);

  // Trap focus inside modal when open
  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeChat();
        return;
      }

      if (e.key !== "Tab") return;

      const focusableElements = dialog.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleOptionClick = async (option: Option) => {
    // 1. Append user's choice message
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: option.text, isUser: true },
    ]);

    // 2. Specialized handling for cat photos (fetches fresh image each time)
    if (option.nextState === "catPhoto") {
      setIsLoadingCat(true);
      setCurrentState("loading");

      try {
        const res = await fetch(`/api/cat?t=${Date.now()}`);
        const data: { url?: string } = (await res.json()) as { url?: string };
        const newUrl = data.url ?? "";

        if (newUrl) {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: (
                <div className="space-y-3">
                  <div className="relative flex items-center justify-center">
                    <img
                      src={newUrl}
                      alt={isEn ? "Cute cat" : "Gatinho fofo"}
                      className="max-h-48 rounded-lg object-contain"
                      width={200}
                      height={150}
                      loading="eager"
                    />
                  </div>
                  <div>{isEn ? "Here is a surprise cat photo! 🐱" : "Aqui está uma foto surpresa de gato! 🐱"}</div>
                </div>
              ),
              isUser: false,
            },
          ]);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: isEn ? "Oops, the cat ran away! Try again in a moment. 🐾" : "Ops, o gatinho fugiu! Tente novamente em instantes. 🐾",
              isUser: false,
            },
          ]);
        }
      } catch (error) {
        console.error("Failed to fetch cat:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: isEn ? "Could not fetch cat photo. Please try again! 🐾" : "Não foi possível carregar a foto. Tente novamente! 🐾",
            isUser: false,
          },
        ]);
      } finally {
        setIsLoadingCat(false);
        setCurrentState("catPhoto");
      }
      return;
    }

    // 3. Standard state transitions
    const nextState = states[option.nextState];
    if (nextState) {
      setTimeout(() => {
        if (nextState.message) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: nextState.message, isUser: false },
          ]);
        }
        setCurrentState(option.nextState);
      }, 300);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={isEn ? "Chat with Kaleb Bot" : "Chat com o Kaleb Bot"}
            tabIndex={-1}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              duration: 0.2,
            }}
            className="root-scrollbar fixed top-0 z-50 flex h-dvh w-full bg-cinza-fundo bg-opacity-80 backdrop-blur-3xl focus:outline-none md:bottom-0 md:right-0 md:top-auto md:m-10 md:h-[700px] md:w-[380px] md:rounded-3xl md:text-base md:shadow-2xl"
          >
            <div className="flex h-full w-full flex-col">
              <div className="flex items-center justify-between bg-violeta-base p-5 md:rounded-t-3xl">
                <div className="flex flex-row items-center space-x-4">
                  <img
                    width="40"
                    height="40"
                    src="/eu-120.webp"
                    alt="Kaleb Avatar"
                    className="rounded-full border"
                  />
                  <h2 className="font-semibold text-cinza-fundo">Kaleb Bot</h2>
                </div>
                <button
                  onClick={closeChat}
                  className="rounded-md p-1 text-cinza-fundo hover:bg-violeta-base-hover"
                  aria-label={isEn ? "Close Chat" : "Fechar Chat"}
                >
                  <IoClose size={20} />
                </button>
              </div>
              <div className="custom-scrollbar flex-grow overflow-y-auto">
                <div
                  className="flex flex-col items-start space-y-2 p-4"
                  aria-live="polite"
                >
                  {messages.map((msg, key) => (
                    <MessageWrapper
                      key={key}
                      message={msg.text}
                      isUser={msg.isUser}
                    />
                  ))}
                  {isLoadingCat && (
                    <MessageWrapper
                      message={
                        <div className="flex items-center space-x-2">
                          <span className="inline-block animate-bounce">🐾</span>
                          <span>{isEn ? "Fetching a cute cat..." : "Buscando um gatinho..."}</span>
                        </div>
                      }
                      isUser={false}
                    />
                  )}
                  <div ref={messagesEndRef} />
                </div>
                <div className="flex flex-col items-start space-y-2 p-4">
                  {!isLoadingCat &&
                    states[currentState]?.options?.length > 0 &&
                    states[currentState].options.map((option, key) => (
                      <button
                        key={key}
                        onClick={() => handleOptionClick(option)}
                      >
                        <MessageOption message={option.text} />
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
