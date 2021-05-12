import{BrowserRouter as Router,Link}from 'react-router-dom'
import {api} from '../api'
import React ,{useEffect,useState} from 'react'
const YaziListesi=(props)=>{
    //app basladiginda apiyi almak icin useEffect icinde axios ile apiden gelen veriyi aldik
  const[yaziListesi,setYaziListesi]=useState([]);
  //gelen veriyi bu bos array statesi icine yollicaz
  useEffect(()=>{
    api()
    .get("/posts")
.then((response)=>{setYaziListesi(response.data) });

},[])



    return( 
    <div className="ui relaxed divided list">{yaziListesi.map((yazi)=>{
        return(
           
        <div key={yazi.id} className="item">
        <i className="large github middle aligned icon"></i>
        <div className="content">
{/*           bu a yi like cevircez tikladigimizda yazi etayina gitmek icin
 */}          <Link to={`/posts/${yazi.id}`} className="header">{yazi.title}</Link>
          <div className="description">{yazi.created_at}</div>
        </div>
        </div>
        
        );
        
          })

}
</div>)
}

export default YaziListesi;