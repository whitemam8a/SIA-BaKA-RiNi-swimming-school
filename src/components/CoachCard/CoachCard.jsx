import React, { useState } from "react";
import ModalCoachCard from "./ModalCoachCard";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const CardCoach = ({ image, imgAlt, name, short_description, description }) => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Box
        className="card bg-sky-100 mx-3 shadow-xl overflow-hidden w-[300px] h-[400px]"
        onClick={handleOpenModal}
        sx={{ cursor: "pointer" }}
      >
        <figure className="bg-white w-full h-64">
          <img
            src={image}
            alt={imgAlt}
            className="w-full h-full object-cover object-top"
          />
        </figure>
        <Box className="card-body h-[180px]">
          <h2 className="card-title">{name}</h2>
          <Typography
            sx={{
              fontSize: "0.8rem",
              whiteSpace: "pre-line",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {short_description}
          </Typography>
          <Button variant="outlined">{t("coaches.learn_more")}</Button>
        </Box>
      </Box>

      <ModalCoachCard
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={{ image, imgAlt, name, short_description, description }}
      />
    </>
  );
};

export default CardCoach;
