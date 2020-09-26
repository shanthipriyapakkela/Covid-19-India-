import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import HeaderBar from "../HeaderBar/HeaderBar";
import DispDistrictData from "../DispDistrictData/DispDistrictdata";
import Pagination from "../Paginate/Paginate";
import { getdata } from "../Store/actions";

const MainPage = () => {
  const dispatch = useDispatch();
  const covidData = useSelector((state) => state.covidfData);
  const [selectedState, setselectedState] = useState("");
  const [sortValue, setsortValue] = useState("");
  const [orderBy, setorderBy] = useState("");
  const [currentpage, setcurrentpage] = useState(1);
  const [startpos, setstartpos] = useState(0);
  const [endpos, setendpos] = useState(0);
  const perpage = 6;
  var SortedArray = [];

  useEffect(() => {
    dispatch(getdata());
    setendpos(currentpage * perpage);
    setstartpos(endpos - perpage);
  }, [dispatch, startpos, endpos, currentpage]);

  const sortTypes = ["active", "confirmed", "recovered"];
  const sortOrders = ["Asc", "Desc"];

  const statesData = Object.keys(covidData);

  if (selectedState !== "") {
    var transformedData = [];
    const districtsData = covidData[selectedState].districtData;
    var DistrictNames = Object.keys(districtsData);

    Object.keys(districtsData).map((key) => {
      transformedData = [
        ...transformedData,
        covidData[selectedState].districtData[key],
      ];
    });
    SortedArray = transformedData;
    if (orderBy !== "" && sortValue !== "") {
      if (orderBy === "Desc") {
        SortedArray = transformedData.sort((a, b) => {
          if (a[sortValue] > b[sortValue]) return -1;
          if (a[sortValue] < b[sortValue]) return 1;
          else return 0;
        });
      } else {
        SortedArray = transformedData.sort((a, b) => {
          if (a[sortValue] > b[sortValue]) return 1;
          if (a[sortValue] < b[sortValue]) return -1;
          else return 0;
        });
      }
    }
    var currentData = SortedArray.slice(startpos, endpos);
  }

  const useStyles = makeStyles({
    root: {
      background: "linear-gradient(45deg,  #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      margin: "10px 0",
      height: 75,
      padding: "0 30px",
    },
  });
  const classes = useStyles();

  const prevclickHandler = () => {
    setcurrentpage(currentpage - 1);
  };

  const nextclickhandler = () => {
    setcurrentpage(currentpage + 1);
  };

  return (
    <React.Fragment>
      <div>
        <HeaderBar />
      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4} style={{ padding: "auto 50px" }}>
            <Autocomplete
              id="states"
              options={statesData}
              style={{ width: 350 }}
              onChange={(event, newValue: string | null) => {
                setselectedState(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="States" variant="outlined" />
              )}
            />
          </Grid>

          <Grid item xs={4} style={{ padding: "auto 50px" }}>
            <Autocomplete
              id="sorttype"
              options={sortTypes}
              style={{ width: 350 }}
              onChange={(event, newValue: string | null) => {
                setsortValue(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="SortBy" variant="outlined" />
              )}
            />
          </Grid>
          <Grid item xs={4} style={{ padding: "auto 50px" }}>
            <Autocomplete
              id="sortorder"
              options={sortOrders}
              style={{ width: 350 }}
              onChange={(event, newValue: string | null) => {
                setorderBy(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="OrderBy" variant="outlined" />
              )}
            />
          </Grid>
        </Grid>
      </div>
      {/* // && sortValue !== "" && orderBy !== "" */}
      {selectedState !== "" ? (
        <DispDistrictData data={currentData} districtName={DistrictNames} />
      ) : null}
      {SortedArray.length > 6 ? (
        <div className="row">
          <Pagination
            prevclick={prevclickHandler}
            nextclick={nextclickhandler}
            curpage={currentpage}
            totalposts={SortedArray.length}
            postperpage={perpage}
          />
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default MainPage;
