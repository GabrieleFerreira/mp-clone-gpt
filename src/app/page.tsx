"use client";
import { useChat } from "@/hooks/useChat";
import { ReactElement, useState } from "react";
import ChatInput from "./components/ChatInput";
import { ChatMessages } from "./components/ChatMessages";
import Sidebar from "./components/Sidebar";
import KeyInstructions from "./components/key-instructions";
function Home(): ReactElement {
  const [openAiKey, setOpenAiKey] = useState("");
  const {
    chats,
    isLoading,
    selectedChat,
    addUserMessage,
    selectChat,
    deleteChat,
  } = useChat(openAiKey);
  const placeholder = !!openAiKey
    ? "Digite um 'Oi'"
    : "Digite sua chave de API";

  const handleSubmitMessage = (message: string) => {
    addUserMessage(selectedChat, message);
  };

  const handleChatSubmit = !!openAiKey ? handleSubmitMessage : setOpenAiKey;

  return (
    <div className="flex ">
      <Sidebar
        isVisible={!!openAiKey}
        selectedChat={selectedChat}
        deleteChat={deleteChat}
        selectChat={selectChat}
        chats={chats}
      />

      <main className="w-full h-screen flex flex-col justify-between ">
        <h1 className="text-3xl pb-5 lg:text-[45px] font-bold text-gray text-center mt-5">
          CloneGPT
        </h1>

        {!!openAiKey ? (
          <ChatMessages
            messages={chats[selectedChat].messages}
            isLoading={isLoading}
          />
        ) : (
          <KeyInstructions />
        )}

        <ChatInput
          onSubmitMessage={handleChatSubmit}
          placeholder={placeholder}
        />
      </main>
    </div>
  );
}

export default Home;
