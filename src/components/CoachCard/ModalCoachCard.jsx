import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  width: "90%",
  maxWidth: 800,
  maxHeight: "90vh",
  overflowY: "auto",
};

const ModalCoachCard = ({ isOpen, onClose, data }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={modalStyle}>
        <Box className="flex justify-between items-start mb-4">
          <Typography variant="h6" component="h2">
            {data.name}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 4,
          }}
        >
          <img
            src={data.image}
            alt={data.imgAlt}
            style={{
              width: "100%",
              maxWidth: "250px",
              height: "auto",
              objectFit: "cover",
              borderRadius: "8px",
              flexShrink: 0,
            }}
          />
          <Box>
            {data.description &&
              (() => {
                const parts = data.description
                  .split("🔹")
                  .map((part) => part.trim())
                  .filter(Boolean);
                return (
                  <>
                    <Typography sx={{ mb: 2 }}>{parts[0]}</Typography>
                    <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                      {parts.slice(1).map((item, idx) => (
                        <li key={idx}>🔹 {item}</li>
                      ))}
                    </ul>
                  </>
                );
              })()}
            {/* <Typography>{data.description}</Typography> */}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalCoachCard;
