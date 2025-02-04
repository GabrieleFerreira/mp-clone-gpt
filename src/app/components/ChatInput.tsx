"use client";
import Image from "next/image";
import { useState } from "react";

interface ChatInputProps {
  placeholder: string;
  onSubmitMessage: (key: string) => void;
}
export default function ChatInput({
  placeholder,
  onSubmitMessage,
}: ChatInputProps) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmitMessage(inputValue);
      setInputValue("");
    }
  };

  const handleClick = () => {
    onSubmitMessage(inputValue);
    setInputValue("");
  };

  return (
    <div className=" p-4 lg:p-10 w-full flex justify-center ">
      <div className=" relative max-w-[833px] w-full mb-4 lg:mb-10">
        <input
          type="text"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
          placeholder={placeholder}
          className=" flex h-10 w-full rounded-md border border-b bg-background-light text-sm ring-offset-background-chat placeholder:text-gray
                focus-visible:ring-background-light focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  p-6 text-gray
                "
        />

        <div className=" absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer flex items-center">
          <button onClick={handleClick}>
            <Image
              src="/images/send-icon.svg"
              width={20}
              height={20}
              alt="icone de envio de mensagens"
            ></Image>
          </button>
        </div>
      </div>
    </div>
  );
}
