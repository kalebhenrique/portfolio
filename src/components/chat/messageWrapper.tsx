import { type ReactNode } from "react";

interface MessageWrapperProps {
  message: string | ReactNode;
  isUser: boolean;
}

export default function MessageWrapper(props: MessageWrapperProps) {
  let cond = "bg-violeta-titulo self-start";

  if (props.isUser) {
    cond = "bg-violeta-base self-end";
  }

  return (
    <div
      className={`inline-block max-w-max rounded-2xl text-cinza-fundo ${cond} p-4`}
    >
      <p>{props.message}</p>
    </div>
  );
}
