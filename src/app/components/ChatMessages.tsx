import { cn } from "@/utils/cn";
import Image from "next/image";
import Markdown from "react-markdown";
export interface Message {
  role: "user" | "assistent";
  content: string;
}
interface ChatMessagesProps {
  message: Message[];
  isLoading: boolean;
}
export const ChatMessages = ({ message, isLoading }: ChatMessagesProps) => {
  return (
    <div className="flex flex-col w-full justify-start items-center  overflow-y-auto ">
      {message?.map((message, index) => (
        <MessageBlock key={index} message={message} />
      ))}
      {isLoading && (
        <MessageBlock message={{ role: "assistent", content: "" }} isLoading />
      )}
    </div>
  );
};

const MessageBlock = ({
  message,
  isLoading = false,
}: {
  message: Message;
  isLoading?: boolean;
}) => {
  return (
    <div
      className={cn(
        " bg-background-chat  px-4 py-8 w-full flex  text-white justify-center",
        message.role === "user" && "bg-background-light"
      )}
    >
      <div className="w-full max-w-[833px] flex  ">
        <Image
          src={`/images/${message.role}-icon.svg`}
          width={36}
          height={36}
          alt={message.role}
          className="mr-4 self-start"
        />

        {isLoading ? (
          <Image
            src="/images/loading.svg"
            width={36}
            height={36}
            alt="animação de carregamento"
            className="mr-4"
          />
        ) : (
          <Markdown>{message.content}</Markdown>
        )}
      </div>
    </div>
  );
};
