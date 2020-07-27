import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt, faBinoculars} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

function OfferTable(props){
    const exampleDescriptions=[
        {
            desc:'The first rule of Fight Club is: You do not talk about Fight Club.',
            vid:'https://www.youtube.com/embed/YJVGD6eTZ7g?start=6'
        },
        {
            desc:'Why so serious?',
            vid:'https://www.youtube.com/embed/0nvlkVjrrx8?start=33'
        },

        {
            desc:'Say hello to my little friend!',
            vid:'https://www.youtube.com/embed/AVQ8byG2mY8?start=10'
        },
        // 'Leave the gun. Take the cannoli.',
        // 'Carpe diem. Seize the day, boys.',

        {
            desc:'Antonio Magheretti!',
            vid:'https://www.youtube.com/embed/kRinCyay1kI'
        },
    ]

    function deleteThis(el){
        const parent =el.target.closest(".ot_tr")
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor:'#2e58ff',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.value) {
                parent.remove();
            }
        })
    }



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