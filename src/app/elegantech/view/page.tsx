'use client'

import React, { useEffect, useState } from "react";
import DynamicMoldure from "@/app/components/DynamicMoldure";
import { getMessages } from "@/app/services/elegantech";
import SendMessagePayload from "@/app/interfaces/SendMessagePayload";

// Custom hook for setInterval with pausing functionality
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = React.useRef<() => void>();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function ViewMessage() {
  const [messages, setMessages] = useState<SendMessagePayload[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Fetch messages from the server and set them in the state
  const fetchMessages = async () => {
    try {
      const response = await getMessages();
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else {
        console.error("Error fetching messages:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // Fetch messages initially when the component mounts
  useEffect(() => {
    fetchMessages();
  }, []);
  
  useInterval(() => {
    if (currentMessageIndex === messages.length - 1) {
      fetchMessages();
    }
    setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
  }, 20000);


  return (
    <div className='moldure-container'>
      {messages.length > 0 && currentMessageIndex < messages.length && (
        <DynamicMoldure
          message={messages[currentMessageIndex].message}
          sender={`De: ${messages[currentMessageIndex].sender}`}
          destination={`Para: ${messages[currentMessageIndex].destination}`}
        />
      )}
    </div>
  );
}
