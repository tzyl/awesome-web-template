import * as React from "react";

import { ConnectedCounter } from "../containers/Counter";

export const App: React.SFC<{}> = () => {
  return (
    <div className="app">
      <ConnectedCounter />
    </div>
  );
};
