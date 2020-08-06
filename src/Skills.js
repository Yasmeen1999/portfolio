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
            {" "}
            <i> SOME OF MY SKILLS! </i>
          </h1>

          <h2 className={css.h2}>
            {" "}
            <i> Development </i>
          </h2>
          <ul>
            <li>
              {" "}
              <i>HTML5</i>
            </li>
            <li>
              <i> CSS3 </i>
            </li>
            <li>
              <i> JAVASCRIPT</i>
            </li>
            <li>
              {" "}
              <i>REACT JS</i>{" "}
            </li>
          </ul>
          <h2 className={css.h2}>
            {" "}
            <i>Tools </i>
          </h2>
          <ul>
            <i>
              <li>Github</li>
              <li>Sublime</li>
              <li>VS Code</li>
            </i>
          </ul>

          <div className='css.lastbtn'>
            {" "}
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
