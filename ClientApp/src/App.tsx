import { Provider } from "react-redux";
import { store } from "./app/store";
import SignIn from "./auth/SignIn";
import * as React from 'react';

const App = () => {
    
    return (
      <>
        <Provider store={store}>
            <SignIn/>
        </Provider>
      </>
    );
  }
  
  export default App;