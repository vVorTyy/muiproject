import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function IconSection() {
  const theme = useTheme();
  return (
    <Container sx={{ mt: 4, bgcolor: theme.palette.mode === "dark" ? "#000": "#fff"  }}>
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        direction={"row"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Mybox
          icon={<ElectricBolt />}
          title={"Fast Delivery"}
          subTitle={"Start from $10"}
        />
        <Mybox
          icon={<WorkspacePremiumOutlined />}
          title={"Money Guarantee"}
          subTitle={"7 Days Back"}
        />
        <Mybox
          icon={<AccessAlarmOutlined />}
          title={"365 Days"}
          subTitle={"For free return"}
        />
        <Mybox
          icon={<CreditScoreOutlined />}
          title={"Payment"}
          subTitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
}

const Mybox = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
        p: 1.6,
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="body1"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
