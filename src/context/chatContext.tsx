"use client";
import React, {
  createContext,
  useState,
  useContext,
  type ReactNode,
} from "react";

interface Message {
  text: string;
  isUser: boolean;
}

interface Option {
  text: string;
  nextState: string;
}

interface State {
  message?: string;
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
          text: "Onde está o repositório deste portfólio?",
          nextState: "repository",
        },
        { text: "Quero uma foto surpresa de gato! 🐱", nextState: "catPhoto" },
        {
          text: "Gostaria de entrar em contato com você.",
          nextState: "contact",
        },
      ],
    },
    repository: {
      message:
        "Aqui está o link do repositório: https://github.com/kalebhenrique/portfolio",
      options: [{ text: "Voltar ao menu", nextState: "initial" }],
    },
    catPhoto: {
      message: "Aqui está uma foto surpresa de gato! 🐱",
      options: [
        { text: "Quero mais uma foto!", nextState: "catPhoto" },
        { text: "Voltar ao menu principal", nextState: "initial" },
      ],
    },
    contact: {
      message:
        "Você pode entrar em contato comigo através do email: kalebunb@email.com",
      options: [{ text: "Voltar ao menu principal", nextState: "initial" }],
    },
  };

  const openChat = () => {
    setIsOpen(true);
  };
  const closeChat = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (option: Option) => {
    setMessages((prev) => [...prev, { text: option.text, isUser: true }]);

    if (states[option.nextState]?.message) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: states[option.nextState]?.message ?? "", isUser: false },
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
