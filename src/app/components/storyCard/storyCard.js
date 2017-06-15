/* eslint react/no-danger: 0 */

import React, {Component} from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Link} from 'react-router-dom';
import renderHTML from 'react-render-html';

import {env} from '../../constants/env';
import {setCurrentStory} from '../../actions/stories';

import './storyCard.scss';

export class StoryCard extends Component {
  constructor() {
    super();

    this.state = {
      info: null,
      speaker: null,
      address: null
    };
  }

  componentDidMount() {
    const info = {
      description: this.props.texts[this.props.story.description] || this.props.story.description,
      title: this.props.texts[this.props.story.geofenceTitle] || this.props.story.geofenceTitle,
      name: this.props.story.name,
      shortName: this.props.story.short_name,
      profileIcon: this.props.story.profile_icon,
      id: this.props.story.id,
      storyFile: this.props.story.link,
      baseUrl: this.props.story.resources_base_url.replace(/\//g, '')
    };

    let speaker = {
      description: '',
      icon: ''
    };

    if (this.props.story.speakerDescription && this.props.story.speaker_icon) {
      speaker = {
        description: this.props.texts[this.props.story.speakerDescription] || this.props.story.speakerDescription,
        icon: this.props.story.speaker_icon
      };
    }

    let address = {
      city: '',
      street: '',
      icon: ''
    };

    if (this.props.story.address) {
      address = {
        city: this.props.story.address.city,
        street: this.props.story.address.street,
        icon: this.props.story.map_icon
      };
    }

    this.setState({
      info,
      speaker,
      address
    });
  }

  render() {
    const resUrl = env.baseUrl + this.props.story.resources_base_url;
    const _handleClick = () => setCurrentStory(this.state.info.baseUrl, this.state.info.storyFile);

    return (
      this.state.info &&
        <div className="col-md-4">
          <div className="story-card">
            <Card>
              <Link
                to={`/story/${this.state.info.baseUrl}`}
                onClick={_handleClick}
                >
                <CardTitle title={this.state.info.name}/>
                {this.state.address.icon && <CardMedia className="story-media" overlay={<CardTitle title={this.state.info.name}/>}>
                  <img src={`${resUrl}${this.state.address.icon}`}/>
                </CardMedia>}
              </Link>
              <CardTitle subtitle={this.state.info.title}/>
              <CardText>
                <p className="story-description">{renderHTML(this.state.info.description)}</p>
              </CardText>
              {this.state.speaker.description &&
                <Link
                  to={{
                    pathname: `/story/${this.state.info.baseUrl}`,
                    state: {
                      base: this.state.info.baseUrl,
                      script: this.state.info.storyFile
                    }
                  }}
                  >
                  <div className="speaker">
                    <img className="speaker-icon" src={`${resUrl}${this.state.speaker.icon}`}/>
                    <p className="speaker-description">
                      {renderHTML(this.state.speaker.description)}
                    </p>
                  </div>
                </Link>}
            </Card>
          </div>
        </div>
    );
  }
}

StoryCard.propTypes = {
  story: React.PropTypes.object,
  texts: React.PropTypes.object
};
