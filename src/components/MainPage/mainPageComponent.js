import React from "react";
import { Element } from "react-scroll";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import About from "../about/aboutComponent";
import ArtInfo from "../art/artInfoComponent";
import AppHeader from "../header/headerComponent";
import * as enums from "../../helpers/enums";

import linoysProfilePicture from "../../styles/linoyProfilePicture.jpeg";
import noasProfilePicture from "../../styles/NoaProfilePicture.jpg";

const linoysData = {
  name: enums.artInfoTexts.LINOY,
  about: enums.artInfoTexts.ABOUT_LINOY,
  profilePicture: linoysProfilePicture,
  backgroundPicture: "../../../styles/cloudsBackground2.svg",
  rightSide: true,
};

const noasData = {
  name: enums.artInfoTexts.NOA,
  about: enums.artInfoTexts.ABOUT_NOA,
  profilePicture: noasProfilePicture,
  backgroundPicture: "../../../styles/cloudsBackground2.svg",
  rightSide: false,
};

const useStyles = makeStyles((theme) => {});
function MainPage() {
  const data = [linoysData, noasData];
  const classes = useStyles();
  return (
    <Grid>
      <Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: "3%" }}
        >
          <Grid xl={7} md={10} xs={12}>
            <About />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Grid xl={7} md={10} xs={12}>
            <Element name="ArtInfoElement">
              {data.map((person, index) => {
                return (
                  <div id={index}>
                    <ArtInfo data={person} className={classes.biggerDisplay} />
                  </div>
                );
              })}
            </Element>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MainPage;
