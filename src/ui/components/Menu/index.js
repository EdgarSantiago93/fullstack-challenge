import { Link } from "react-router-dom";
import './Menu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBookOpen,faChartBar,faGift} from "@fortawesome/free-solid-svg-icons";

function LeftCol(props)
{
    console.log(props.activeMenu);
return (
    <div className="left_col">
        <div className="left_menu">
            <ul>
                <li className={props.activeMenu==='about'?'link_li link_active':'link_li'}>
                    <Link to="/about">
                        <FontAwesomeIcon icon={faBookOpen} className="menu_icon" />
                        About
                    </Link>
                </li>
                <li className={props.activeMenu==='offers'?'link_li link_active':'link_li'}>
                    <Link to="/offers">
                        <FontAwesomeIcon icon={faGift} className="menu_icon" />
                        Offers
                    </Link>
                </li>
                <li className={props.activeMenu==='metrics'?'link_li link_active':'link_li'}>
                    <Link to="/metrics">
                        <FontAwesomeIcon icon={faChartBar} className="menu_icon" />
                        Metrics
                    </Link>
                </li>

            </ul>
        </div>
    </div>
);


}

export default LeftCol;