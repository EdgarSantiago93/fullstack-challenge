import { useEffect } from "react";
import LeftCol from "../../components/Menu";
import Breadcrumbs from "../../components/Breadcrumbs";
import axios from 'axios';
import Swal from 'sweetalert2'

import Loader from '../../../assets/img/loader.gif';
import OfferTable from "../../components/OfferTable";
import OfferModal from "../../components/OfferModal";



const Metrics=()=>{

    const [videoUrl, setVideoUrl] = useState('');

    const [inStoreObj, setInitial] = useState({
        data: [],
        loading:true,
        vidUrl:'',
    });

    useEffect(() => {
        axios
            .get('https://santiagoguerrero.mx/awesome_endpoint',{headers: {
                    'Access-Control-Allow-Origin': '*',
                },})
            .then(response => {
                if(response.status===200){


                    console.log(response)
                    const responseActualData = response.data.data;
                    const dataToArray = [];
                    // responseActualData.map(item => {
                    //     return dataToArray.push(item);
                    // });
                    // setTimeout(function(){
                    //     setInitial({
                    //         ...inStoreObj,
                    //         data: dataToArray,
                    //         loading: false
                    //     });
                    // },1500)

                }
                else{
                    Swal.fire({
                        title: 'Error',
                        text: 'Please try again later',
                        icon: 'error',
                        confirmButtonColor:'#2e58ff',
                        confirmButtonText: 'Ok'
                    })
                }

            })
            .catch(error => {
                Swal.fire({
                    title: 'Error',
                    text: 'Please try again later',
                    icon: 'error',
                    confirmButtonColor:'#2e58ff',
                    confirmButtonText: 'Ok'
                })
            });


    }, []);

    function updateVideoUrl(vu){
        console.log("se pone el coso")
        setVideoUrl(vu);
    }


    return (
      <>
          <LeftCol />

          <div className="right_col">
              <Breadcrumbs>
                  <li className="breadcrumb-item active">Offers</li>
              </Breadcrumbs>

              <div className="content_container">
                  <div className="section_title">
                      Offers
                  </div>

                  <div className="section_content">


                      <div className="">Total offers {inStoreObj.data.length}</div>

                      {inStoreObj.loading?
                          <div className="loader_container">
                          <img src={Loader} alt="" />
                          </div>
                          :
                          <OfferTable trItems={inStoreObj.data} setVideoCallBack={updateVideoUrl} />
                          }
                  </div>
              </div>
          </div>
          <OfferModal vidUrl={videoUrl} />



      </>

    );


}


export default Metrics;