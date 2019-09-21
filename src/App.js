import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component  {
  constructor(props) {
    super(props);
     this.state = {
    item:{},
    items:[
    {
      author: 'Ghandi',
      text: '“Live as if you were to die tomorrow. Learn as if you were to live forever.”'
    }, {
      author: 'Steve Jobs',
      text: '“You can’t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future.”'
    }
  ]
     }

  }
  componentDidMount(){
    var item = this.state.items[Math.floor(Math.random()*this.state.items.length)];
    this.setState({ item:item })

  }
   activateLasers() {
   var item = this.state.items[Math.floor(Math.random()*this.state.items.length)];
   this.setState({ item:item })
 }

    render() {

          return (
                  <div id="quote-box">

              <div id="text">{this.state.item.text}</div>
              <div id="author">{this.state.item.author}</div>
              <button onClick={this.activateLasers.bind(this)} id="new-quote">new quote</button>
              <a id="tweet-quote" href="https://twitter.com/intent/tweet">Tweet</a>
                  </div>
                )
        }
};

export default App;
