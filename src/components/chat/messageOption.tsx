interface MessageOptionProps {
  message: string;
}

export default function MessageOption(props: MessageOptionProps) {
  return (
    <div className="inline-block max-w-max rounded-full border-2 border-violeta-base p-4 text-violeta-base">
      <p>{props.message}</p>
    </div>
  );
}
