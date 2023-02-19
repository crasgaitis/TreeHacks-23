import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Box from "@mui/material/Box";
import Fade from "react-reveal/Fade";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import ParcelCard from "./Card";
import { useQuery } from "../../convex/_generated/react";
import { useMutation } from "../../convex/_generated/react";

export default function ParcelList() {
    /*const createParcel = useMutation("createParcel");
    const generate = () => createParcel("Escape to your own plot of land in the lush and verdant forests of Northern California. Imagine towering trees, babbling streams, and endless greenery as your backyard. Whether you're an outdoor enthusiast looking to hike, camp, or simply enjoy nature, or an investor seeking a unique opportunity, this land is perfect for you. Northern California's wooded forests are home to a wide variety of wildlife, including black bears, deer, and spotted owls, and offer endless recreational opportunities. With rivers, lakes, and a rich history, this land offers something for everyone. Don't miss out on the chance to own a piece of this incredible forest landscape.    ",
        "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1675386840153x294966771572857700%2Fca-land-CA-LAS-511-MVR-4-07.jpg?w=1536&h=1536&auto=compress&dpr=1.25&fit=max",
        40.88785690,
        -120.6490387,
        "Nightowl",
        "Lassen County",
        "California",
        99,
        []
    )*/
    const parcels = useQuery("getParcels:getThreeParcels")
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <Typography fontSize="40px">Trending Properties</Typography>
      <Stack direction="row" justifyContent="center" alignItems="center">
        {parcels && parcels.map((element,index) => {return(<ParcelCard key={index} parcel={element}></ParcelCard>)})}
      </Stack>
      <Button variant="outlined" href="/marketplace">Browse All</Button>
    </Box>
  );
}
