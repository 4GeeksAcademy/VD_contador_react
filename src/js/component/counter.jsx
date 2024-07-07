import {elemento_contador} from "prop-types";
import React from "react";

function Counter({elemento_contador}) {
return(
    <div className="card flex-grow-1 bg-dark text-white text-center" style={{width: "rem"}}>
    <div className="card-body">
    <h1 className="card-title fs-1">{elemento_contador}</h1>
  </div>
</div>
);
}
export default Counter;
