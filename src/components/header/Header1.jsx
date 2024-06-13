// @ts-nocheck
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  IconButton,
  ListItem,
  Stack,
  Typography,
  useTheme,
  Container,
} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  Facebook,
  Instagram,
  LightModeOutlined,
  X,
} from "@mui/icons-material";
import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = ["EN", "AR"];

export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: "4px",
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            HOT
          </Typography>

          <Typography
            sx={{ fontSize: "12px", fontWeight: 300, color: "#fff" }}
            variant="body2"
          >
            Free Express Shipping
          </Typography>

          <Box flexGrow={1} />

          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
              </IconButton>
            )}
          </div>

          <List component="nav" aria-label="Device settings">
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ cursor: "pointer", padding: "0px 10px" , "&:hover:": { cursor: "pointer", color: "red" }  }}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": {
                    fontSize: "12px",
                    color: "#fff",
                    px: "0px",
                  },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore
                sx={{
                  margin: "0px",
                  padding: "0px",
                  fontSize: "18px",
                  color: "#fff",
                }}
              />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                // selected={index === 0}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
                sx={{ fontSize: "14px", "&:hover:": { cursor: "pointer" } }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <X
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
          <Facebook
            sx={{
              fontSize: "16px",
              color: "#fff",
              mx: 1,
            }}
          />
          <Instagram
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
