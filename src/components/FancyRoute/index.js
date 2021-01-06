import React from "react";
import { Route } from "react-router-dom";
import nprogress from "nprogress";

const FancyRoute = (props) => {
  React.useEffect(() => {
    setTimeout(() => {
      console.log('here');
      nprogress.done();
    }, 1000 * 3);
  });

  nprogress.start();
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...props} />;
};

export default FancyRoute;
