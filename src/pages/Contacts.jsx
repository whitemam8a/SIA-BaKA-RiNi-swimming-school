import React from "react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import Contact_form from "../components/ContactForm/Contact_form";
import { useTranslation } from "react-i18next";
import {
  InstagramIcon,
  WhatsAppIcon,
  TelegramIcon,
  EmailIcon,
  LocalPhoneIcon,
} from "../assets/icons";

const Contacts = () => {
  const { t } = useTranslation();

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
    <div
      className="flex flex-col md:flex-row w-full gap-8 p-8 bg-[#98A2AA]"
      id="contacts"
    >
      {/* Контакты */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-gray-800">
          {t("contacts.contacts")}
        </h2>
        <p className="text-gray-800">{t("contacts.contact_us")}</p>
        <ul className="space-y-2">
          <li>
            <a
              href="tel:+37269105599"
              className="text-lg text-black hover:underline flex inline-flex gap-2"
            >
              <LocalPhoneIcon />
              {t("contacts.call")} +372 6910 5599
            </a>
          </li>
          <li>
            <a
              href="mailto:siabakarini@gmail.com"
              className="text-lg text-black hover:underline flex inline-flex items-center gap-2"
            >
              <EmailIcon />
              Email: siabakarini@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://t.me/username"
              className="text-lg text-black hover:underline flex inline-flex items-center gap-2"
            >
              <TelegramIcon />
              Telegram
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ruslan_sereda_/"
              className="text-lg text-black hover:underline flex inline-flex items-center gap-2"
              target="_blank"
            >
              <InstagramIcon />
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/1234567890"
              className="text-lg text-black hover:underline flex inline-flex items-center gap-2"
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
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1Wah00BNZhLXWl8LtShqUPVhzGOBYj0c&ehbc=2E312F&noprof=1"
          width="100%"
          height="330"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
