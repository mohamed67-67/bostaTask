import { IInlineLoader } from "@/interfaces/componentsInterfaces";

export default function InlineLoader({ size = 20, className }: IInlineLoader) {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`${className} border-bcolor border-b-black rounded-full border-2 animate-spin`}
    />
  );
}
