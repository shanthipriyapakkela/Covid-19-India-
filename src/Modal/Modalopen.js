import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Modalopen = ({ open, close, data, District }) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{District}</h2>
            <Typography color="textPrimary">
              Active Cases : {data.active}
            </Typography>
            <Typography color="textPrimary">
              Confirmed Cases : {data.confirmed}
            </Typography>
            <Typography color="textPrimary">
              Deceased Cases : {data.deceased}
            </Typography>
            <Typography color="textPrimary">
              Recovered Cases : {data.recovered}
            </Typography>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Modalopen;
