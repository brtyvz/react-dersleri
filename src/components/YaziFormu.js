import {api} from '../api'
import React,{useEffect, useState} from 'react'
import {Link,withRouter}from'react-router-dom'
const  YaziFormu=(props)=> {
  const [hata, setHata] = useState("");
    const [yazi,setYazi]=useState({title: "",content:""})
    const onInputChange=(event)=>setYazi({...yazi,[event.target.name]:event.target.value})
  const onFormSubmit=(event)=>{
      event.preventDefault();
      /* linke yukaridaki state icindeki title ve content degerinin de yollicaz post icinde */
    /*  ekleme ve guncelleme islemmlerini ayirdik */
      if(props.yazi.title){
        api()
        .put(`/posts/${props.match.params.id}`, yazi)
        .then((response) => {
          console.log(response);
          props.history.push(`/posts/${props.match.params.id}`);
        })
.catch((error) => {
  setHata("Başlık ve yazı içeriği alanları zorunludur.");
});
      }
      else{api()
        .post("/posts", yazi)
        .then((response) => {
          props.history.push("/");
        })
        .catch((error) => {
          setHata("Başlık ve yazı içeriği alanları zorunludur.");
        });
    }
  };
  /* yazidan gelen deger degisince bu useEffect calisacak */
  useEffect(() => {
    if (props.yazi.title && props.yazi.content) setYazi(props.yazi);
  }, [props.yazi]);


    return (
        
        <div className="ui form">
        <div className="field">
          <label>Yazı Başlığı</label>
         <input value={yazi.title}type="text"name="title"onChange={onInputChange}></input>
          
    </div>
    <div className="field">
          <label>Yazı İçeriği</label>
          <textarea value={yazi.content}type="text"rows="3"name="content"onChange={onInputChange}></textarea>
        </div>
        <button onClick={onFormSubmit} className="ui primary button">
          Gönder
        </button>
        <button className="ui button">İptal Et</button>
        <Link to="/">anasayfaya don</Link>
</div>
       
    )
}
export default withRouter(YaziFormu) ;