import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm/Contact_form";

export const ContactsForm = () => {
  const { t } = useTranslation();

  return (
    <Box
      id="FirstPrictice"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        py: 6,
      }}
    >
      <Typography
        variant="h4"
        className="text-center pb-5 font-extrabold text-gray-800"
      >
        {t("contact_form.contact")}
      </Typography>
      <Box sx={{ width: "100%", maxWidth: 600, px: 4 }}>
        <ContactForm button={t("contact_form.button")} />
      </Box>
    </Box>
  );
};

export default ContactsForm;
