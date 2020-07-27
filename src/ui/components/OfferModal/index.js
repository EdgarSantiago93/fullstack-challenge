
import './OfferModal.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";


const OfferModal =({vidUrl})=>
{

    // const classes = isShown?['info_modal_box info_modal_box_shown']:['info_modal_box'];

    function closeModal(){
        const mod = document.getElementById('infoModalBox');
        document.getElementById('videoFrame').src ='';
        mod.classList.remove('info_modal_box_shown');
    }

    return(
        <div className="info_modal_box" id="infoModalBox">
            <div className="close_modal">
                <button onClick={closeModal}>
                    <FontAwesomeIcon icon={faTimesCircle}  />
                </button>
            </div>

            <div className="info_modal">
                <div className="offer_title" id='offerTitle' />

                <iframe
                    id='videoFrame'
                    // title='videoFrame' width="560" height="315" src='https://www.youtube.com/embed/0nvlkVjrrx8?start=33'
                    title='videoFrame' width="560" height="315" src={vidUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
            </div>
        </div>




    );
}
export default OfferModal;