import {Switch, Route, BrowserRouter as Router, Link} from "react-router-dom";
import {useState} from "react";
import Input from "./components/input";
import Intro from "./components/intro";
import Apple from "./components/apple";
import Orange from "./components/orange";

const HomeScreen = () => {

    const [firstName, setFirstName] = useState(null);

    const handleNameSubmit = (firstName) => {
        setFirstName(firstName);
    }

    return(
        <>
            <h1>Home Screen</h1>
            {firstName ? <Intro firstName={firstName}/> : <Input submitNameFn={handleNameSubmit} />}     
            <br/>
            
            <Router>
                <Link to="/apple">Apples</Link> | <Link to="/orange">Oranges</Link>

                <Switch>
                    <Route path="/apple">
                        <Apple />
                    </Route>    
                    <Route path="/orange">
                        <Orange />
                    </Route>
                </Switch>       
            </Router>
            
        </>
    )
}

export default HomeScreen;