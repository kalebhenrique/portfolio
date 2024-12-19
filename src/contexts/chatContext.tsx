"use client";
import Image from "next/image";
import React, {
  createContext,
  useState,
  useContext,
  type ReactNode,
  useEffect,
} from "react";

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

interface ChatContextType {
  isOpen: boolean;
  messages: Message[];
  currentState: string;
  openChat: () => void;
  closeChat: () => void;
  handleOptionClick: (option: Option) => void;
  states: States;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Olá, aqui é o Kaleb", isUser: false },
    { text: "Como posso ajudar?", isUser: false },
  ]);
  const [currentState, setCurrentState] = useState<string>("initial");
  const [catUrl, setCatUrl] = useState<string>("");
  const [isLoadingCat, setIsLoadingCat] = useState(false);

  const catPic = async () => {
    try {
      const res = await fetch(
        "https://api.thecatapi.com/v1/images/search?api_key=live_uBfCks8W2Kdn6rg6g97fIcsaBX6T4hwAR9y6gvxQRgRfPBBPf6NvrBP69Stskz4Q",
      );
      const data: { url: string }[] = (await res.json()) as { url: string }[];
      console.log(data[0]?.url);
      return data[0]?.url ?? "";
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
                <Image
                  src={catUrl}
                  alt="gato"
                  className="object-contain"
                  width={200}
                  height={50}
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
      message:
        "Você pode entrar em contato comigo através do email: kalebunb@email.com",
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

  const openChat = () => {
    setIsOpen(true);
  };
  const closeChat = () => {
    setIsOpen(false);
  };

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
    <ChatContext.Provider
      value={{
        isOpen,
        messages,
        currentState,
        openChat,
        closeChat,
        handleOptionClick,
        states,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
