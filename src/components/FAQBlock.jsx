import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQBlock({ title, description }) {
  return (
    <Accordion
      elevation={3}
      disableGutters
      sx={{
        bgcolor: "slategray.100",
        backgroundColor: "#e2e8f0",
        borderRadius: 5,
        mb: 1,
        "&:before": {
          display: "none",
        },
        "&:first-of-type": {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        "&:last-of-type": {
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
        sx={{
          paddingX: 2,
          paddingY: 1.5,
        }}
      >
        <Typography sx={{ fontWeight: 500, fontSize: "1.25rem" }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ paddingX: 2, paddingBottom: 2 }}>
        {/* РЕНДЕР JSX */}
        <Typography component="div">{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
