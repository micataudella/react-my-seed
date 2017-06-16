import React, {Component} from 'react';

import {getTechs} from '../../actions/techs';
// import {env} from '../../constants/env';

import {Header} from '../../components/header/header';
import {TechCard} from '../../components/techCard/techCard';

import './home.scss';

export class HomeContainer extends Component {
  constructor() {
    super();

    this.state = {
      techs: []
    };
  }

  componentDidMount() {
    getTechs().then(res => {
      this.setState({techs: res.data});
    });
  }

  render() {
    return (
      <div className="app-home">
        <Header title="Home" {...this.props}/>
        <main>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-ms-12 col-xs-12">
                <h3 className="home-title">Made with a lot of cool stuff</h3>
              </div>
            </div>
            <div className="row">
              <div className="tech-container">
                {this.state.techs.map((tech, i) => {
                  return (
                    <div key={i} className="col-lg-3 col-md-3 col-sm-4 col-ms-6 col-xs-12">
                      <TechCard tech={tech}/>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
