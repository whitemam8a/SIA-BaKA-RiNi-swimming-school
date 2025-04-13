import React, { useState } from "react";
import ModalCoachCard from "./ModalCoachCard";
import { Box, Button, Typography } from "@mui/material";

const CardCoach = ({ image, imgAlt, name, description }) => {
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
        <Box className="card-body h-[250px]">
          <h2 className="card-title">{name}</h2>
          <Typography>{description}</Typography>
          <Button variant="outlined">Узнать больше</Button>
        </Box>
      </Box>

      <ModalCoachCard
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={{ image, imgAlt, name, description }}
      />
    </>
  );
};

export default CardCoach;
