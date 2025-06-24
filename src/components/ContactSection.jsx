import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { BsTiktok } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export const ContactSection = () => {
  const form = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    setIsLoading(true);
    const toastId = toast.loading("Sending your message...");

    emailjs
      .sendForm(
        "service_vsc1lpf",
        "template_rgol8ei",
        form.current,
        "FOmrpyrMtSbndc0AT"
      )
      .then(() => {
        toast.success(
          "Thank you! Your message has been sent. I’ll get back to you soon. 🙌",
          {
            id: toastId,
          }
        );
        form.current?.reset();
        setIsLoading(false);
      })
      .catch(() => {
        toast.error(
          "Sorry! Something went wrong while sending your message. Please try again later. 😥",
          {
            id: toastId,
          }
        );
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <ContactInfo
                icon={<Mail />}
                label="Email"
                value="daoduyphat1810@gmail.com"
                link="mailto:daoduyphat1810@gmail.com"
              />
              <ContactInfo
                icon={<Phone />}
                label="Phone"
                value="+84 (865) 577-718"
                link="tel:+84865577718"
              />
              <ContactInfo
                icon={<MapPin />}
                label="Location"
                value="Tan Binh District, HCM City, Vietnam"
              />
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <SocialLink
                  href="https://www.linkedin.com/in/dduyphat1810"
                  icon={<Linkedin />}
                />
                <SocialLink
                  href="https://www.facebook.com/profile.php?id=100028390549233"
                  icon={<Facebook />}
                />
                <SocialLink
                  href="https://www.instagram.com/_duyyyphatt_"
                  icon={<Instagram />}
                />
                <SocialLink
                  href="https://www.tiktok.com/@dduyphat"
                  icon={<BsTiktok />}
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <InputField
                id="name"
                type="text"
                label="Your Name"
                placeholder="Duy Phat Dao..."
                required
              />
              <InputField
                id="email"
                type="email"
                label="Your Email"
                placeholder="daoduyphat1810@gmail.com"
                required
              />
              <TextAreaField
                id="message"
                label="Your Message"
                placeholder="Hello, I'd like to talk about..."
                required
              />
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-components for clarity
const ContactInfo = ({ icon, label, value, link }) => (
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10 text-primary">{icon}</div>
    <div>
      <h4 className="font-medium text-left">{label}</h4>
      {link ? (
        <a
          href={link}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {value}
        </a>
      ) : (
        <span className="text-muted-foreground">{value}</span>
      )}
    </div>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    className="text-foreground/80 hover:text-primary"
  >
    {icon}
  </a>
);

const InputField = ({ id, type, label, placeholder, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>
);

const TextAreaField = ({ id, label, placeholder, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-2">
      {label}
    </label>
    <textarea
      id={id}
      name={id}
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
    />
  </div>
);
