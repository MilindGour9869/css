import React , {useReducer}from 'react';

import  './style.css'

 

function App() {

  function reducer(){
    
  }

  const [ state , fun] = useReducer(reducer , { upr : "" , main :"" , op:""} )


return (
<>



<main>
  <section>
    <div className='container'>
      <div className='box blue'>
        
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
