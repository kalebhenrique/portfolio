interface MessageWrapperProps {
  message: string;
  isUser: boolean;
}

export default function MessageWrapper(props: MessageWrapperProps) {
  let bg = "bg-violeta-titulo";

  if (props.isUser) {
    bg = "bg-violeta-base";
  }

  return (
    <div
      className={`inline-block max-w-max rounded-2xl text-cinza-fundo ${bg} p-4`}
    >
      <p>{props.message}</p>
    </div>
  );
}
