import React , {useReducer}from 'react';

import  './style.css'

 

function App() {

  function reducer(){
    
  }

  const [ state , fun] = useReducer(reducer , { upr : "" , main :"" , op:""} )


return (
<>



<main>
  <section >
    <div className='container'>
    <div className='box img1'>
      <img src='https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538__340.jpg'></img>
      <img src='https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg'>

      </img>

      <img src='https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__340.jpg'>


      </img>
      


      

    </div>

   
       




       {/* <div className='green'>
        
      </div> */}
      {/*
      <div className='box red'>
        box3
      </div>
      <div className='box yellow'>
        box4
      </div> */}

      
      
    </div>
  </section>
</main>
</>
);
}

export default App;
