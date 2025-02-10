import React from "react";
import { SubSectionTitle } from "../DuckGameStyles"; // Importar estilos
import { Box, BoxProps, styled, Typography } from "@mui/material";


interface ListProps {
    title: string;
    titleVariant?: "h5" | "h6" | "inherit";
    items: string[];
}


const StyledList = styled(Box)<BoxProps>(({ theme }) => ({
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    listStyle: "disc",
}));


const StyledListItem = styled(Typography)<BoxProps>(({ theme }) => ({
    fontSize: "clamp(0.6rem, 2vw, 1.2rem)",
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    "&::marker": {
        color: theme.palette.primary.light,
    },
}));



const ItemList: React.FC<ListProps> = ({ title, titleVariant = "h5", items }) => {
    return (
        <Box>
            <SubSectionTitle variant={titleVariant}>
                {title}
            </SubSectionTitle>
            <StyledList component="ul">
                {items.map((item, index) => (
                    <StyledListItem key={index} component="li" variant="body1">
                        {item}
                    </StyledListItem>
                ))}
            </StyledList>
        </Box>
    );
};

export default ItemList;