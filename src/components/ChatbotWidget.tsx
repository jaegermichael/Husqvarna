import { useEffect, useMemo, useRef, useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type ChatMessage = {
  id: string;
  role: "user" | "bot";
  text: string;
};

type FaqItem = {
  q: string;
  a: string;
  keywords: string[];
};

const makeId = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9+\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const DEFAULT_SUGGESTIONS = [
  "Where are you located?",
  "Do you sell genuine parts?",
  "What services do you offer?",
  "How can I contact you?",
];

const ChatbotWidget = () => {
  const faqs: FaqItem[] = useMemo(
    () => [
      {
        q: "Who are you?",
        a: "We are an authorized Husqvarna dealer in Zimbabwe, offering premium outdoor power equipment, genuine parts, and expert service.",
        keywords: ["authorized", "dealer", "zimbabwe", "husqvarna", "who", "about"],
      },
      {
        q: "Where are you located?",
        a: "We have branches in Harare (Willowvale, Gazaland), Midlands (Midlands Show Society), and Bulawayo (Stourbridge, Belmont).",
        keywords: ["where", "located", "location", "branches", "harare", "midlands", "bulawayo", "willowvale", "gazaland", "belmont", "stourbridge"],
      },
      {
        q: "What do you sell?",
        a: "We supply Husqvarna outdoor power equipment and genuine parts. Browse the Products section for available models and categories.",
        keywords: ["sell", "products", "equipment", "models", "categories", "parts"],
      },
      {
        q: "Do you sell genuine parts?",
        a: "Yes — we supply genuine Husqvarna parts.",
        keywords: ["genuine", "parts", "spares", "original"],
      },
      {
        q: "What services do you offer?",
        a: "We provide expert service and support. See the Services section on the website for details.",
        keywords: ["services", "service", "repair", "maintenance", "support"],
      },
      {
        q: "How can I contact you?",
        a: "You can call Gweru 0773 989 553, Bulawayo 0713 342 985, Harare +263 77 381 3628, or Landline +263 8644 052 666. You can also use the Contact section in the footer to reach your nearest branch.",
        keywords: ["contact", "phone", "call", "+263", "number", "whatsapp"],
      },
    ],
    [],
  );

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: makeId(),
      role: "bot",
      text: "Hi! I can help with questions about Husqvarna Zimbabwe Power Hub — locations, products, parts and services.",
    },
  ]);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const findBestAnswer = (questionRaw: string) => {
    const question = normalize(questionRaw);
    if (!question) return null;

    let best: { item: FaqItem; score: number } | null = null;

    for (const item of faqs) {
      let score = 0;
      for (const kw of item.keywords) {
        const k = normalize(kw);
        if (!k) continue;
        if (question.includes(k)) score += 2;
      }
      if (normalize(item.q) === question) score += 3;

      if (!best || score > best.score) best = { item, score };
    }

    if (!best || best.score < 2) return null;
    return best.item.a;
  };

  const send = (textRaw: string) => {
    const text = textRaw.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { id: makeId(), role: "user", text }]);

    const answer = findBestAnswer(text);

    setMessages((prev) => [
      ...prev,
      {
        id: makeId(),
        role: "bot",
        text:
          answer ??
          "I can help with details that appear on this website (locations, contact numbers, products, parts and services). Try asking: “Where are you located?” or “How can I contact you?”",
      },
    ]);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open chat"
        className="fixed bottom-6 left-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
      >
        <Bot className="w-6 h-6" aria-hidden="true" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close chat backdrop"
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
          />

          <div
            className={cn(
              "absolute left-6 bottom-24 w-[calc(100%-3rem)] max-w-sm rounded-xl border bg-background shadow-2xl overflow-hidden",
            )}
            role="dialog"
            aria-label="Chatbot"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b bg-primary text-primary-foreground">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" aria-hidden="true" />
                <div className="font-heading uppercase tracking-wide text-sm">Husqvarna Assistant</div>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>

            <div className="px-4 py-3 border-b bg-muted/30">
              <div className="text-xs text-muted-foreground">Suggested questions</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {DEFAULT_SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border px-3 py-1 text-xs hover:bg-muted transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <ScrollArea className="h-72 px-4 py-3">
              <div className="space-y-3">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={cn(
                      "max-w-[90%] rounded-lg px-3 py-2 text-sm",
                      m.role === "user"
                        ? "ml-auto bg-primary text-primary-foreground"
                        : "bg-muted text-foreground",
                    )}
                  >
                    {m.text}
                  </div>
                ))}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            <form
              className="flex items-center gap-2 p-3 border-t"
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
                setInput("");
              }}
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                aria-label="Chat input"
              />
              <Button type="submit" variant="hero" size="icon" aria-label="Send">
                <Send className="w-4 h-4" aria-hidden="true" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
