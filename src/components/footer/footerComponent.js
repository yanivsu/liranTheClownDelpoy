import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    // position: "absolute",
    bottom: 0,
    marginTop: "2%",
    backgroundColor: "#fbc904",
    height: "50px",
  },
  newFont: {
    fontFamily: ["Open sans"].join(","),
    fontWeight: "bold",
  },
}));
function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <Grid
        alignItems="center"
        className={classes.root}
        xs={12}
        justifyContent="center"
        container
      >
        <Typography className={classes.newFont} variant="h6" color="black">
          Develop & design by Yaniv Suriyano
        </Typography>
      </Grid>
    </footer>
  );
}

export default Footer;
