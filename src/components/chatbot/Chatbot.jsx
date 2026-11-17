import { useEffect, useRef, useState } from "react";
import { findAnswer } from "../../services/chatbot.service";
import "./chatbot.css";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesRef = useRef(null);

  useEffect(() => { fetch("/data/product.json").then((res) => { if (!res.ok) throw new Error(); return res.json(); }).then((json) => { setData(json); setMessages([{ role: "bot", text: json.welcomeMessage }]); }).catch(() => setMessages([{ role: "bot", text: "Chatbot đang gặp lỗi tải dữ liệu. Bạn vui lòng gọi HWIN để được hỗ trợ." }])); }, []);
  useEffect(() => { messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: "smooth" }); }, [messages, open]);

  const send = (text = question) => {
    const value = text.trim().slice(0, 300);
    if (!value || !data || loading) return;
    setQuestion(""); setLoading(true); setMessages((items) => [...items, { role: "user", text: value }]);
    window.setTimeout(() => { const faq = findAnswer(value, data.faqs); setMessages((items) => [...items, { role: "bot", text: faq?.answer || data.fallbackMessage, fallback: !faq }]); setLoading(false); }, 250);
  };

  return <div className={`chatbot ${open ? "is-open" : ""}`}><button className="chatbot-launcher" onClick={() => setOpen((value) => !value)} aria-label={open ? "Đóng chatbot" : "Mở chatbot"}>{open ? "×" : "💬"}</button>{open && <section className="chatbot-window" aria-label="Chatbot tư vấn sản phẩm"><header><div><strong>HWIN tư vấn</strong><span><i /> Đang hoạt động</span></div><button onClick={() => setOpen(false)} aria-label="Đóng">×</button></header><div className="chatbot-messages" ref={messagesRef}>{messages.map((message, index) => <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}><p>{message.text}</p>{message.fallback && data?.contact && <div className="chat-contact"><a href={`tel:${data.contact.phone}`}>☎ Gọi tư vấn</a><a href={data.contact.url} target="_blank" rel="noreferrer">Liên hệ HWIN</a></div>}</div>)}{loading && <div className="chat-message bot"><p className="typing">● ● ●</p></div>}</div>{messages.length <= 1 && data?.suggestions && <div className="chat-suggestions">{data.suggestions.map((item) => <button key={item} onClick={() => send(item)}>{item}</button>)}</div>}<form className="chatbot-input" onSubmit={(event) => { event.preventDefault(); send(); }}><input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Nhập câu hỏi của bạn..." maxLength={300} aria-label="Nhập câu hỏi"/><button type="submit" aria-label="Gửi">➤</button></form></section>}</div>;
}
