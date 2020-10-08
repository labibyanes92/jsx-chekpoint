import React from 'react';
import logo from './logo.svg';
import './App.css';
import srcImage from "./imageInSrc.png"
import './style.css'
// import Video from './video1.mp4'


function App() {
  return (
    <div className="App">
     
     <div style={{border:"solid 1px black", maxWidth:'100vw'}}>

<h1 className='title red'>Your name here</h1>

{/* <br /> */}


 <img src={srcImage} alt ='srcImage' />

{/* <br /> */}


<img src="/imageInPublic.png" alt="imageInPublic" />

</div>

{/* <video width="320" height="240" controls>

<source src={Video} type="video/mp4" />

</video> */}












    </div>
  );
}

export default App;
