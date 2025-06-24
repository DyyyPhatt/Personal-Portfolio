import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { BsTiktok } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
      {/* Left: Copyright */}
      <p className="text-sm text-muted-foreground text-center md:text-left">
        &copy; {new Date().getFullYear()} Dao Duy Phat. All rights reserved.
        Crafted with ❤️ and passion. Thank you for visiting my portfolio.
      </p>

      {/* Right: Contact & Social */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex space-x-6 text-muted-foreground text-sm">
          <a
            href="mailto:daoduyphat1810@gmail.com"
            className="hover:text-primary transition-colors flex items-center space-x-1"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
          <a
            href="tel:+84865577718"
            className="hover:text-primary transition-colors flex items-center space-x-1"
          >
            <Phone size={16} />
            <span>+84 865 577 718</span>
          </a>
        </div>

        <div className="flex space-x-6 text-muted-foreground">
          <SocialIcon
            href="https://www.linkedin.com/in/dduyphat1810"
            icon={<Linkedin size={20} />}
          />
          <SocialIcon
            href="https://www.facebook.com/profile.php?id=100028390549233"
            icon={<Facebook size={20} />}
          />
          <SocialIcon
            href="https://www.instagram.com/_duyyyphatt_"
            icon={<Instagram size={20} />}
          />
          <SocialIcon
            href="https://www.tiktok.com/@dduyphat"
            icon={<BsTiktok size={20} />}
          />
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
    aria-label="social-link"
  >
    {icon}
  </a>
);
