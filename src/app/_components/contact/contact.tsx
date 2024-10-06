"use client";

import { IoClose } from "react-icons/io5";
import MessageWrapper from "./messageWrapper";
import { motion } from "framer-motion";
import MessageOption from "./messageOption";

export default function Contact({ isOpen, onClose }) {
  const introductionMessages = [
    {
      message: "Olá, aqui é o Kaleb",
      isUser: false,
    },
    {
      message: "Como posso ajudar?",
      isUser: false,
    },
  ];

  const introductionOptions = [
    {
      message: "Gostaria de ver o repositorio deste portfolio",
    },
    {
      message: "Quero uma foto surpresa de gato!",
    },
    {
      message: "Gostaria de entrar em contato com você",
    },
  ];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.1,
      }}
      className="w-ful l fixed inset-0 z-20 flex h-[770px] border border-violeta-base bg-black bg-opacity-50 backdrop-blur-3xl"
    >
      <div className="w-full bg-violeta-base bg-opacity-30">
        <div className="flex items-center justify-between border-b bg-violeta-base p-5">
          <h2 className="text-cinza-fundo">Kaleb</h2>
          <button
            onClick={onClose}
            className="text-cinza-fundo hover:text-gray-700"
          >
            <IoClose size={20} />
          </button>
        </div>
        <div className="flex flex-grow flex-col space-y-2 overflow-y-auto p-4">
          {introductionMessages.map((item, key) => (
            <MessageWrapper key={key} {...item} />
          ))}
          {introductionOptions.map((item, key) => (
            <MessageOption key={key} {...item} />
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`rounded-lg p-2 ${i % 2 === 0 ? "bg-gray-100" : "ml-auto max-w-[80%] bg-blue-100"}`}
            >
              <p>Mensagem de teste {i + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
