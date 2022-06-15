import { Container, Box } from "@mui/material";
import Typography from "../../Atoms/Typography";
import NavIcon from "../../molecules/Nav";
import {
  RocketLaunchOutlined,
  AccountBalanceOutlined,
  DesktopWindowsOutlined,
  ScienceOutlined,
  StairsOutlined,
  HistoryToggleOffOutlined,
  AttachMoneyOutlined,
  SpaOutlined,
  ConnectWithoutContactOutlined,
  ApartmentOutlined,
  AccessibleForwardOutlined,
  BorderColorOutlined,
  CategoryOutlined,
  LibraryBooksOutlined,
  LocalAtmOutlined,
  ParkOutlined,
  PeopleAltOutlined,
  PsychologyOutlined,
  SchoolOutlined,
  TimerOutlined,
  WcOutlined,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import theme from "../../Theme";

const ExplorerStyle = {
  topicText: {
    fontWeight: 700,
  },
};

const ExploreComponent = (props: any) => {
  const data = [
    {
      leftIcon: <RocketLaunchOutlined />,
      label: "Entrepreneurship",
    },
    {
      leftIcon: <AccountBalanceOutlined />,
      label: "Politics",
    },
    {
      leftIcon: <DesktopWindowsOutlined />,
      label: "Marketing & Sales",
    },
    {
      leftIcon: <ScienceOutlined />,
      label: "Science",
    },
    {
      leftIcon: <SpaOutlined />,
      label: "Health & Nutrition",
    },
    {
      leftIcon: <StairsOutlined />,
      label: "Personal Development",
    },
    {
      leftIcon: <AttachMoneyOutlined />,
      label: "Economics",
    },
    {
      leftIcon: <HistoryToggleOffOutlined />,
      label: "History",
    },
    {
      leftIcon: <ConnectWithoutContactOutlined />,
      label: "Communication Skills",
    },
    {
      leftIcon: <ApartmentOutlined />,
      label: "Corporate Culture",
    },
    {
      leftIcon: <CategoryOutlined />,
      label: "Management & Leadership",
    },
    {
      leftIcon: <AccessibleForwardOutlined />,
      label: "Motivation & Inspiration",
    },
    {
      leftIcon: <LocalAtmOutlined />,
      label: "Money & Investments",
    },
    {
      leftIcon: <PsychologyOutlined />,
      label: "Psycology",
    },
    {
      leftIcon: <TimerOutlined />,
      label: "Productivity",
    },
    {
      leftIcon: <WcOutlined />,
      label: "Sex & Relationships",
    },
    {
      leftIcon: <PeopleAltOutlined />,
      label: "Society & Culture",
    },
    {
      leftIcon: <ParkOutlined />,
      label: "Nature & the Environment",
    },
    {
      leftIcon: <SchoolOutlined />,
      label: "Carrer & Success",
    },
    {
      leftIcon: <LibraryBooksOutlined />,
      label: "Education",
    },
    {
      leftIcon: <BorderColorOutlined />,
      label: "Creativity",
    },
  ];

  return (
    <Box
      sx={{
        width: "auto",
        height: "auto",
        backgroundColor: "#F1F6F4",
        position: "absolute",
        top: "-10px",
        left: "0px",
        right: "0px",
        zIndex: "1000",
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyItems: "space-between",
          alignItems: "center",
          height: "50px",
          marginTop: "100px",
          borderBottom: "1px solid lightGrey",
          marginBottom: "10px",
          padding: "0px",
        }}
      >
        <Typography
          sx={{ color: "#116BE9", fontWeight: "bold", fontFamily: "Cera" }}
          mr={25}
        >
          Explore by category
        </Typography>
        <Typography
          sx={{ fontFamily: "Cera" }}
          // variant1="subtitle3"
          mr={21}
        >
          See recently added titles
        </Typography>
        <Typography mr={15} sx={{ fontFamily: "Cera" }}>
          See popular titles
        </Typography>
      </Container>
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((currData) => {
          return (
            <Box
              sx={{
                width: "30.3%",
                color: theme.palette.primary.light,
                padding: theme.spacing(1),
              }}
              onClick={props.handleExploreMenu}
            >
              <NavLink
                to="/entrepreneur"
                style={{
                  textDecoration: "none",
                  color: "#6D787E",
                }}
              >
                <NavIcon {...currData} data-testid="navexplorer-icon" />
              </NavLink>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};
export default ExploreComponent;
