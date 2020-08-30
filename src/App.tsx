import React from "react";
import SimpleLayout from "./SimpleLayout/SimpleLayout";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './App.css'

library.add(fas, fab);

const App = () => {
  return (
    <SimpleLayout/>
  );
};

export default App