import React, { useEffect } from "react";
import { saveAs } from "file-saver";

import { Button, Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absoulte",
    transition: "transform 0.15s ease-in-out",
  },

  media: {
    paddingTop: "56.25%", // 16:9
  },
  img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-55%",
    width: "50%",
    maxHeight: "500px",
  },
  button: {
    width: "100%",
    height: "80px",
  },
}));

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const saveFile = (props) => {
    saveAs(props.data ? props.data.imgLink : "", "image.jpg");
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="Paint Paper Dialog"
      open={open}
      fullWidth
      maxWidth={"md"}
    >
      <DialogTitle id="Paint Paper Dialog">דף צביעה</DialogTitle>
      <Card style={{ cursor: "pointer" }}>
        <CardMedia className={classes.media} title="Paint">
          <img
            src={props.data ? props.data.imgLink : ""}
            alt="paint"
            className={classes.img}
          />
        </CardMedia>
        <CardActions disableSpacing potios>
          <Grid container justifyContent="center">
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              onClick={() => {
                console.log("hello");
                saveFile(props);
              }}
            >
              <Typography variant="h3">הורדה</Typography>
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Dialog>
  );
}

export default function SimpleDialogDemo(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    if (props.data !== undefined) setOpen(true);
  }, [props.data]);

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <SimpleDialog data={props.data} open={open} onClose={handleClose} />
    </div>
  );
}
