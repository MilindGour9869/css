import React , {useReducer}from 'react';

import  './style.css'

 

function App() {

  function reducer(){
    
  }

  const [ state , fun] = useReducer(reducer , { upr : "" , main :"" , op:""} )


return (
 <div className="div1">
   <div className='img'>
   <img src="https://forbitads.files.wordpress.com/2017/06/cropped-MDN-Creations-Group-Icon.png"></img>
   </div>


   <div className='div2'>
     
     <p className='a'> qasasax acc
     </p>


     </div>
   
 </div>
);
}

export default App;
