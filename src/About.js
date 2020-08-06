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
          <i>Front-end developer !</i>
        </h1>

        <p className={css.p}>
          <i>
            I am currently a final year student at Ghousia College Of
            Engineering <br />
            Electronics and Communication field and pursuing my B.E from here.
          </i>
        </p>

        <h2 className={css.h2}>
          <i>I love to cook :)</i>
        </h2>

        <p className={css.p}>
          <i>
            I'm a home chef. I just love to cook and eat the different type of
            cuisine <br /> and in my free time i used to draw mehendi and i like
            to do sketching.
          </i>
        </p>

        <h2 className={css.h2}>
          <i> Also i love to help others. </i>
        </h2>

        <button onClick={this.handleBack} className={css.button}>
          BACK{" "}
        </button>
      </div>
    );
  }
}

export default About;
