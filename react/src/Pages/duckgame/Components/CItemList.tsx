import React from "react";
import { Typography, Box } from "@mui/material";

interface ListProps {
    title: string;
    titleVariant?: "h5" | "h6" | "inherit";
    items: string[];
}

const ItemList: React.FC<ListProps> = ({ title, titleVariant = "h5", items }) => {
    return (
        <Box>
            <Typography variant={titleVariant} gutterBottom>
                {title}
            </Typography>
            <Box component="ul" sx={{ marginBottom: 3, paddingLeft: 2 }}>
                {items.map((item, index) => (
                    <Typography key={index} component="li" variant="body1">
                        {item}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default ItemList;
