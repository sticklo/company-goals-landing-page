import { BrowserRouter as Router, Switch, Route } from "react-router-dom";//The Router, Switch, and Route will help us move between our created component and the main App.js.
import Landing from "./components/Landing"; //This is to import the component created in the Landing.js file.
import './App.css'; //Load a set of predefined CSS that will define how HTML elements in the landing page behave.
 
function App() {   //main app
    return(
      <div>
        <Router>
          <Switch>
            <Route path="/">
                <Landing />
            </Route>
          </Switch>
        </Router>
      </div>
    )

}
export default App;