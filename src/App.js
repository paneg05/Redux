import { Routs } from "./routs/Routs";
import {BrowserRouter} from 'react-router-dom'

import { Provider } from "react-redux";
import store from "./store";

import Header from "./Components/Header/Header";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        
        <Routs/>
     </BrowserRouter>
    </Provider>
    
  );
}

export default App;
