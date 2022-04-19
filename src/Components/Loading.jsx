import React from "react";
import {Rings} from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      {/* <Loader type="Puff" color="#00BFFF" height={550} width={80} /> */}
      <Rings color="#00BFFF" height={500} width={100} />
    </div>
  );
}
