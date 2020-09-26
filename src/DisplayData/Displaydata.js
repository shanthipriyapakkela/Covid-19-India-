import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Modalopen from "../Modal/Modalopen";

const useStyles = makeStyles({
  root: {
    minWidth: 275
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 24,
    color: "#fff"
  },
  pos: {
    marginBottom: 12
  },
  div: {
    display: "border-box",
    borderRadius: 3,
    backgroundColor: "#3f51b5"
  }
});

const Displaydata = ({ DistName, data }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <div className="col-md-4">
      <Card className={classes.root} variant="outlined" onClick={handleOpen}>
        <CardContent>
          <div className={classes.div}>
            <Typography className={classes.title} gutterBottom>
              {DistName}
            </Typography>
          </div>
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
        </CardContent>
      </Card>
      {/* </Grid> */}
      <Modalopen
        open={open}
        close={handleClose}
        data={data}
        District={DistName}
      />
    </div>
  );
};

export default Displaydata;
