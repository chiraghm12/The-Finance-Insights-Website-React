import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { FaInstagram, FaXTwitter, FaYoutube, FaLinkedin } from "react-icons/fa6";
import { PageHeader } from "@/layouts/PageHeader";
import { sendContactMessage } from "@/services/api";

const details = [
{ icon: Mail, label: "Email", value: "hello@financeinsights.com" },
{ icon: Phone, label: "Phone", value: "+91 98765 43210" },
{ icon: MapPin, label: "Office", value: "Bandra Kurla Complex, Mumbai" }];


const socials = [
{ icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
{ icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
{ icon: FaXTwitter, href: "https://x.com", label: "X" },
{ icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" }];


export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const update = (k) => (e) =>
  setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    await sendContactMessage(form);
    setStatus("done");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const field =
  "h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/30";

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        description="Questions, feedback, or partnership ideas? We'd love to hear from you."
        crumbs={[{ label: "Contact" }]} />
      

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              {details.map((d) =>
              <div key={d.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary/12 text-secondary">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {d.label}
                    </div>
                    <div className="mt-0.5 font-semibold">{d.value}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-2.5">
              {socials.map((s) =>
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-secondary hover:text-secondary">
                
                  <s.icon className="h-5 w-5" />
                </a>
              )}
            </div>

            {/* Map placeholder */}
            <div className="grid h-56 place-items-center overflow-hidden rounded-2xl border border-dashed border-border bg-card text-center">
              <div>
                <MapPin className="mx-auto h-8 w-8 text-muted-foreground/50" />
                <p className="mt-2 text-sm text-muted-foreground">Google Map placeholder</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
            
            {status === "done" ?
            <div className="grid place-items-center py-16 text-center">
                <CheckCircle2 className="h-12 w-12 text-secondary" />
                <h3 className="mt-4 text-xl font-bold">Message sent!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thanks for reaching out — we'll get back to you soon.
                </p>
                <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-full border border-border px-5 py-2 text-sm font-semibold hover:border-secondary hover:text-secondary">
                
                  Send another
                </button>
              </div> :

            <>
                <h2 className="text-xl font-bold">Send us a message</h2>
                <div className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input className={field} placeholder="Your name" required value={form.name} onChange={update("name")} />
                    <input className={field} type="email" placeholder="Email address" required value={form.email} onChange={update("email")} />
                  </div>
                  <input className={field} placeholder="Subject" required value={form.subject} onChange={update("subject")} />
                  <textarea
                  className="min-h-36 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/30"
                  placeholder="Your message"
                  required
                  value={form.message}
                  onChange={update("message")} />
                
                  <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-accent text-sm font-bold text-secondary-foreground shadow-soft transition-transform hover:scale-[1.01] disabled:opacity-70">
                  
                    {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    Send message
                  </button>
                </div>
              </>
            }
          </motion.form>
        </div>
      </section>
    </>);

}