import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AppBar, IconButton} from 'material-ui';
import {ActionHome} from 'material-ui/svg-icons';

import './header.scss';

export class Header extends Component {
  render() {
    const handleLeftTouchTap = () => {
      this.props.history.push('/home');
    };

    const handleRightTouchTap = () => {
      this.props.history.push('/about');
    };

    return (
      <header className="app-header">
        <AppBar
          style={{backgroundColor: 'inherit'}}
          title={this.props.title}
          onLeftIconButtonTouchTap={handleLeftTouchTap}
          onRightIconButtonTouchTap={handleRightTouchTap}
          iconElementLeft={
            <IconButton className="home-button">
              <ActionHome/>
            </IconButton>}
          iconElementRight={
            <figure className="about-button">
              <img className="logo" src="../../../assets/images/dude.jpg"/>
            </figure>}
          />
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
  history: PropTypes.object.isRequired
};
