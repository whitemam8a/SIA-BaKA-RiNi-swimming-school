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
    // <div className="flex flex-col md:flex-row w-full" id="contacts">
    //   {/* 1 колонка с контактами и формой */}
    //   <div className="flex-1">
    //     <div className="flex flex-col">
    //       <strong className="strong-style">Контакты</strong>
    //       <p>Свяжитесь с нами:</p>
    //       <ul>
    //         <li>
    //           <a href="tel:+37269105599">Позвонить: +372 6910 5599</a>
    //         </li>
    //         <li>
    //           <a href="mailto:example@example.com">
    //             Email: siabakarini@gmail.com
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://t.me/username">Telegram</a>
    //         </li>
    //         <li>
    //           <a href="https://wa.me/1234567890">WhatsApp</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   {/* 2 колонка  */}
    //   <div className="flex-1">
    //     <iframe
    //       width="100%"
    //       height="300"
    //       frameborder="0"
    //       scrolling="no"
    //       marginheight="0"
    //       marginwidth="0"
    //       src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Kal%C4%93ju%20iela%2033,%20Centra%20rajons,%20R%C4%ABga,%20LV-1050,%20Latvia+(SIA_BaKa_RiNi)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    //     >
    //       <a href="https://www.gps.ie/">gps vehicle tracker</a>
    //     </iframe>
    //   </div>
    // </div>
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
          {/* <iframe
          width="100%"
          height="300"
          className="rounded-lg"
          src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Kal%C4%93ju%20iela%2033,%20Centra%20rajons,%20R%C4%ABga,%20LV-1050,%20Latvia+(SIA_BaKa_RiNi)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps vehicle tracker</a>
        </iframe> */}
          <GoogleMaps />
          {/* <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1Wah00BNZhLXWl8LtShqUPVhzGOBYj0c&ehbc=2E312F&noprof=1"
            width="100%"
            height="330"
          ></iframe> */}
        </div>
      </div>
      <Typography
        align="center"
        sx={{ py: 1, fontSize: "0.875rem", color: "#555" }}
      >
        © 2025 BaKa RiNi. All rights reserved
      </Typography>
    </MotionBox>
  );
};

export default Contacts;
