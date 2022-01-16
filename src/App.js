import React , {useReducer}from 'react';

import  './style.css'

 

function App() {

  function reducer(){
    
  }

  const [ state , fun] = useReducer(reducer , { upr : "" , main :"" , op:""} )


return (
<>

<header>
  <nav>
    <div className='nav'>
      <img src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-vector-3.png" alt='flipkart logo'>

      </img>

      <div className='hover'>
        <a>Home</a>
      </div>
      <div  className='hover'>
       <a>About</a>
      </div>
      <div  className='hover'>
       <a>Contact</a>
      </div>

      <input className="input">

      </input>

      <button>
        <div className='search hover'>
           Search 
        </div>
      </button>
    </div>

  </nav>
</header>

<main>

  <section>
  
  </section > 
  

  <section className='grid'>
  <p className='span'>Join the Cricket Fun</p>

  <div >1</div>
  <div >1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>

  <p className='span'>Furniture Bestsellers</p>

  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>

  <p className='span'>Furniture Bestsellers</p>

<div>1</div>
<div>1</div>
<div>1</div>
<div>1</div>
<div>1</div>

  </section>

</main>

<footer className='footer'>

  CopyRight@Spidy

</footer>
</>
);
}

export default App;
