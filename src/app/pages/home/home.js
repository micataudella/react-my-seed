import React, {Component} from 'react';

// import {getClientLanguage, setUserLanguage} from '../../actions/lang';
// import {env} from '../../constants/env';

import {Header} from '../../components/header/header';

import './home.scss';

export class HomeContainer extends Component {
  constructor() {
    super();

    this.state = {
      stories: [],
      texts: null
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="app-home">
        <Header title="Home" {...this.props}/>
        <main>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <p>Home</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
