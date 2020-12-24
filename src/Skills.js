import React, { Component } from "react";
import css from "./Skills.module.css";

class Skills extends Component {
  handleBack = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className={css.skills}>
          <h1 className={css.h1}>
           
            SOME OF MY SKILLS! 
          </h1>

          <h2 className={css.h2}>
           
             Development 
          </h2>
          <ul>
            <li>
              HTML5
            </li>
            <li>
               CSS3 
            </li>
            <li>
               JAVASCRIPT
            </li>
            <li>
              REACT JS
            </li>
            <li>
              NEXT JS
            </li>
          </ul>
          <h2 className={css.h2}>
            
            Tools 
          </h2>
          <ul>
              <li>Git</li>
              <li>Github</li>
             
              <li>VS Code</li>
              <li>Sublime</li>
              <li>JIRA</li>
             
             
          </ul>

          <div className='css.lastbtn'>
        
            <button onClick={this.handleBack} className={css.button}>
              BACK{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
