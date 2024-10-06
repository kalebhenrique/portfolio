interface MessageWrapperProps {
  message: string;
  isUser: boolean;
}

export default function MessageWrapper(props: MessageWrapperProps) {
  let bg = "bg-cinza-overlay-navbar";

  if (props.isUser) {
    bg = "bg-cinza";
  }

  return (
    <div className={`inline-block max-w-max rounded-2xl ${bg} p-4`}>
      <p>{props.message}</p>
    </div>
  );
}
