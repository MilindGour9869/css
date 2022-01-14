import React , {useReducer}from 'react';

import  './style.css'

 

function App() {

  function reducer(){
    
  }

  const [ state , fun] = useReducer(reducer , { upr : "" , main :"" , op:""} )


return (
<>

<header>
  <ul>
    <rd>home </rd>
    <rd> about </rd>
    <rd> search </rd>
  </ul>
</header>

<main>
  <section>
    <div className='container'>
      <div className='box1'>
        box1
      </div>
      <div className='box2'>
        box2
      </div>
      <div className='box3'>
        box3
      </div>
    </div>
  </section>
</main>
</>
);
}

export default App;
