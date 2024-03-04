import { useState } from "react";
import { ReactNode } from "react";

import Header from "./Header";
import Counter from "./Counter";
import TextToAlert from "./TextToAlert";

function App() {
  return (
    <>
      <Header>
        RUBRIK och <span>ngt mer?</span>
      </Header>
      <Counter />
      <TextToAlert />
    </>
  );
}
export default App;
