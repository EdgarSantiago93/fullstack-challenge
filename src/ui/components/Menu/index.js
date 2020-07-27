import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

import './Menu.css';

const LeftCol=()=>
{

return (
    <div className="left_col">
        <div className="left_menu">
            <ul>
                <li className="link_li"><Link to="/offers">Offers</Link></li>
                <li className="link_li"><Link to="/metrics">Metrics</Link></li>
                <li className="link_li"><Link to="/about">About</Link></li>
            </ul>
        </div>
    </div>
);


}

export default LeftCol;