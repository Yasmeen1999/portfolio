import React from 'react';
import css from './Skills.module.css';

function Skills(){
    return (
       <div>
         <div className={css.skills} >
        
        <h1 className={css.h1}> <i> SOME OF MY SKILLS! </i></h1>
         
        <h2 className={css.h2}> <i> Development </i></h2>
         <ul>
            <li> <i>HTML5</i></li>
            <li><i> CSS3 </i></li>
            <li><i> JAVASCRIPT</i></li>
            <li> <i>REACT JS</i>  </li>
                 </ul>
     <h2 className={css.h2}> <i>Tools </i></h2>
        <ul>
            <li><i>Github </i></li>
            <li><i>Sublime </i></li>
            <li><i>Visual Studio Code</i></li>
         </ul>  
            
             

     <div className="css.lastbtn">   <a href="../index.html"> <button className={css.button}>BACK  </button> </a>
    </div>

 </div>
 </div>
        
    );
}
export default Skills;
