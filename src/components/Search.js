import React, {Component} from 'react';

import '../styles/style.scss'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default class Search extends Component {
  render() {

    return (
      <div className='search-component'>
        <div className='title'>Fiend your movie</div>
        <div className='search'>
          <TextField className='search-input' id="outlined-basic" variant="outlined"/>
          <Button variant="contained" className='search-button' color="secondary">
            Search
          </Button>
        </div>

        <div className='search-by'>Search by
          <div className="toggle">
            <input type="radio" name="searchBy" value="weight" id="Title" checked="checked"/>
            <label htmlFor="Title">Title</label>
            <input type="radio" name="Gengre" value="dimensions" id="Gengre"/>
            <label htmlFor="Gengre">Gengre</label>
          </div>
        </div>
      </div>
    )
  }
};