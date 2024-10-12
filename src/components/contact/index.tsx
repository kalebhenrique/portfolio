"use client";
import "~/styles/globals.css";
import { IoClose } from "react-icons/io5";
import MessageWrapper from "./messageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import MessageOption from "./messageOption";

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Contact({ isOpen, onClose }: ContactProps) {
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
              <h2 className="text-cinza-fundo">Kaleb</h2>
              <button
                onClick={onClose}
                className="rounded-full text-cinza-fundo hover:bg-slate-400 hover:text-gray-700"
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
      )}
    </AnimatePresence>
  );
}
