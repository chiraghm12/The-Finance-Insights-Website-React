import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { FaInstagram, FaXTwitter, FaYoutube, FaFacebook } from "react-icons/fa6";
import { PageHeader } from "@/layouts/PageHeader";
import { sendContactMessage } from "@/services/api";

const details = [
  { icon: Mail, label: "Email", value: import.meta.env.VITE_CONTACT_EMAIL || "test@gmail.com" },
  { icon: Phone, label: "Phone", value: import.meta.env.VITE_CONTACT_PHONE || "+91 11111 222222" },
  { icon: MapPin, label: "Office", value: import.meta.env.VITE_CONTACT_OFFICE || "Surat, Gujarat" }
];

const socials = [
  { icon: FaYoutube, href: import.meta.env.VITE_SOCIAL_YOUTUBE || "https://youtube.com", label: "YouTube" },
  { icon: FaInstagram, href: import.meta.env.VITE_SOCIAL_INSTAGRAM || "https://instagram.com", label: "Instagram" },
  { icon: FaXTwitter, href: import.meta.env.VITE_SOCIAL_X || "https://x.com", label: "X" },
  { icon: FaFacebook, href: import.meta.env.VITE_SOCIAL_FACEBOOK || "https://facebook.com", label: "Facebook" }
];

export function Contact() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const update = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    await sendContactMessage(form);
    setStatus("done");
    setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  };

  const field =
    "h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/30";

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's build together"
        description="Questions, feedback, or partnership ideas? We'd love to hear from you."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Info Panel - Premium Gradient Design */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex h-full flex-col overflow-hidden rounded-[2.5rem] bg-gradient-primary p-8 text-white shadow-elevated sm:p-12"
          >
            {/* Decorative Background Elements */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10 blur-[80px]" />
            <div className="pointer-events-none absolute bottom-40 right-10 h-32 w-32 rounded-full bg-gold/20 blur-[50px]" />

            <div className="relative z-10 flex h-full flex-col">
              {/* <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/20">
                <Sparkles className="h-3.5 w-3.5" />
                Get in touch
              </span> */}

              <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl">
                We're always here<br />to help you out.
              </h2>
              <p className="mt-4 text-base text-white/80 max-w-md leading-relaxed">
                Whether you have a question about our content, pricing, or anything else, our team is ready to answer all your questions.
              </p>

              <div className="mt-12 space-y-5">
                {details.map((d) => (
                  <div key={d.label} className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/20 text-white shadow-inner transition-transform group-hover:scale-110 group-hover:bg-white group-hover:text-secondary">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-white/70">
                        {d.label}
                      </div>
                      <div className="mt-1 font-semibold text-lg">{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <hr className="my-10 border-white/10" />

              <div className="mt-auto">
                <div className="text-xs font-bold uppercase tracking-wider text-white/70 mb-4">
                  Connect with us
                </div>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white hover:text-secondary hover:shadow-glow"
                    >
                      <s.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex h-full flex-col justify-center rounded-[2.5rem] border border-border bg-card p-6 shadow-card sm:p-10"
          >
            {status === "done" ? (
              <div className="grid place-items-center py-20 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 animate-ping rounded-full bg-secondary/20" />
                  <CheckCircle2 className="relative h-16 w-16 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Message sent successfully!</h3>
                <p className="mt-3 text-base text-muted-foreground max-w-sm">
                  Thanks for reaching out! We have received your message and will get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold shadow-sm transition-colors hover:border-secondary hover:text-secondary"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold">Send us a message</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Fill out the form below and we'll reply as soon as possible.</p>
                </div>
                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">First Name</label>
                      <input className={field} placeholder="John" required value={form.firstName} onChange={update("firstName")} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">Last Name</label>
                      <input className={field} placeholder="Doe" required value={form.lastName} onChange={update("lastName")} />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">Email Address</label>
                    <input className={field} type="email" placeholder="john.doe@example.com" required value={form.email} onChange={update("email")} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">Subject</label>
                    <input className={field} placeholder="How can we help you?" required value={form.subject} onChange={update("subject")} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">Message</label>
                    <textarea
                      className="min-h-40 w-full rounded-2xl border border-border bg-background px-4 py-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/30 resize-none"
                      placeholder="Write your message here..."
                      required
                      value={form.message}
                      onChange={update("message")}
                      rows={10}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-2 inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-accent text-base font-bold text-secondary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-70"
                  >
                    {status === "loading" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                    Send message
                  </button>
                </div>
              </>
            )}
          </motion.form>
        </div>
      </section>
    </>
  );
}