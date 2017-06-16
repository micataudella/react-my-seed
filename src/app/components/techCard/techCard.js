/* eslint react/no-danger: 0 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

import './techCard.scss';

export class TechCard extends Component {
  render() {
    return (
      <Card className="app-tech-card">
        <CardMedia className="image-container" overlay={<CardTitle className="tech-title" title={this.props.tech.title}/>}>
          <img className="tech-image" src={`../../../assets/images/logos/${this.props.tech.key}.png`} alt={this.props.tech.key}/>
        </CardMedia>
        <CardTitle
          subtitle={
            <div className="description">
              <p>{this.props.tech.text1}</p>
              <p>{this.props.tech.text2}</p>
            </div>}
          />
      </Card>
    );
  }
}

TechCard.propTypes = {
  tech: PropTypes.object
};
