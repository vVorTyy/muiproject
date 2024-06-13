import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";



export default function ProductDetails(cartDetails) {
  console.log(cartDetails.cartDetails)

  return (
    <Box sx={{display:"flex",p:10, alignItems:"center",gap:2.5,flexDirection:{xs:"column", sm:"row"}}}>
      <Box display={"flex"} >
        <img width={300} src={cartDetails.cartDetails.imgUrl} alt="" />
      </Box>

      <Box sx={{textAlign:{xs:"center", sm:"left"}}}>
        <Typography variant="h5">WOMEN'S FASHION</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h5">
          {cartDetails.cartDetails.price}$
        </Typography>
        <Typography variant="body1">
        {cartDetails.cartDetails.decription}
        </Typography>
        <Stack sx={{justifyContent:{xs:"center", sm:"left"}}}  direction={"row"} gap={1} my={2}>
            {["src\\t-shirts-products\\more\\100.jpg","src\\t-shirts-products\\more\\100.jpg","src\\t-shirts-products\\more\\100.jpg"].map((e) => 
            <img height={100} width={90} key={e} src={cartDetails.cartDetails.imgUrl} alt="" />
            )}
        </Stack>
        <Button sx={{textTransform:"capitalize", mt:{sx: 1, sm:1}}} variant="contained">
            <AddShoppingCartOutlined sx={{mr:1 }} fontSize="small"/>
            Buy now
        </Button>
      </Box>
    </Box>
  );
}
