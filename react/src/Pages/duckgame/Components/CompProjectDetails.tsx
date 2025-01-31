import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionListProps {
  items: AccordionItem[];
}

const ProjectDetailsSection: React.FC<AccordionListProps> = ({ items }) => {
  return (
    <Stack spacing={2}>
      {items.map((item, index) => (
        <Accordion key={index} sx={{ backgroundColor: "transparent", color: "white" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
            <Typography variant="h5" gutterBottom>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.content}</AccordionDetails>
        </Accordion>
      ))
      }
    </Stack >
  );
};

export default ProjectDetailsSection;
