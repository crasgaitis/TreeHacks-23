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
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';


export default function ParcelCard(props) {
  return (
    <Fade bottom>
      <Card
        sx={{
          width: "300px",
          height: "320px",
          borderRadius: "15px",
          bottom: "0",
          right: "0",
          margin: "40px",
          boxShadow: 2,
          bgcolor: "#25282C",
        }}>
        <ButtonBase
          sx={{
            focusRipple: true,
            disableRipple: false,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            p: 0.8,
          }}          
          href={`/order/${props.parcel._id.toString()}`}>
          <Box
            component="img"
            alt="card image"
            height="200px"
            width="100%"
            borderRadius="15px"
            objectFit="cover"
            src={props.parcel.image}
          />

          <Typography fontSize={25} marginTop={1} fontWeight={700} color="#D9E3EA">{props.parcel.city}, {props.parcel.state}</Typography>
          <Typography fontSize={15} color="gray">{props.parcel.county}</Typography>

          <Stack direction="row" spacing={1} m={1}>
            <Chip icon={<LocalOfferIcon/>} label={"$"+props.parcel.price_per_1000sqft} variant="outlined" boxShadow={2}/>
            <Chip icon={<AspectRatioIcon />} label="0.023 acres" variant="outlined" boxShadow={2}/>
          </Stack>
        </ButtonBase>
      </Card>
    </Fade>
  );
}
