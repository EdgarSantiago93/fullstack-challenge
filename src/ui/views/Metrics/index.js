import { useEffect } from "react";
import LeftCol from "../../components/Menu";
import Breadcrumbs from "../../components/Breadcrumbs";
import axios from 'axios';
import { Line,Bar} from 'react-chartjs-2';

import {noLinesLine,noLinesBar,getBarChartData,getLineChartData,generalError} from "./helpers";


const Metrics=()=>{

    const [lineChartData,setLineChartData]= useState({
        labels:[],
        datasets:[],
        options:{}
    });
    const [barChartData,setBarChartData]= useState({
        labels:[],
        datasets:[],
        options:{}
    });

    useEffect(() => {
        axios
            .get('https://testapi.io/api/edgarsantiago93/reworth')
            .then(response => {
                if(response.status===200){
                    setLineChartData(getLineChartData(response.data))
                    setBarChartData(getBarChartData(response.data))
                }
                else{
                    generalError();
                }

            })
            .catch(error => {
                generalError();
            });


    }, []);

    return (
      <>
          <LeftCol activeMenu='metrics' />
          <div className="right_col">
              <Breadcrumbs>
                  <li className="breadcrumb-item active">Metrics</li>
              </Breadcrumbs>
              <div className="content_container">
                  <div className="section_title">
                      Metrics - Swiss Population
                  </div>
                  <div className="section_content">
                      <div className="row">
                          <div className="col-sm-12 col-md-6">
                              <Line data={lineChartData} options={noLinesLine} />
                          </div>
                          <div className="col-sm-12 col-md-6">
                              <Bar data={barChartData} options={noLinesBar} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
    );
}


export default Metrics;