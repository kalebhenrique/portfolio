import { IoChevronDown } from "react-icons/io5";

export default function ArrowDownAnimate() {
  return (
    <div className="z-0 flex justify-center rounded-full bg-[#2C1431] bg-opacity-30 p-1 motion-safe:animate-bounce">
      <IoChevronDown className="text-3xl md:text-4xl" />
    </div>
  );
}
