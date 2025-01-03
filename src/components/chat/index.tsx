"use client";
import "~/styles/globals.css";
import { IoClose } from "react-icons/io5";
import MessageWrapper from "./messageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import MessageOption from "./messageOption";
import { useChat } from "~/contexts/chatContext";
import { useEffect, useRef } from "react";
import CldImage from "../cldImage";

export default function Chat() {
  const {
    isOpen,
    closeChat,
    messages,
    currentState,
    handleOptionClick,
    states,
  } = useChat();

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

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
          className="root-scrollbar fixed top-0 z-20 flex h-screen w-full bg-cinza-fundo bg-opacity-80 backdrop-blur-3xl md:bottom-0 md:right-0 md:top-auto md:m-10 md:h-[700px] md:w-[380px] md:rounded-3xl md:text-base md:shadow-2xl"
        >
          <div className="flex h-[680px] w-full flex-col">
            <div className="flex items-center justify-between bg-violeta-base p-5 md:rounded-t-3xl">
              <div className="flex flex-row items-center space-x-4">
                <CldImage
                  width="40"
                  height="40"
                  src="eu"
                  alt="Montanha Celeste"
                  className="rounded-full border"
                />
                <h2 className="text-cinza-fundo">Kaleb Bot</h2>
              </div>
              <button
                onClick={closeChat}
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
                <div ref={messagesEndRef} />
              </div>
              <div className="flex flex-col items-start space-y-2 p-4">
                {states[currentState]?.options[0]?.text !== "" &&
                  states[currentState]?.options?.map((option, key) => (
                    <button key={key} onClick={() => handleOptionClick(option)}>
                      <MessageOption message={option.text} />
                    </button>
                  ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
