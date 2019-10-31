import React, { useState } from "react";
import Main from "./Main";
import { Loader } from "../../components/UIKit";

const MainContainer = props => {
  // an exammple of a useful hook and loading state
  const [loading, setloading] = useState(false);

  return loading ? <Loader /> : <Main {...props} />;
};

export default MainContainer;
