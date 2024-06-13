import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  colors,
} from "@mui/material";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Pagination } from "swiper/modules";
import IconSection from "./IconSection";

const mySlider = [
  {
    text: "MEN",
    link: 'src\\images\\t-shirts-react-ecomerce-dev-ali-youtube-channel\\banner-15.jpg',
  },
  {
    text: "WOMAN",
    link: "src\\images\\t-shirts-react-ecomerce-dev-ali-youtube-channel\\banner-25.jpg",
  },
];

export default function Hero() {
  return (
    <Container >
      
      <Box sx={{pt:3,mt: 2.5, display: "flex", alignItems: "center", gap: 1 }}>
      <Swiper
      loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {mySlider.map((item) => (
          <SwiperSlide key={item.link} className="parent-slider">
            <img src={item.link} alt="" />
            <Box className="box">
              <Typography
                variant="h5"
                sx={{
                  color: "#222",
                }}
              >



                LIFESTYLE COLLECTION
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#222",
                  fontSize: "50px",
                  fontWeight: 500,
                  mt: 1,
                }}
              >
                {item.text}
              </Typography>

              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "#333",
                    mt: 1,
                    mr: 1,
                  }}
                >
                  SALE UP TO
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    color: "#b23f57",
                    fontWeight: 400,
                    mt: 1,
                  }}
                >
                  30% OFF
                </Typography>
              </Stack>

              <Typography
                variant="h6"
                sx={{
                  color: "#222",
                  fontSize: "14px",
                  fontWeight: 400,
                  mt: 1,
                }}
              >
                Get Free Shipping on orders over $99.00
              </Typography>

              <Button
                sx={{
                  bgcolor: "#222",
                  px: 5,
                  py: 1,
                  mt: 2,
                  boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                  color: "#fff",
                  borderRadius: "1px",
                  "&:hover": {
                    bgcolor: "#151515",
                    boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                  },
                }}
              >
                shop now
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.7%" } }}>
        <Box position={"relative"}>
          <img
            width={"100%"}
            src="src\images\t-shirts-react-ecomerce-dev-ali-youtube-channel\banner-17.jpg"
            alt=""
          />
          <Stack
            top={"50%"}
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 30,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              NEW ARREVALS
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              SUMMER
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
                mb: 2,
              }}
            >
              SALE 20% OFF
            </Typography>

            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",
                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none"
            >
              Shop now
              <ArrowForward sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>

        <Box position={"relative"}>
          <img
            width={"100%"}
            src="src\images\t-shirts-react-ecomerce-dev-ali-youtube-channel\banner-16.jpg"
            alt=""
          />
          <Stack
            top={"50%"}
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 30,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              GAMING 4K
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              DESKTOPS &
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
                mb: 2,
              }}
            >
              LAPTOPS
            </Typography>

            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",
                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none"
            >
              Shop now
              <ArrowForward sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
      </Box>



      <IconSection/>
    </Container>
  );
}
