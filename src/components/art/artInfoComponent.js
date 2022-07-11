import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, CardContent, CardMedia, Grow } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Fade from "@material-ui/core/Fade";
import InstagramIcon from "@material-ui/icons/Instagram";

import cloudsBackground from "../../styles/zooframe.svg";
import borderBackground from "../../styles/border.png";
import * as enums from "../../helpers/enums";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    backgroundColor: "rgba(245,245,245,0.3)",
    background: "none",
    border: "30px solid transparent",
    borderImageSource: `url(${borderBackground})`,
    borderImageRepeat: "round",
    borderImageSlice: 30,
  },

  mediaRight: {
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(2),
    },
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
  },
  mediaLeft: {
    margin: theme.spacing(2, 0, 2, 2),
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
  },

  divider: {
    margin: theme.spacing(5, 0, 5),
    width: "5px",
    backgroundColor: "primary",
  },

  cardContent: {
    color: "white",
  },
}));

export default function ArtInfo(props) {
  const classes = useStyles();
  return (
    <Fade in={true} timeout={1500}>
      {props.data.rightSide ? (
        <Card className={classes.root}>
          <Grid
            container
            direction="row"
            sm={12}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item sm={5}>
              <CardMedia
                component="img"
                className={classes.mediaRight}
                image={props.data.profilePicture}
                title={enums.buttonsText.BOOKPAGE}
              />
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.divider}
            />
            <Grid container sm={6} direction="row">
              <Grid item>
                <CardContent>
                  <Typography variant="h3" className={classes.cardContent}>
                    <Box letterSpacing={5}>{props.data.name}</Box>
                  </Typography>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    className={classes.cardContent}
                  >
                    {props.data.about}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      ) : (
        <Card className={classes.root}>
          <Grid
            container
            direction="row"
            sm={12}
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item sm={6}>
              <Grid item>
                <CardContent>
                  <Typography variant="h3" className={classes.cardContent}>
                    <Box letterSpacing={5}>{props.data.name}</Box>
                  </Typography>
                  <Typography
                    variant="h5"
                    className={classes.cardContent}
                    color="textSecondary"
                  >
                    {props.data.about}
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      direction: "rtl",
                    }}
                  >
                    <Grid
                      container
                      justifyContent="center"
                      style={{ marginTop: "20px" }}
                    >
                      <a
                        style={{ textDecoration: "none", color: "#E4405F" }}
                        href={enums.contants.noaInstagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        noa_rachel@
                      </a>{" "}
                      <InstagramIcon
                        fontSize="large"
                        style={{ fontWeight: "bold", color: "#E4405F" }}
                      />
                    </Grid>
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.divider}
            />
            <Grid container sm={5}>
              <CardMedia
                component="img"
                className={classes.mediaLeft}
                image={props.data.profilePicture}
                title={enums.buttonsText.PROFILEPICTURE}
              />
            </Grid>
          </Grid>
        </Card>
      )}
    </Fade>
  );
}
