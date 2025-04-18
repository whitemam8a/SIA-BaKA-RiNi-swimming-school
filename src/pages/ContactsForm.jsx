import { useEffect } from "react";
import ContactForm from "../components/ContactForm/Contact_form";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";

export const ContactsForm = () => {
  const { t } = useTranslation();

  return (
    <Box
      id="FirstPrictice"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Центровка по вертикали
        alignItems: "center", // Центровка по горизонтали
        minHeight: "80vh",
        py: 6,
      }}
    >
      <h2 className="text-4xl font-extrabold text-center pb-5">
        {t("contact_form.contact")}
      </h2>
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <ContactForm button={t("contact_form.button")} />
      </Box>
    </Box>
  );
};

export default ContactsForm;
