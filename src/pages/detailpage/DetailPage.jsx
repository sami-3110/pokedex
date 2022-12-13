import React from 'react';
import DetailedView from '../../components/DetailedView';
import './detailpage.css';
import ArrowBack from "@material-ui/icons/ArrowBack";
import { useNavigate, useParams} from 'react-router-dom';
export default function DetailPage(props) {
  const navigate = useNavigate();
  const {name} = useParams();
 
  return (
    <div className='detailWrapper'>
        <h2>Detail Page</h2>
        <button onClick={()=>navigate(-1)}><ArrowBack /></button>
        <div className="detailDataBox"> 
        <DetailedView name={name} star = {false}/>
        </div>
       
    </div>
  )
}
