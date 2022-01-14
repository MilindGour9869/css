import React , {useReducer}from 'react';

import  './style.css'

 

function App() {

  function reducer(){
    
  }

  const [ state , fun] = useReducer(reducer , { upr : "" , main :"" , op:""} )


return (
<>

<div className="div1">
   
   <img src="https://forbitads.files.wordpress.com/2017/06/cropped-MDN-Creations-Group-Icon.png"></img>
  


  
     
     <p className='a'> qasasax acc
     </p>
</div>


<div className='container'>
  <div className='box'>
  A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file. To use the extension, open the command palette (F1 or cmd/ctrl+shift+p, type "lorem ipsum" and select to insert either a line or paragraph.

  </div>
  <div className='box'>
  A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file. To use the extension, open the command palette (F1 or cmd/ctrl+shift+p, type "lorem ipsum" and select to insert either a line or paragraph.

  </div>
  <div className='box'>
  A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file. To use the extension, open the command palette (F1 or cmd/ctrl+shift+p, type "lorem ipsum" and select to insert either a line or paragraph.
  

  </div>

</div>
</>
);
}

export default App;
