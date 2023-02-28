import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./navigation/MainNavigation";

import ContextStore from "./context/ContextStore";

function App() {
  return (
    <ContextStore>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </ContextStore>
  );
}

export default App;
