import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Genres from "../genres/genres.component";
import Card from "../cards/card.component";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[8],
    padding: theme.spacing(2, 4, 3),
    width: "80%",
    height: "60%",
    display: "flex",
    // flexDirection: "column",
    justifyContent: "space-around",
  },
  text: {
    display: "flex",
    width: "40%",
  },
}));

export default function AModal({ movie }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let key = 1;
  return (
    <div key={key++} className="something">
      <Card
        imagePath={movie.poster_path}
        title={movie.title}
        year={movie.release_date}
        id={movie.id}
        handleOpen={handleOpen}
      />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div key={movie.id} className={classes.paper}>
            <h4
              className={classes.text}
              key={movie.id}
              id="transition-modal-title"
            >
              {movie.overview}
            </h4>
            <div>
              {movie.genre_ids.map((genre) => (
                <p key={key++}>
                  {Genres.filter((el) => el.id === genre).map((el) => el.name)}
                </p>
              ))}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
