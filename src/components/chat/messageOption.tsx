interface MessageOptionProps {
  message: string;
}

export default function MessageOption(props: MessageOptionProps) {
  return (
    <div className="inline-block max-w-max self-start rounded-full border-2 border-violeta-base p-4 text-violeta-base transition-colors hover:bg-violeta-base hover:text-cinza-fundo">
      <p>{props.message}</p>
    </div>
  );
}
