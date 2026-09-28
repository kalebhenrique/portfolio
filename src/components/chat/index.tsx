import { useState, useEffect, useRef, type ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import MessageWrapper from "./messageWrapper";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import MessageOption from "./messageOption";
import { useStore } from "@nanostores/react";
import { isChatOpen, closeChat } from "~/stores/chatStore";

interface Message {
  text: string | ReactNode;
  isUser: boolean;
}

interface Option {
  text: string;
  nextState: string;
}

interface State {
  message?: string | ReactNode;
  options: Option[];
}

type States = Record<string, State>;

export default function Chat() {
  const isOpen = useStore(isChatOpen);

  const [messages, setMessages] = useState<Message[]>([
    { text: "Olá, aqui é o Kaleb", isUser: false },
    { text: "Como posso ajudar?", isUser: false },
  ]);
  const [currentState, setCurrentState] = useState<string>("initial");
  const [catUrl, setCatUrl] = useState<string>("");
  const [isLoadingCat, setIsLoadingCat] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const catPic = async () => {
    try {
      const res = await fetch("/api/cat");
      const data: { url?: string } = (await res.json()) as { url?: string };
      return data.url ?? "";
    } catch (error) {
      console.error(error);
      return "";
    }
  };

  useEffect(() => {
    const loadInitialCatImage = async () => {
      const initialUrl = await catPic();
      setCatUrl(initialUrl);
      setIsLoadingCat(false);
    };

    void loadInitialCatImage();
  }, []);

  const states: States = {
    loading: {
      options: [
        {
          text: "",
          nextState: "initial",
        },
      ],
    },
    initial: {
      message: "Como posso ajudar?",
      options: [
        {
          text: "Cadê o repositório deste portfólio?",
          nextState: "repository",
        },
        { text: "Quero uma foto surpresa de gato! 🐱", nextState: "catPhoto" },
        {
          text: "Gostaria de entrar em contato.",
          nextState: "contact",
        },
      ],
    },
    repository: {
      message: (
        <>
          O link do repositório está{" "}
          <a
            className="font-bold underline hover:text-violeta-base-hover"
            href="https://github.com/kalebhenrique/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            aqui.
          </a>
        </>
      ),
      options: [{ text: "Voltar ao menu", nextState: "initial" }],
    },
    catPhoto: {
      message: (
        <div>
          {isLoadingCat ? (
            <div>Carregando...</div>
          ) : (
            <div className="space-y-3">
              <div className="relative flex items-center justify-center">
                <img
                  src={catUrl}
                  alt="gato"
                  className="max-h-48 rounded-lg object-contain"
                  width={200}
                  height={150}
                  loading="lazy"
                />
              </div>
              <div>Aqui está uma foto surpresa de gato! 🐱</div>
            </div>
          )}
        </div>
      ),
      options: [
        { text: "Quero mais uma foto!", nextState: "catPhoto" },
        { text: "Voltar ao menu", nextState: "initial" },
      ],
    },
    contact: {
      message: (
        <>
          Me chama no{" "}
          <a
            className="font-bold underline hover:text-violeta-base-hover"
            href="https://www.linkedin.com/in/kalebhenrique/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          ! Respondo rápido por lá.
        </>
      ),
      options: [{ text: "Voltar ao menu", nextState: "initial" }],
    },
  };

  useEffect(() => {
    const loadNewCatImage = async () => {
      setIsLoadingCat(true);
      const newUrl = await catPic();
      setCatUrl(newUrl);
      setIsLoadingCat(false);
    };

    if (currentState === "catPhoto") {
      void loadNewCatImage();
    }
  }, [currentState]);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, currentState]);

  useEffect(() => {
    if (!isOpen) return;

    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeChat();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || active === dialogRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const handleOptionClick = (option: Option) => {
    setMessages((prev) => [...prev, { text: option.text, isUser: true }]);

    const nextStateMessage = states[option.nextState]?.message;
    if (nextStateMessage) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: nextStateMessage, isUser: false },
        ]);
      }, 1000);
    }

    setCurrentState("loading");
    setTimeout(() => setCurrentState(option.nextState), 2000);
  };

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Chat com o Kaleb Bot"
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
                  aria-label="Fechar Chat"
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
                  <div ref={messagesEndRef} />
                </div>
                <div className="flex flex-col items-start space-y-2 p-4">
                  {states[currentState]?.options[0]?.text !== "" &&
                    states[currentState]?.options?.map((option, key) => (
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
