import React from 'react'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { Box } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
function Home() {
    return (
        <Box sx={{ backgroundColor: 'yellow' }}>
            <Typography variant="h2" gutterBottom >
                Proyects
            </Typography>
            <Stack direction={'row'} spacing={1}>
                <Card>
                    <CardMedia />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Perro
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>

        </Box>
    )
}

export default Home
