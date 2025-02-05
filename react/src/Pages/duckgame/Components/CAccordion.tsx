import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { SubSectionTitle } from "../DuckGameStyles";
import { styled } from "@mui/material/styles";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionListProps {
  items: AccordionItem[];
  titleVariant?: "h5" | "inherit" | "h6"; // add more if need
}

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  "&::before": {
    display: "none", // Elimina la línea divisoria por defecto
  },
  "&.Mui-expanded": {
    margin: "0", // Evita que el expandido afecte el diseño
  },
}))

const CustomAccordionDetails = styled(AccordionDetails)(() => ({
  padding: "16px",
  borderRadius: "8px",
}));

const AccordionWNode: React.FC<AccordionListProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <CustomAccordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}>
            <Typography variant="h5" gutterBottom>
              {item.title}
            </Typography>
          </AccordionSummary>
          <CustomAccordionDetails>{item.content}</CustomAccordionDetails>
        </CustomAccordion>
      ))}
    </>
  );
};

export default AccordionWNode;
