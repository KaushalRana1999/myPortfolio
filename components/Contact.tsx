// Contact.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Send, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import SectionHeading from "./SectionHeading";

const SOCIALS = [
  { icon: FaWhatsapp, label: "whatsapp", href: "https://wa.me/918192820937" },
  { icon: Github, label: "github", href: "https://github.com/KaushalRana1999" },
  {
    icon: Linkedin,
    label: "linkedin",
    href: "https://www.linkedin.com/in/kaushal-rana-1544bb240/",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          reply_to: email,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setSent(true);
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-bg px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading command="./send_message.sh" title="Get In Touch" />

        <div className="grid gap-10 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <p className="text-sm leading-relaxed text-ink-dim">
              Open to full-time full-stack roles. Feel free to contact me
              through WhatsApp or the contact form.
            </p>

            <ul className="mt-6 space-y-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex items-center gap-3 font-mono text-sm text-ink-dim transition-colors hover:text-accent"
                  >
                    <s.icon size={16} /> {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="terminal-window md:col-span-3 rounded-md p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="font-mono text-xs text-ink-dim"
                >
                  name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="focus-ring mt-1.5 w-full rounded border border-accent/20 bg-bg-panelLight px-3 py-2.5 text-sm text-ink outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="font-mono text-xs text-ink-dim"
                >
                  email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="email@example.com"
                  className="focus-ring mt-1.5 w-full rounded border border-accent/20 bg-bg-panelLight px-3 py-2.5 text-sm text-ink outline-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="font-mono text-xs text-ink-dim"
              >
                message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Let's talk about..."
                className="focus-ring mt-1.5 w-full resize-none rounded border border-accent/20 bg-bg-panelLight px-3 py-2.5 text-sm text-ink outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading || sent}
              className="focus-ring mt-5 flex w-full items-center justify-center gap-2 rounded border border-accent bg-accent px-6 py-3 font-mono text-xs font-medium text-bg transition-transform hover:-translate-y-0.5 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Send size={14} /> sending...
                </>
              ) : sent ? (
                <>
                  <Check size={14} /> message_sent
                </>
              ) : (
                <>
                  <Send size={14} /> send_message()
                </>
              )}
            </button>
          </motion.form>
        </div>

        <p className="mt-16 text-center font-mono text-[11px] text-ink-faint">
          built with next.js, tailwind &amp; framer-motion — ©{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
