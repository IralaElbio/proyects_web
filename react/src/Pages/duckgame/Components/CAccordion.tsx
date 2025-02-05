import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionListProps {
  items: AccordionItem[];
  titleVariant?: "h5" | "inherit" | "h6"; // add more if need
}

const AccordionWNode: React.FC<AccordionListProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" gutterBottom>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default AccordionWNode;
