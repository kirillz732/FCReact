import React, {Component} from 'react';

import '../styles/style.scss'

export default class Film extends Component {
  render() {
    let data = this.props.movieItem;
    console.log(data)
    return (
      <div className='film'>
        <div className="poster" style={{backgroundImage: `url(${data.poster_path})`}}></div>
        <div className='film-info'>
          <div className='title-id'>
            {data.title}
            <div className='score'>
              {data.vote_average}
            </div>
          </div>
          <div className='tagline'>{data.tagline}</div>
          <div className='date'>{data.release_date} </div>
          <div className='overview'>{data.overview} </div>
        </div>
      </div>
    )
  }
};