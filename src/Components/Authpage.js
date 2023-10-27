import React from "react";

function Authpage(props) {
  const {  illusionbg } = props;
  return (
    <div>
      <div className="storyillusion my-3">

        <div className=" img" style={{ width: "400px" }}>
          <img className="illusionpic" src={illusionbg} alt="" />
          {/* <div className="castlepic">
            <img className="castle" src={castle} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Authpage;
