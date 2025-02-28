import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionListProps {
  items: AccordionItem[];
  titleVariant?: "h5" | "inherit" | "h6";
}

// Contenedor para información desplegable
export const CustomAccordion = styled(Accordion)(() => ({
  backgroundColor: "transparent",
  borderRadius: "2px",
  boxShadow: "none",
}));

// Contenedor para información desplegable
export const CustomAccordionDetails = styled(AccordionDetails)(() => ({
  padding: "16px",
}));

// Contenido del acordeón
export const CustomAccordionSummary = styled(AccordionSummary)(() => ({
  fontWeight: "bold",
  fontSize: "1.1rem",
}));

const AccordionWNode: React.FC<AccordionListProps> = ({
  items,
  titleVariant,
}) => {
  return (
    <>
      {items.map((item, index) => (
        <CustomAccordion key={index}>
          <CustomAccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          >
            <Typography
              variant={titleVariant}
              sx={{ fontSize: "clamp(0.8rem, 2vw, 1.5rem)" }}
              gutterBottom
            >
              {item.title}
            </Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails>{item.content}</CustomAccordionDetails>
        </CustomAccordion>
      ))}
    </>
  );
};

export default AccordionWNode;
