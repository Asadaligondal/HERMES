"use client";

import { useEffect, useState } from "react";
import { MicIcon, PlusIcon } from "@/components/icons";

const PROMPTS = [
  "Summarize what's on my plate today",
  "Draft a Linear ticket",
  "Schedule a recurring report",
  "Summarize my last 5 emails",
];

export function AnimatedChatInput() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PROMPTS[phraseIndex];
    let delay = deleting ? 30 : 55;
    if (!deleting && text === current) delay = 1400;
    if (deleting && text === "") delay = 400;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setDeleting(true);
        }
      } else if (text.length > 0) {
        setText(text.slice(0, -1));
      } else {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % PROMPTS.length);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex]);

  return (
    <div className="chat-input-pill">
      <button className="chat-icon-btn" type="button" title="Attach">
        <PlusIcon />
      </button>
      {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
      <input type="text" placeholder={text} autoFocus />
      <button className="chat-icon-btn" type="button" title="Voice input">
        <MicIcon />
      </button>
    </div>
  );
}
