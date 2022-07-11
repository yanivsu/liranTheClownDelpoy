import React, { useState } from "react";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import { Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

import Game from "./ticTacToeComponent";
import * as enums from "../../helpers/enums";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: theme.spacing(3),
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.10, 1.10, 1)" },
  },

  media: {
    width: "auto",
    maxHeight: "200px",
    marginRight: "auto",
    marginLeft: "auto",
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },

  expandOpen: {
    transform: "rotate(180deg)",
  },

  card: {
    minWidth: "385px",
  },
}));

function Creation() {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const [data, setData] = useState();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: "3%" }}
    >
      <Grid xl={7} md={10} xs={12}>
        <Grid container>
          <Typography variant="h4">דפי צביעה</Typography>
        </Grid>
        <Grid container md={12} justifyContent="center">
          {enums.paintPapersLinks.map((paintPaperLink, index) => {
            return (
              <Grid item className={classes.card}>
                <Card
                  className={classes.root}
                  style={{ cursor: "pointer" }}
                  key={index}
                  onClick={(e) => {
                    console.log(e);
                    setOpenDialog(true);
                    setData({
                      imgLink: paintPaperLink,
                    });
                  }}
                >
                  <CardMedia
                    className={classes.media}
                    component="img"
                    image={paintPaperLink}
                    title="Paint"
                  ></CardMedia>
                  <CardActions disableSpacing>
                    <Grid container justifyContent="center">
                      <a
                        href={paintPaperLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <Button>
                          <GetAppIcon />
                        </Button>
                      </a>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}

          {/* <Grid container style={{ marginTop: "2  %" }}>
          <Typography variant="h4">איקס - עיגול</Typography>
        </Grid> */}
          {/* <Grid container justifyContent="center"> */}
          {/* <Game /> */}
          {/* </Grid> */}
        </Grid>
        <Grid container>
          <Typography variant="h4">דפי חשיבה ופעילות</Typography>
        </Grid>
        <Grid container md={12} justifyContent="center">
          {enums.thinkPaperLinks.map((paintPaperLink, index) => {
            return (
              <Grid item className={classes.card}>
                <Card
                  className={classes.root}
                  style={{ cursor: "pointer" }}
                  key={index}
                >
                  <CardMedia
                    className={classes.media}
                    component="img"
                    image={paintPaperLink.image}
                    title="Paint"
                  ></CardMedia>
                  <CardActions disableSpacing>
                    <Grid container justifyContent="center">
                      <a
                        href={paintPaperLink.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <Button>
                          <GetAppIcon />
                        </Button>
                      </a>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Grid style={{ marginTop: "3%" }} container justifyContent="center">
          <a
            href={enums.googleDrive}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Button color="primary" variant="contained">
              {enums.buttonsText.MORE_STAFF}
            </Button>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Creation;
