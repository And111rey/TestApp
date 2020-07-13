import React from 'react';
import { Provider } from "react-redux"
import store from "./src/store/index"

import { View, Text, StyleSheet} from 'react-native';


import AppNavigation  from "./src/navigation/AppNavigation"


const App = () => {
  return (
    <Provider store={store}>
      < AppNavigation />
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
