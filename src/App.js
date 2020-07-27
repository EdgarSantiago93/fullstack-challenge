import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    Redirect
} from "react-router-dom";

import Offers from "./ui/views/Offers";
import About from "./ui/views/About";
import Metrics from "./ui/views/Metrics";


export default function App()  {

    return (
        <Router>
                <Switch>

                    <Redirect exact from="/" to="about" />

                    <Route exact path="/about" component={About} />
                    <Route exact path="/metrics" component={Metrics} />
                    <Route exact path="/offers" component={Offers} />
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
        </Router>
    );
}


function NoMatch() {
    let location = useLocation();
    const componentStyle={
        width:'100%',
        display:'flex',
        justifyContent:'center',
    alignItems:'center',
    }
    return (
        <div style={componentStyle}>
            <h3>
                404 <code>{location.pathname}</code>
            </h3>
        </div>
    );
}
