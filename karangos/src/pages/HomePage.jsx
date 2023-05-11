import React from "react";
import { Typography, Box } from "@mui/material";
import Image from '../assets/vintage-cars.png'

export default function HomePage(){
    return (
        <>
        <Typography variant='h1' sx={{textAlign: 'center'}}>
            Bem-Vindo a loja Karangos!
        </Typography>
        <Box sx={{textAlign: 'center'}}>
            <img src={Image} alt='carros'/>
        </Box>
        </>
    )
}