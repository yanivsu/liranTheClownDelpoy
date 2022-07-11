import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll, Element } from "react-scroll";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import headerIcon from "../../styles/headerIcon.png";
import * as enums from "../../helpers/enums";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "100px",
    width: "150px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  logoSm: {
    height: "80px",
    width: "150px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menuMobilePapaer: {
    backgroundColor: "#fbc904",
  },
  toolBar: {
    margin: "auto",
  },
  biggerScreen: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  smallScreen: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  button: {
    border: "3px solid black",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  buttonIcon: {
    margin: theme.spacing(0, 1, 0, 2),
    [theme.breakpoints.down("xs")]: {
      // display: "none",
    },
  },
  buttonCollapse: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    margin: "10px",
  },
  icon: {
    // position: "relative",
  },
}));

export default function AppHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Grid container md={12} className={classes.biggerScreen}>
          <Grid container justifyContent="center" className={classes.toolBar}>
            <Toolbar>
              <Link to="/BookWebsite/home" style={{ textDecoration: "none" }}>
                <Button className={classes.button}>
                  {enums.buttonsText.HOME}
                </Button>
              </Link>

              <Link
                to="/BookWebsite/BookInfo"
                style={{ textDecoration: "none" }}
              >
                <Button className={classes.button}>
                  {enums.buttonsText.ABOUT}
                </Button>
              </Link>

              <Link to="/BookWebsite/home" style={{ textDecoration: "none" }}>
                <img
                  className={classes.logo}
                  src={headerIcon}
                  alt="למסך הבית"
                />
              </Link>

              <Link
                to="/BookWebsite/Creation"
                style={{ textDecoration: "none" }}
              >
                <Button className={classes.button}>
                  {enums.buttonsText.CREATION}
                </Button>
              </Link>
              <Link to="#" style={{ textDecoration: "none" }}>
                <Button
                  onClick={() => {
                    window.open(enums.buttonsText.BUY_LINK, "_blank"); //to open new page
                  }}
                  className={classes.button}
                >
                  {enums.buttonsText.BUY}
                </Button>
              </Link>
            </Toolbar>
          </Grid>
        </Grid>
        <Toolbar className={classes.smallScreen}>
          <Grid container>
            <Grid container xs={1}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="תפריט"
              >
                <MenuIcon
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                />

                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  classes={{ paper: classes.menuMobilePapaer }}
                >
                  <Link
                    to="/BookWebsite/home"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem onClick={handleClose}>
                      {enums.buttonsText.HOME}
                    </MenuItem>
                  </Link>
                  <Link
                    to="/BookWebsite/BookInfo"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem onClick={handleClose}>
                      {enums.buttonsText.ABOUT}
                    </MenuItem>
                  </Link>
                  <Link
                    to="/BookWebsite/Creation"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem onClick={handleClose}>
                      {enums.buttonsText.CREATION}
                    </MenuItem>
                  </Link>
                  <Link
                    to="#"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => {
                      window.open(enums.buttonsText.BUY_LINK, "_blank"); //to open new page
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      {enums.buttonsText.BUY}
                    </MenuItem>
                  </Link>
                </Menu>
              </IconButton>
            </Grid>
            <Grid container xs={10} justifyContent="center">
              <Typography variant="h6">
                <img
                  className={classes.logoSm}
                  src={headerIcon}
                  alt="למסך הבית"
                />
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "1%" }}
      >
        <a
          href={enums.contants.facebook}
          target="_blank"
          rel="noopener noreferrer"
          download
          style={{ color: "black" }}
        >
          <FacebookIcon
            fontSize="large"
            className={classes.buttonIcon}
            style={{ textDecoration: "none" }}
          />
        </a>
        <a
          href={enums.contants.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          download
          style={{ color: "black" }}
        >
          <WhatsAppIcon fontSize="large" className={classes.buttonIcon} />
        </a>
        <a
          href={enums.contants.email}
          target="_blank"
          rel="noopener noreferrer"
          download
          style={{ color: "black" }}
        >
          <EmailIcon fontSize="large" className={classes.buttonIcon} />
        </a>
      </Grid>
    </div>
  );
}
