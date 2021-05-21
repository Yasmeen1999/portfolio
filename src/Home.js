import React from "react";
import css from "./Home.module.css";
import { Link, Route } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import resume from "../src/yasmeen.pdf";

function Home() {
  return (
    <div>
      <div className={css.container}>
        <div className={css.sidebar}>
          <nav>
            <ul>
              <li>
                <Link to='/about'>
                  About
                </Link>
              </li>
              <li>
                <Link to='/skills'>
                 Skills
                </Link>
              </li>
              <li>
                <Link
                  onClick={(event) => {
                    event.preventDefault();
                    window.open(resume);
                  }}>
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={css.content}>
          <div className={css.hero}>
            <h1>
           
              Hi! My name is yasmeen 
            </h1>
            <img src='image.jpg' alt='profileimg' />
            <div className={css.herocontent}>
              <h2 className='css.h2'>
                A little about me 
              </h2>
              <p className='css.p'>
                
                  I am a Frontend Developer. My passion drives me to the field
                  of web development technology. Also i love to share my
                  knowledge with others.
              
              </p>
            </div>
          </div>
        </div>
        <div className={css.socialmedia}>
          <li>
            <a
              href='https://twitter.com/yasmeen__1999'
              style={{ color: "#55acee" }}>
              <i class='fab fa-twitter-square'></i>
            </a>
          </li>
          <li>
            <a href='https://github.com/yasmeen1999' style={{ color: "black" }}>
              <i class='fa fa-github'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/yasmeen-a-558abb185'
              style={{ color: "#0e76a8" }}>
              <i class='fab fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a
              href='mailto:yasmeenaleemkhan786@gmail.com'
              style={{ color: "#D44638" }}>
              <i class='fa fa-envelope'></i>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/skills' component={Skills} />
    </switch>
  );
}
