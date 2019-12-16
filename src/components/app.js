import React, {Component} from 'react';

import Header from './Header';
import '../styles/style.scss'
import Body from './Body';
import Footer from './Footer';

export default class App extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    fetch("https://reactjs-cdp.herokuapp.com/movies")
      .then(res =>  res.json())
      .then(
        (result) => {
          this.setState({items: result.data });
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
      <div>
        <Header itemsLength={this.state.items.length}/>
        <Body items={this.state.items}/>
        <Footer />
      </div>
    );
  }
};