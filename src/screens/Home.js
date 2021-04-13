import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { 
  AppBar, 
  Toolbar,
  Tab,
  Tabs,
  Typography,
  Button,
  IconButton,
  
  LinearProgress,
  
 } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import PersonPinIcon from "@material-ui/icons/PersonPin";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import EventIcon from "@material-ui/icons/Event";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";

import CardComponents from '../components/CardComponent';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#ffff",
  },
  body: {
    backgroundColor: "#000000",
  },
  appbar: {
    position: "static",
    backgroundColor: "#000000",
    color: "#FF8C00",
    position: "fixed",
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
    textAlign: "center",
    color: "#FF8C00",
  },
  text: {
    padding: theme.spacing(2, 2, 0),
    color: "#FF8C00",
  },
  
  list: {
    marginBottom: theme.spacing(2),
  },
 
  
  
  container: {
    backgroundColor: "#000000",
    marginTop: "50px",
  },
  icon: {
    color: "#FF8C00",
  },
  date: {
    textAlign: "center",
    fontWeight: "900",
  },
  posission: {
    textAlign: "center",
    fontWeight: "900",
    marginTop: "20px",
  },
  
  radio: {
    width: "15px",
  },
  content: {
    textAlign: "right",
  },
 
  persen: {
    textAlign: "center",
    fontSize: "40px",
    color: "#ffff",
  },
  text2: {
    color: "#D3D3D3",
    textAlign: "center",
    fontWeight: "200",
  },
  appBar2: {
    top: "auto",
    bottom: 0,
    backgroundColor: "#000000",
    color: "#FF8C00",
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  ball: {
    color: "#ffff",
  },
  redcard: {
    color: "#FF0000",
  },
  yellowcard: {
    color: "#FFFF00",
  },
}));


const Home = (props) => {
  const classes = useStyles();
  

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SCOREBOARD
          </Typography>
          <Button color="inherit">
            <SearchIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <CardComponents/>
      <AppBar position="fixed" color="primary" className={classes.appBar2}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="#FF8C00"
          textColor="#FF8C00"
          aria-label="icon label tabs example"
        >
          <Tab icon={<SportsHandballIcon />} label="Matches" />
          <Tab icon={<SportsSoccerIcon />} label="Team" />
          <Tab icon={<EventIcon />} label="Calender" />
          <Tab icon={<PersonPinIcon />} label="Profile" />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default Home;
