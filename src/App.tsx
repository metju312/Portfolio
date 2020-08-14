import React from "react";
import SimpleLayout from "./SimpleLayout/SimpleLayout";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee);

const App = () => {
  return (
    <SimpleLayout/>
  );
};

export default App