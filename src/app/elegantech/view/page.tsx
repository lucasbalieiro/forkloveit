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
  const [isLoopCompleted, setIsLoopCompleted] = useState(false);

  // Fetch messages from the server and set them in the state
  const fetchMessages = async () => {
    try {
      const response = await getMessages();
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
        setIsLoopCompleted(false); // Reset the loop completed flag when new messages are fetched
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

  // Poll for new messages every 20 seconds, but only if the current loop is completed
  useInterval(() => {
    if (isLoopCompleted) {
      fetchMessages();
    }
  }, 20000);

  // Switch to the next message every 20 seconds
  useInterval(() => {
    setCurrentMessageIndex(prevIndex => (prevIndex + 1) % messages.length);

    // Set the loop completed flag when the loop reaches the end of the array
    if (currentMessageIndex === messages.length - 1) {
      setIsLoopCompleted(true);
    }
  }, 20000);

  return (
    <div className='moldure-container'>
      {messages.length > 0 && (
        <DynamicMoldure
          message={messages[currentMessageIndex].message}
          sender={`De: ${messages[currentMessageIndex].sender}`}
          destination={`Para: ${messages[currentMessageIndex].destination}`}
        />
      )}
    </div>
  );
}
