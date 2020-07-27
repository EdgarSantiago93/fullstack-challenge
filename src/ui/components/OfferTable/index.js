import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt, faBinoculars} from "@fortawesome/free-solid-svg-icons";
import {exampleDescriptions,deleteThis } from "./helpers";

function OfferTable(props){

    function offerDetail(dPos){
        const modal = document.getElementById('infoModalBox');
        const modalTitle = document.getElementById('offerTitle');
        const descElement = exampleDescriptions[dPos];
        modalTitle.innerHTML = descElement.desc;
        props.setVideoCallBack(descElement.vid);
        console.log(descElement.vid);
        modal.classList.add('info_modal_box_shown');
    }



    return(
        <>
            <table className="offerTable" id='offerTable'>
                <thead>
                <th style={{width:"10%"}} />
                <th style={{width:"35%"}}>Name</th>
                <th style={{width:"40%"}}>Description</th>
                <th style={{width:"15%"}}>Actions</th>
                </thead>

                <tbody>

                {props.trItems.map((item,index) => {
                    const img ='https://placedog.net/200?random&v='+item.id;
                    return (
                        <tr key={item.id} className="ot_tr">
                            <td>
                                <div className="photo_container" style={{backgroundImage: "url(" + img + ")"}} />
                            </td>

                            <td>{item.name}</td>

                            <td>
                                {exampleDescriptions[index].desc}
                            </td>
                            <td>
                                <button onClick={() => offerDetail(index)} className="option_button">
                                    <FontAwesomeIcon icon={faBinoculars} />
                                </button>

                                <button onClick={deleteThis} data-pos={index} className="option_button">
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </td>

                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>


    );
}

export default OfferTable;