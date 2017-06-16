import React, {Component} from 'react';

import {Header} from '../../components/header/header';

import './about.scss';

export class AboutContainer extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="app-about">
        <Header title="About" {...this.props}/>
        <main>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h3 className="about-title">My Github</h3>
                <p className="about-description">
                  <a href="https://github.com/micataudella">https://github.com/micataudella</a>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
