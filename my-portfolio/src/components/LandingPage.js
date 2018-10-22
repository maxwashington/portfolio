import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landingpage-grid">
          <Cell col={12}>
            <img
              src="https://png2.kisspng.com/20180516/ycw/kisspng-face-ear-animation-facial-expression-5afca05feed321.8256553515265055679783.png"
              alt="avator male"
              className="avator-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | React | MongoDB | Express |
                Node.js
              </p>
              <div className="social-links">
                {/* Github */}
                <a
                  href="https://github.com/maxwashington"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-github" aria-hidden="true" />
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/max-washington-32141a33/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/maxwashington18"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-facebook" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
