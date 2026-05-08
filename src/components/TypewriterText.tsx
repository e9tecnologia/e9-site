"use client";

import { useState, useEffect } from "react";

const phrases = [
  "em prol de sua empresa",
  "para automatizar seus processos",
  "para integrar seus setores",
  "para escalar sua operação",
  "para ganhar produtividade",
];

export default function TypewriterText() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
    } else {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIdx]);

  return (
    <p className="text-lg sm:text-xl font-medium text-slate-600 mb-8 h-8 leading-tight">
      Toda nossa tecnologia{" "}
      <span className="text-slate-900 font-semibold">{displayed}</span>
      <span className="inline-block w-0.5 h-5 bg-[#ffcb05] ml-0.5 align-middle animate-pulse" />
    </p>
  );
}
