
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Posts from './components/scripts/Posts'


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Route exact path="/" component={Posts} />
      
      
    </Router>
  </Provider>
  );
}

export default App;
