import React from "react";
import Button from '@material-ui/core/Button';

const paginate = ({
  prevclick,
  nextclick,
  curpage,
  totalposts,
  postperpage
}) => {
  const noofposts = Math.ceil(totalposts / postperpage);
  return (
    <div className="mt-3 w-50 mx-auto">
      <Button variant="contained" color="primary"
        className="float-left "
        onClick={prevclick}
        disabled={curpage === 1}
      >
        Prev
      </Button>

      <Button variant="contained" color="primary"
        className="float-right"
        onClick={nextclick}
        disabled={curpage === noofposts}
      >
        {" "}
        Next
      </Button>
    </div>
  );
};

export default paginate;
