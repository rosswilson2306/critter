'use client';

import { useEffect, useState } from 'react';
import Message, { MessageData } from './message.component';

export default function Messages() {
  const [messages, setMessages] = useState<MessageData[]>([]);

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:8080/api/messages');

    function getServerEvents(event: any) {
      const eventData = JSON.parse(event.data);
      setMessages((prev) => [...prev, eventData]);
      console.log('event received: ', eventData);
    }

    eventSource.addEventListener('ping', getServerEvents);

    eventSource.onerror = function (error) {
      console.error('Error occurred:', error);
    };

    return () => eventSource.removeEventListener('message', getServerEvents);
  }, []);

  return (
    <div>
      {messages.map((message) => (
        <Message key={message.time} {...message} />
      ))}
    </div>
  );
}
