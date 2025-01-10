import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Stack from '@mui/material/Stack';
import { Box, Button } from '@mui/material';


function MainBarr() {
    return (
        <Box sx={{ backgroundColor: 'grey' }}>
            <Stack direction={'row'} spacing={3} justifyContent={'space-between'}>
                <Box>
                    <h3>Elbio Irala</h3>
                </Box>
                <Button endIcon={<HomeIcon />} variant="contained">
                    Home
                </Button>
            </Stack>
        </Box>
    )
}

export default MainBarr
