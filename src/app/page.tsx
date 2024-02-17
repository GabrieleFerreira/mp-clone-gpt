"use client";
import axios from "@/utils/axios";
import { ReactElement, useState } from "react";
import ChatInput from "./components/ChatInput";
import { ChatMessages, Message } from "./components/ChatMessages";
import Sidebar from "./components/Sidebar";
import KeyInstructions from "./components/key-instructions";

function Home(): ReactElement {
  const [openAiKey, setOpenAiKey] = useState("");
  const placeholder = !!openAiKey
    ? "Digite um 'Oi'"
    : "Digite sua chave de API";

  const handleGetOpenAiResponse = async () => {
    const response = await axios.post("/api/bot", {
      key: openAiKey,
      messages: [{ role: "user", content: "quanto é 5 + 5" }],
    });
    console.log(response);
  };

  const message = [
    {
      role: "user",
      content: "# Olá",
    },
    {
      role: "assistent",
      content: "**Olá, como vai**",
    },
    {
      role: "user",
      content: "Bem e voce ",
    },
    {
      role: "assistent",
      content: "Bem também",
    },
  ] as Message[];

  return (
    <div className="flex ">
      <Sidebar isVisible={!!openAiKey} />

      <main className="w-full h-screen flex flex-col justify-between ">
        <h1 className="text-3xl pb-5 lg:text-[45px] font-bold text-gray text-center mt-5">
          CloneGPT
        </h1>

        {!!openAiKey ? (
          <ChatMessages message={message} isLoading={false} />
        ) : (
          <KeyInstructions />
        )}

        <ChatInput onSubmitMessage={setOpenAiKey} placeholder={placeholder} />
      </main>
    </div>
  );
}

export default Home;
