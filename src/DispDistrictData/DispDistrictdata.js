import React from "react";

import DisplayData from "../DisplayData/Displaydata";

const DispDistrictdata = ({ data, districtName }) => {
  const list = data.map((key, i) => {
    return <DisplayData DistName={districtName[i]} data={key} />;
  });

  // const list = Object.keys(districtsData).map((key) => {
  //   return (
  //     <DisplayData DistName={key} data={data[selValue].districtData[key]} />
  //   );
  // });

  return <div className="row mx-md-n5 mb-3">{list}</div>;
};

export default DispDistrictdata;
