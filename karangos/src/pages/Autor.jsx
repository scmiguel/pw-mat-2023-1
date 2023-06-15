import React from "react";
import { Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Foto from '../assets/foto.jpg'

export default function Autor(){

    const [like, setLike] = React.useState(()=>{
        return window.localStorage.getItem('like') ?? 0
    })

    React.useEffect(() => {
        window.localStorage.setItem('like', like)
    })

    function handleClick(event) {
        setLike(like + 1)
    }
    

    return(
        <>
            <Typography variant='h1' sx={{mb: '50px'}}>
                Sobre o autor
            </Typography>
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    sx={{ height: 450 }}
                    image={Foto}
                    title="foto"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Miguel Souza Cintra
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Nascido em Franca no dia 15 de Abril de 2001, estudou na escola SESI onde completou o ensino Fundamental e Médio
                    </Typography>
                </CardContent>
                <Button variant="contained" sx={{margin: 2}} color="secondary" startIcon={<FavoriteIcon />} onClick={handleClick}>Curtir ({like})</Button>
            </Card>
        </>
    )
}