import React from "react";
import SimpleLayout from "./SimpleLayout/SimpleLayout";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import './App.css'

library.add(faClock);

const App = () => {
  return (
    <SimpleLayout/>
  );
};

export default App