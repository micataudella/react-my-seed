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
                <p>About</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
