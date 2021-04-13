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
  List,
  ListItem,
  Card,
  CardContent,
  CardActions,
  Collapse,
  Container,
  LinearProgress,
  Grid,
  CardMedia,
 } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import EventIcon from "@material-ui/icons/Event";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import NoSimIcon from "@material-ui/icons/NoSim";

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
  card: {
    flexGrow: 1,
    backgroundColor: "#252525",
    color: "#FF8C00",
    opacity: "70%",
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
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    color: "#FF8C00",
  },
  expandOpen: {
    transform: "rotate(180deg)",
    color: "#FF8C00",
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
  chart: {
    padding: "3px",
  },
  radio: {
    width: "15px",
  },
  content: {
    textAlign: "right",
  },
  score: {
    textAlign: "center",
    fontSize: "52px",
    marginTop: "10px",
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

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    date: "19 April 2021",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    date: "20 April 2021",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    date: "21 April 2021",
  },
];
const Home = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      <Container className={classes.container}>
        <List className={classes.list}>
          {DATA.map(({ id, title, date }) => (
            <ListItem>
              <Card className={classes.card}>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="#FF8C00"
                    component="p"
                    className={classes.date}
                  >
                    {date}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="#FF8C00"
                    component="p"
                    className={classes.text2}
                  >
                    mumbai
                  </Typography>
                  <br />

                  <Grid container spacing={3}>
                    <Grid item xs>
                      <CardMedia
                        className={classes.media}
                        image="https://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/FC-Barcelona-icon.png"
                      />
                      <Typography
                        variant="body2"
                        color="#FF8C00"
                        component="p"
                        className={classes.text2}
                      >
                        Barcelona FC
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        variant="body2"
                        color="#FF8C00"
                        component="p"
                        className={classes.score}
                      >
                        3-4
                      </Typography>
                      <Typography
                        variant="body2"
                        color="#FF8C00"
                        component="p"
                        className={classes.text2}
                      >
                        FINAL
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <CardMedia
                        className={classes.media}
                        image="https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png"
                      />
                      <Typography
                        variant="body2"
                        color="#FF8C00"
                        component="p"
                        className={classes.text2}
                      >
                        Arcenal FC
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions disableSpacing>
                  <ShowChartIcon className={classes.chart} />
                  <Typography
                    variant="body2"
                    color="#FF8C00"
                    component="p"
                    className={classes.date}
                  >
                    Statistic
                  </Typography>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs>
                        <Typography
                          variant="body2"
                          color="#FF8C00"
                          component="p"
                          className={classes.persen}
                        >
                          63%
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography
                          variant="body2"
                          color="#FF8C00"
                          component="p"
                          className={classes.posission}
                        >
                          Possession
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography
                          variant="body2"
                          color="#FF8C00"
                          component="p"
                          className={classes.persen}
                        >
                          37%
                        </Typography>
                      </Grid>
                    </Grid>
                    <br />
                    <BorderLinearProgress variant="determinate" value={50} />
                    <br />
                    <br />
                    <Grid container spacing={3}>
                      <Grid item xs>
                        <Typography
                          variant="body2"
                          color="#FF8C00"
                          component="p"
                          className={classes.content}
                        ></Typography>
                      </Grid>
                      <Grid item xs="1.5">
                        <SportsSoccerIcon className={classes.ball} />
                      </Grid>
                      <Grid item xs>
                        <Typography
                          variant="body2"
                          color="#F8F8FF"
                          component="p"
                        >
                          Kenneth Scott
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs>
                        <Typography
                          variant="body2"
                          color="#FF8C00"
                          component="p"
                          className={classes.content}
                        ></Typography>
                      </Grid>
                      <Grid item xs="1.5">
                        <SportsSoccerIcon className={classes.ball} />
                      </Grid>
                      <Grid item xs>
                        <Typography
                          variant="body2"
                          color="#FF8C00"
                          component="p"
                        >
                          Adam Webb
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs>
                        <Typography
                          variant="body2"
                          color="#FF8C00"
                          component="p"
                          className={classes.content}
                        >
                          Henny Newman
                        </Typography>
                      </Grid>
                      <Grid item xs="1.5">
                        <NoSimIcon className={classes.redcard} />
                      </Grid>
                      <Grid item xs>
                        <Typography
                          variant="body2"
                          color="#FF8C00"
                          component="p"
                        ></Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs>
                        <Typography
                          variant="body2"
                          color="#FF8C00"
                          component="p"
                          className={classes.content}
                        >
                          Wayne Kelly
                        </Typography>
                      </Grid>
                      <Grid item xs="1.5">
                        <SportsSoccerIcon className={classes.ball} />
                      </Grid>
                      <Grid item xs>
                        <Typography
                          variant="body2"
                          color="#FF8C00"
                          component="p"
                        ></Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs>
                        <Typography
                          variant="body2"
                          color="#FF8C00"
                          component="p"
                          className={classes.content}
                        ></Typography>
                      </Grid>
                      <Grid item xs="1.5">
                        <NoSimIcon className={classes.yellowcard} />
                      </Grid>
                      <Grid item xs>
                        <Typography
                          variant="body2"
                          color="#FF8C00"
                          component="p"
                        >
                          Patrick Aguilar
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Collapse>
              </Card>
            </ListItem>
          ))}
        </List>
      </Container>
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
