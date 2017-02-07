'use strict';

import React from 'react';
import AlbumElements, {fakeAlbums} from './albums.js';

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {foo: 'bar', albums: fakeAlbums};
  }

  render () {
    return (
      <div className="col-xs-10">
        <h3>Albums</h3>
        <div className="row">
          <AlbumElements albums={this.state.albums} />
        </div>
      </div>
    );
  }

}
