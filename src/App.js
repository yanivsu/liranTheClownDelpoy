import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import AppHeader from "./components/header/headerComponent";
import MainPage from "./components/MainPage/mainPageComponent";
import Creation from "./components/creation/creationComponent";
import BookInfo from "./components/bookInfo/bookInfoComponent";
import Footer from "./components/footer/footerComponent";
import ReviewCarousel from "./components/reviewCarousel/reviewCarouselComponent";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fbc904", // #FFAAA6 - Pink
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
});

const useStyles = makeStyles((theme) => ({
  footer: { height: "1000px" },
}));

function App() {
  const classes = useStyles();
  console.log("coomit");
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Grid container justifyContent="center" alignItems="center">
          <Grid xl={7} md={10} xs={12}>
            <AppHeader />
          </Grid>
        </Grid>
        <Routes>
          <Route path="*" element={<Navigate to="BookWebsite/home" />} />
          <Route exact path="BookWebsite/home" element={<MainPage />} />
          <Route path="/BookWebsite/Creation" element={<Creation />} />
          <Route path="/BookWebsite/BookInfo" element={<BookInfo />} />
        </Routes>
      </Router>
      <ReviewCarousel />
      <Footer classes={classes.footer} />
    </ThemeProvider>
  );
}
//test
export default App;
