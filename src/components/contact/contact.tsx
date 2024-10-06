"use client";

import { IoClose } from "react-icons/io5";
import MessageWrapper from "./messageWrapper";
import { motion } from "framer-motion";
import MessageOption from "./messageOption";

const CustomScrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(255,255,255,0.2);
    border-radius: 3px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255,255,255,0.3);
  }
`;

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
    <>
      <style>{CustomScrollbarStyles}</style>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.1,
        }}
        className="fixed inset-0 z-20 flex h-[770px] w-full bg-black bg-opacity-50 backdrop-blur-3xl"
      >
        <div className="flex w-full flex-col bg-violeta-base bg-opacity-30">
          <div className="flex items-center justify-between bg-violeta-base p-5">
            <h2 className="text-cinza-fundo">Kaleb</h2>
            <button
              onClick={onClose}
              className="text-cinza-fundo hover:text-gray-700"
            >
              <IoClose size={20} />
            </button>
          </div>
          <div className="custom-scrollbar flex-grow overflow-y-auto">
            <div className="flex flex-col space-y-2 p-4">
              {introductionMessages.map((item, key) => (
                <MessageWrapper key={key} {...item} />
              ))}
              {introductionOptions.map((item, key) => (
                <MessageOption key={key} {...item} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
