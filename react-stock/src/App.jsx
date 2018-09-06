import React, { Component } from 'react';
import './App.css';
import AllStocks from './components/AllStocks'
import CreateWatchList from './components/CreateWatchList'
import Header from './components/Header'
import AllWatchlist from './components/AllWatchList'
import {
  getAllStocks,
  saveName,
  fetchWatchlist
} from './services/api'






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Wiki Index',
      name: [],
      stocks: null,
      flag: false,

    }
    this.determineWhichToRender = this.determineWhichToRender.bind(this);
    this.createWatchList = this.createWatchList.bind(this);
  }



  componentDidMount() {
    getAllStocks()
      .then(data => {
        this.setState({
          stocks: data,
          flag: true
        })
      })


    fetchWatchlist()
    .then(data => {
      this.setState({
        name: data,
      })
    })
  }





  createWatchList(category) {
    saveName(category)
      .then(data => {
        fetchWatchlist()
        .then(res => {
        this.setState({
          currentView: 'Watch lists',
          name: res
        })
        });
      })
  }

  determineWhichToRender() {
    const { currentView } = this.state;
    console.log("RUNNING");
    switch (currentView) {
      case 'Wiki Index':
        return (
          <AllStocks
            stocks={this.state.stocks}
          />)
        break;

      case 'Create WatchList':
        return <CreateWatchList
          onSubmit={this.createWatchList}
          stocks={this.state.stocks} />;
        break;

      case 'Watch lists':
      return <AllWatchlist
          name={this.state.name}
      />
      break;


    }
  }

  handleLinkClick(link) {
    this.setState({
      currentView: link
    });
  }


  render() {
    const links = [
      'Wiki Index',
      'Create WatchList',
      'Watch lists'
    ]
    if (this.state.flag) {
      return (
        <div className="bg">
          <div className="flex">
          <div className="appSpace"></div>
          <h1 className="appH1"> Stock Watch</h1>
            <Header
              onClick={this.handleLinkClick.bind(this)}
              links={links} />

            {this.determineWhichToRender()}
          </div>
        </div>
      );
    } else {
      return <h1>Loading data</h1>
    }

  }
}

export default App;
