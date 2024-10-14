"use client";
import "~/styles/globals.css";
import { IoClose } from "react-icons/io5";
import MessageWrapper from "./messageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import MessageOption from "./messageOption";
import { useState } from "react";

interface ChatProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export default function Chat({ isOpen, onClose }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Olá, aqui é o Kaleb", isUser: false },
    { text: "Como posso ajudar?", isUser: false },
  ]);
  const [currentState, setCurrentState] = useState<string>("initial");

  const states: States = {
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

    setCurrentState(option.nextState);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{
            duration: 0.2,
          }}
          className="root-scrollbar fixed inset-0 z-20 flex h-screen w-full bg-cinza-fundo bg-opacity-80 backdrop-blur-3xl"
        >
          <div className="flex h-[680px] w-full flex-col">
            <div className="flex items-center justify-between bg-violeta-base p-5">
              <h2 className="text-cinza-fundo">Kaleb Bot</h2>
              <button
                onClick={onClose}
                className="rounded-md p-1 text-cinza-fundo hover:bg-slate-400 hover:text-gray-700"
              >
                <IoClose size={20} />
              </button>
            </div>
            <div className="custom-scrollbar flex-grow overflow-y-auto">
              <div className="flex flex-col items-start space-y-2 p-4">
                {messages.map((msg, key) => (
                  <MessageWrapper
                    key={key}
                    message={msg.text}
                    isUser={msg.isUser}
                  />
                ))}
              </div>
              <div className="flex flex-col items-start space-y-2 p-4">
                {states[currentState]?.options?.map((option, key) => (
                  <button key={key} onClick={() => handleOptionClick(option)}>
                    <MessageOption message={option.text} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
