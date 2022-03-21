import {useState} from "react";
import Login from "./components/login";
import Intro from "./components/intro";

const HomeScreen = () => {

    const [firstName, setFirstName] = useState(null);

    const handleNameSubmit = (firstName) => {
        setFirstName(firstName);
    }

    return(
        <>
            <h1>Home Screen</h1>
            {firstName ? <Intro firstName={firstName}/> : <Login submitNameFn={handleNameSubmit} />}            
        </>
    )
}

export default HomeScreen;