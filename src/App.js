import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    Redirect
} from "react-router-dom";

// import DirectoryList from "ui/components/DirectoryList";
import LoginView from "./ui/views/Login";
import Offers from "./ui/views/Offers";
import About from "./ui/views/About";
import Metrics from "./ui/views/Metrics";


export default function App()  {

    return (
        <Router>
                <Switch>


                    {/*<Route path="/">*/}
                    {/*    <RedirectToOffers />*/}
                    {/*</Route>*/}


                    <Route path="/login">
                        <LoginView />
                    </Route>

                    <Route path="/offers">
                        <Offers />
                    </Route>
                    <Route path="/metrics">
                        <Metrics />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
        </Router>
    );
}


function RedirectToOffers(){
    let location = useLocation();

    return (
        <Redirect
        to={{
            pathname: "/offers",
            state: { from: location }
        }}
    />)
}

function NoMatch() {
    let location = useLocation();
    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}
