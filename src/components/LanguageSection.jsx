import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";

const LanguageSwitcher = ({ languages }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative flex justify-center items-center bg-gray-100 rounded-2xl shadow-lg"
    >
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-white text-black border border-gray-300 rounded-xl shadow-md hover:bg-gray-100 transition-colors"
        >
          {languages[i18n.language]}
        </button>
        {isOpen && (
          <div className="absolute mt-2 w-20 bg-white border border-gray-300 rounded-xl shadow-lg">
            {Object.entries(languages).map(([lng, label]) => (
              <button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className={`block w-full text-left px-4 py-2 transition-all ${
                  i18n.language === lng
                    ? "bg-blue-600 text-white rounded-xl"
                    : "hover:bg-gray-200 rounded-xl"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LanguageSwitcher;
