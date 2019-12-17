import React, {Component} from 'react';

import '../styles/style.scss'

export default class Film extends Component {
  componentDidMount() {
    console.log(this.props.movieItem);
    fetch(`https://reactjs-cdp.herokuapp.com/movies/${this.props.movieItem}`)
      .then(res =>  res.json())
      .then(
        (result) => {
          this.setState({item: result.data });
          console.log(result.data)
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }
  render() {

    return (
      <div className='film'>
        <div className="poster" style={{backgroundImage: `url(${this.state.poster_path})`}}></div>
        <div className='film-info'>
          <div className='title-id'>
            {data.title}
            <div className='score'>
              {this.state.vote_average}
            </div>
          </div>
          <div className='tagline'>{this.state.tagline}</div>
          <div className='date'>{this.state.release_date} </div>
          <div className='overview'>{this.state.overview} </div>
        </div>
      </div>
    )
  }
};