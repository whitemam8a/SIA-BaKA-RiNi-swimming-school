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
            className="w-full sm:w-[250px] h-[200px] sm:h-[250px] object-cover rounded"
          />
          <Box>
            <Typography sx={{ mb: 2 }}>
              Привет! <strong>Я – весёлый и внимательный тренер</strong>,
              который поможет твоему малышу{" "}
              <span style={{ color: "#1976d2", fontWeight: 600 }}>
                полюбить воду
              </span>{" "}
              и научиться плавать с радостью! Мои занятия – это игры,
              увлекательные упражнения и поддержка, чтобы каждый ребёнок
              чувствовал себя уверенно в бассейне.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                <li>
                  🔹 <strong>Индивидуальный подход</strong> – учитываю возраст и
                  уровень подготовки.
                </li>
                <li>
                  🔹 <strong>Безопасность</strong> – всегда на первом месте.
                </li>
                <li>
                  🔹 <strong>Лёгкое обучение</strong> – через интерес и доброе
                  отношение.
                </li>
              </ul>
            </Typography>
            {/* <Typography sx={{ fontWeight: 600 }}>
              Помогу преодолеть страх воды, освоить разные стили плавания и
              просто весело провести время! Давайте вместе сделаем плавание
              любимым занятием вашего ребёнка!
            </Typography> */}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalCoachCard;
