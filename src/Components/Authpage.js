import React from "react";

function Authpage(props) {
  const {  bg } = props;
  return (
      <div className="storyillusion my-3 flex justify-center  items-center">

        <div className="w-3/5 img">
          <img className="illusionpic" src={bg} alt="" />
        </div>
      </div>
  );
}

export default Authpage;
