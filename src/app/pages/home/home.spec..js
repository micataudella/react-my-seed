/* eslint "react/no-find-dom-node": "off" */

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import {StoriesContainer} from './stories';

describe('Stories', () => {
  it('should be a stories container', () => {
    const stories = TestUtils.renderIntoDocument(<StoriesContainer/>);
    const storiesNode = ReactDOM.findDOMNode(stories);
    expect(storiesNode.classList).toContain('container');
  });
});
