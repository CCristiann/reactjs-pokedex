import React from "react";
import { DotSpinner } from "@uiball/loaders";

function Loader() {
  return (
    <div className="flex items-center justify-center bg-black/80 w-[100vw] h-[100vh] fixed top-0 left-0">
      <DotSpinner size={40} speed={0.9} color="white" />
    </div>
  );
}

export default Loader;
