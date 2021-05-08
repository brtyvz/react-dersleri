
import{BrowserRouter as Router,Route}from 'react-router-dom'
import React from'react'
import  YaziListesi from'./components/YaziListesi'
import  YaziDetayi from'./components/YaziDetayi'


function App() {
  

  return (
   
   <Router>
   <div className="main_wrapper">
    
<header></header>
<div className="ui raised very padded text container segment">

{/* buraya kadar olan kisim uygulamanin her yerinde gozukecek fakat alltaki  yaziListesi degisecegi icin onu route icine almamiz gerek */}
<Route path="/"exact component={YaziListesi}/>
{/* tiklaninca yazi detayona */}
<Route path="/posts/:id" component={YaziDetayi}/>
</div>
</div>
</Router>
  );
}

export default App;
