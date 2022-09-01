import React from "react";
import App from "./App"
import {createRoot} from "react-dom/client";
import Props from "./propsDemo";
import StateDemo from "./components/StatesDemo";

const root = createRoot(document.getElementById("root"))

root.render(
  <>
<App/>
<Props/>
<StateDemo/>


</>
);



