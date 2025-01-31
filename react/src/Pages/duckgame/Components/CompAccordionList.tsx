import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionItem {
    summary: string;
    details: string;
}

interface AccordionListWithHeaderProps {
    title: string;
    data: AccordionItem[];
}

const AccordionListWithHeader: React.FC<AccordionListWithHeaderProps> = ({ title, data }) => {
    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            {data.map((item, index) => (
                <Accordion key={index} sx={{ backgroundColor: "transparent", color: "white" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        <Typography>{item.summary}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{item.details}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default AccordionListWithHeader;