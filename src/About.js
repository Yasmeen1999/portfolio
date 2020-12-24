import React, { Component } from "react";
import css from "./About.module.css";

class About extends Component {
  handleBack = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div className={css.about}>
        <h1 className={css.h1}>
          Front-end developer !
        </h1>

        <p className={css.p}>
          
            I have a Bachelor’s Degree in  Electronics and Communication; <br />
            but everything I know of and on the Web today is my passion
          
        </p>

        <h2 className={css.h2}>
          I love to cook :)
        </h2>

        <p className={css.p}>
          
            I'm a home chef. I just love to cook and eat the different type of
            cuisine <br /> and in my free time i used to draw mehendi and i like
            to do sketching.
          
        </p>

        <h2 className={css.h2}>
           Also i love to help others.
        </h2>

        <button onClick={this.handleBack} className={css.button}>
          BACK
        </button>
      </div>
    );
  }
}

export default About;
