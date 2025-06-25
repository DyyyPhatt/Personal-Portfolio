import { useState } from "react";

export const LanguageDropdown = ({ currentLang, toggleLanguage }) => {
  const [open, setOpen] = useState(false);

  const switchLang = (lang) => {
    if (lang !== currentLang) {
      toggleLanguage(lang);
    }
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex justify-center w-full rounded-md border border-primary px-3 py-1 text-sm font-medium text-primary hover:bg-primary hover:text-background transition"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {currentLang.toUpperCase()}
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.352a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            <button
              onClick={() => switchLang("en")}
              className={`block w-full px-4 py-2 text-left text-sm hover:bg-primary hover:text-background ${
                currentLang === "en" ? "font-bold" : ""
              }`}
            >
              English
            </button>
            <button
              onClick={() => switchLang("vi")}
              className={`block w-full px-4 py-2 text-left text-sm hover:bg-primary hover:text-background ${
                currentLang === "vi" ? "font-bold" : ""
              }`}
            >
              Tiếng Việt
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
