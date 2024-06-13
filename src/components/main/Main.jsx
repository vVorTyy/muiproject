import {
  Box,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import {
  AddShoppingCartOutlined,
  CardTravel,
  Close,
  Sledding,
} from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useState } from "react";

export default function Main() {
  const handleAlignment = (event, newValue) => {
    if(allData){
      setmyData(newValue)
    }
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };




const allData = [  
    {
      id:1,
      imgUrl :"src\\\\t-shirts-products\\\\1\\\\final.png",
      title: "Jacket",
      price : 500,
      decription: "Champion mens Classic T-shirt, Seasonal (Retired Colors) T-Shirt" ,
      rating: 3,
      category : "man",
    },     
    {
      id:2,
      imgUrl : "src\\\\t-shirts-products\\\\1\\\\images.jpg",
      title: "T-Shirts",
      price : 20,
      decription: "Champion mens Classic T-shirt, Seasonal (Retired Colors) T-Shirt" ,
      rating: 5,
      category : "man",
    }, 
    {
      id:3,
      imgUrl : "src\\\\t-shirts-products\\\\more\\\\1 (9).jpg",
      title: "T-Shirts",
      price : 35,
      decription: "Champion mens Classic T-shirt, Seasonal (Retired Colors) T-Shirt" ,
      rating: 5,
      category : "man",
    },   
    {
      id:4,
      imgUrl : "src\\\\t-shirts-products\\\\2\\\\2.jpg",
      title: "Shirts",
      price : 372,
      decription: "Champion mens Classic T-shirt, Seasonal (Retired Colors) T-Shirt" ,
      rating: 5,
      category : "woman",
    }, 
    {
      id:5,
      imgUrl : "src\\\\t-shirts-products\\\\more\\\\1 (4).jpg",
      title: "T-Shirts",
      price : 200,
      decription: "adidas" ,
      rating: 5,
      category : "man",
    }, 
    {
      id:6,
      imgUrl : "src\\\\t-shirts-products\\\\3\\\\1.jpg",
      title: "Jacket",
      price :87,
      decription: "Champion mens Classic T-shirt, Seasonal (Retired Colors) T-Shirt" ,
      rating: 5,
      category : "woman",
    }, 
    {
      id:7,
      imgUrl : "src\\\\t-shirts-products\\\\more\\\\1 (3).jpg",
      title: "Shirts",
      price : 36,
      decription: "Champion mens Classic T-shirt, Seasonal (Retired Colors) T-Shirt" ,
      rating: 5,
      category : "man",
    }, 
    {
      id:8,
      imgUrl : "src\\\\t-shirts-products\\\\more\\\\1 (4).png",
      title: "Jacket",
      price : 65,
      decription: "Champion mens Classic T-shirt, Seasonal (Retired Colors) T-Shirt" ,
      rating: 5,
      category : "woman",
    }, 
    {
      id:9,
      imgUrl : "src\\\\t-shirts-products\\\\6\\\\1.jpg",
      title: "T-Shirts",
      price : 54,
      decription: "Champion mens Classic T-shirt, Seasonal (Retired Colors) T-Shirt" ,
      rating: 5,
      category : "woman",
    }, 
    {
      id:10,
      imgUrl : "src\\\\t-shirts-products\\\\5\\\\1 (6).jpg",
      title: "Jacket",
      price : 33,
      decription: "Champion mens Classic T-shirt, Seasonal (Retired Colors) T-Shirt" ,
      rating: 5,
      category : "man",
    }, 
];
const manData = allData.filter((e) => e.category === "man")
const womanData = allData.filter((e) => e.category === "woman")
const [myData, setmyData] = useState(allData)

const [cartDetails, setcartDetails] = useState({})



if (allData) {
    return (
      <Container sx={{ py: 10 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography variant="body1" fontWeight={300}>
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>

          <ToggleButtonGroup
            color="error"
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233,69,96,0.5) !important",
                color: "#e94560",
                background: "initial",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={allData}
              aria-label="left aligned"
              >
              all Products
            </ToggleButton>
            <ToggleButton
              className="myButton"
              value={manData}
              aria-label="centered"
              sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            >
              man category
            </ToggleButton>
            <ToggleButton
              className="myButton"
              value={womanData}
              aria-label="right aligned"
              sx={{ color: theme.palette.text.primary }}
            >
              women category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          {myData.map((e) => (
            
            
            <Card
            key={e.id}
            // @ts-ignore
            sx={{
              maxWidth: 333,
              mt: 6,
              ":hover .MuiCardMedia-root": {
                rotate: "1deg",
                scale: "1.1",
                transition: "0.35s",
              },
            }}
            >
              <CardMedia
                sx={{ height: 277 }}
                // @ts-ignore
                image={e.imgUrl}
                title="green iguana"
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography gutterBottom variant="h6" component={"div"}>
                    {e.title}
                  </Typography>
                  <Typography variant="subtitle1" component={"p"}>
                    ${e.price}
                  </Typography>
                </Stack>

                <Typography variant="body2" color="text.secondary">
                  {e.decription}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    handleClickOpen()
                    setcartDetails(e)
                  }}
                  sx={{ textTransform: "capitalize" }}
                  size="large"
                >
                  <AddShoppingCartOutlined fontSize="small" sx={{ mr: 1 }} />
                  add to cart
                </Button>
                <Rating
                  precision={0.1}
                  name="read-only"
                  value={e.rating}
                  readOnly
                />
              </CardActions>
            </Card>
          ))}
        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            onClick={handleClose}
            sx={{
              marginRight: 1,
              position: "absolute",
              top: 0,
              right: 0,
              "&:hover": { color: "red", rotate: "180deg", transition: "1.3s" },
            }}
          >
            <Close />
          </IconButton>
          <ProductDetails cartDetails={cartDetails}/>
        </Dialog>
      </Container>
    );
  }
}
