import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Box,
  Container,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
  IconButton,
  Stack,
} from "@mui/material";
import { Close, KeyboardArrowRightOutlined, Window } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import LaptopIcon from "@mui/icons-material/Laptop";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Drawer from "@mui/material/Drawer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import Links from "./Links";

export default function Header3() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      <Box>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          // @ts-ignore
          sx={{ width: "200px", bgcolor: theme.palette.CategoriesColor.main }}
        >
          <Window sx={{ color: theme.palette.text.primary }} />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
              color: theme.palette.text.primary,
            }}
          >
            cartegories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightOutlined
            sx={{ color: theme.palette.text.primary }}
          />
        </Button>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{
            top: "37px",
            ".MuiPaper-root": {
              width: "220px",
              // @ts-ignore
              bgcolor: theme.palette.CategoriesColor.main,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText>Bikes</ListItemText>
            <Typography variant="body2" color="text.secondary"></Typography>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText>Electronice</ListItemText>
            <Typography variant="body2" color="text.secondary"></Typography>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText>Books</ListItemText>
            <Typography variant="body2" color="text.secondary"></Typography>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText>Games</ListItemText>
            <Typography variant="body2" color="text.secondary"></Typography>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1000px)") && (
        <Stack gap={3} direction={"row"} alignItems={"center"}>
          <Links title={"home"} />
          <Links title={"Mega Menu"} />
          <Links title={"full Screen Menu"} />
          <Links title={"pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}

      {useMediaQuery("(max-width:1000px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box
          key="dasdf"
          sx={{
            width: 444,
            mx: "auto",
            mt: 6,
            position: "relative",
            pt: 10,
          }}
        >
          <IconButton
            onClick={toggleDrawer("top", false)}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              "&:hover": { color: "red", rotate: "180deg", transition: "0.3s" },
            }}
          >
            <Close />
          </IconButton>
          {[
            {id: 1,mainLink: "home",supLink: ["Link 1", "Link 2", "Link 3"],},
            {id: 2,mainLink: "Mega menu",supLink: ["Link 1", "Link 2", "Link 3"],},
            {
              id: 3,
              mainLink: "full screen menu",
              supLink: ["Link 1", "Link 2", "Link 3"],
            },
            {
              id: 4,
              mainLink: "pages",
              supLink: ["Link 1", "Link 2", "Link 3"],
            },
            {
              id: 5,
              mainLink: "user account",
              supLink: ["Link 1", "Link 2", "Link 3"],
            },
            {
              id: 6,
              mainLink: "vendor account",
              supLink: ["Link 1", "Link 2", "Link 3"],
            },
          ].map((e) => (
            // @ts-ignore
            <Accordion Key={e.id} elevation={0} sx={{ bgcolor: "initial" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {e.mainLink}
              </AccordionSummary>
              <List sx={{ py: 0, my: 0 }}>
                {e.supLink.map((e) => (
                  <ListItem key={e} sx={{ py: 0, my: 0 }}>
                    <ListItemButton>
                      <ListItemText primary={e} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Accordion>
          ))}
        </Box>
      </Drawer>
    </Container>
  );
}
