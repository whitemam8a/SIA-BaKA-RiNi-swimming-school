import React from "react";
import { useTranslation } from "react-i18next";
import {
  InstagramIcon,
  WhatsAppIcon,
  TelegramIcon,
  EmailIcon,
  LocalPhoneIcon,
} from "../assets/icons";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { GoogleMaps } from "../components/GoogleMaps";

const Contacts = () => {
  const { t } = useTranslation();

  const MotionBox = motion(Box);

  return (
    <MotionBox
      className="bg-gradient-to-br from-[#98A2AA] via-[#B0B9C3] to-[#CED4DA]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
    >
      <div
        className="flex flex-col md:flex-row w-full gap-8 p-8 "
        id="contacts"
      >
        {/* Контакты */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-gray-800">
            {t("contacts.contacts")}
          </h2>
          {/* <p className="text-gray-800">{t("contacts.contact_us")}</p> */}
          <ul className="space-y-2">
            <li>
              <a
                href="tel:+37269105599"
                className="text-lg text-gray-900 hover:text-neutral-800 hover:underline transition-color duration-300 flex inline-flex gap-2"
                target="_blank"
              >
                <LocalPhoneIcon />
                {t("contacts.call")} +372 6910 5599
              </a>
            </li>
            <li>
              <a
                href="mailto:siabakarini@gmail.com"
                className="text-lg text-gray-900 hover:text-neutral-800 hover:underline transition-color duration-300 flex inline-flex items-center gap-2"
                target="_blank"
              >
                <EmailIcon />
                Email: siabakarini@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://t.me/username"
                className="text-lg text-gray-900 hover:text-blue-600 transition-color duration-300 flex inline-flex items-center gap-2"
                target="_blank"
              >
                <TelegramIcon />
                Telegram
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ruslan_sereda_/"
                className="text-lg text-gray-900 hover:text-pink-600 transition-color duration-300 flex inline-flex items-center gap-2"
                target="_blank"
              >
                <InstagramIcon />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/1234567890"
                className="text-lg text-gray-800 hover:text-green-400 transition-colors duration-300 flex inline-flex items-center gap-2"
                target="_blank"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        {/* Карта */}
        <div className="flex-1 shadow-lg rounded-lg overflow-hidden">
          <GoogleMaps />
        </div>
      </div>
      <Box
        sx={{
          borderTop: "1px solid #ccc",
          py: { xs: 2, md: 3 },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.75rem", md: "0.875rem" },
            color: "#555",
          }}
        >
          © 2025 BaKa RiNi. All rights reserved
        </Typography>
      </Box>
    </MotionBox>
  );
};

export default Contacts;
