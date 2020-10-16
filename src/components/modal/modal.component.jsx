import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

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
  },
  text: {
    display: "flex",

    justifyContent: "space-around",
  },
  items: {
    width: "40%",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  a: {
    textDecoration: "none",
    padding: "14px 25px",
    color: "white",
    margin: "20px",
    border: "none",
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      border: "1px solid black",
    },
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
        imagePath={movie.medium_cover_image}
        title={movie.title}
        year={movie.year}
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
            <div className={classes.text}>
              <div>
                <h2>Synopsis</h2>
                <h4
                  className={classes.items}
                  key={movie.id}
                  id="transition-modal-title"
                >
                  {movie.summary}
                </h4>
              </div>

              <div>
                <h2>Genres</h2>
                {movie.genres.map((genre) => (
                  <p className={classes.items} key={key++}>
                    {genre}
                  </p>
                ))}
              </div>
            </div>
            <div className={classes.text}>
              <iframe
                width="820"
                height="445"
                src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
              ></iframe>
            </div>
            <div className={classes.center}>
              <p>Download</p>
            </div>
            <div className={classes.center}>
              <div>
                {movie.torrents.map((torrent) => (
                  <a href={torrent.url} className={classes.a} key={key++}>
                    {torrent.quality}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
