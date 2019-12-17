import React, {Component} from 'react';

import '../styles/style.scss'
import ErrorBoundary from './ErrorBoundary'
import Movie from "./Movie";
import {BrowserRouter, NavLink} from "react-router-dom";

export default class Body extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='container'>

          <ErrorBoundary>
            <For each="item" in={this.props.items}>
              <NavLink to={`/film/${item.id}`} >
                <Movie key={item.id} movieItem={item}/>
              </NavLink>
            </For>
          </ErrorBoundary>
        </div>
      </BrowserRouter>
    )
  }
};