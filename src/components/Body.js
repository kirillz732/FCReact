import React, { Component } from 'react';

import '../styles/style.scss'
import ErrorBoundary from './ErrorBoundary'
import Movie from "./Movie";

export default class Body extends Component {

  render() {
    return (
      <div className='container'>

          <ErrorBoundary>
            <For each="item" in={this.props.items}>
              <Movie key={item.id} movieItem={item}/>
            </For>
          </ErrorBoundary>
      </div>
    )
  }
};