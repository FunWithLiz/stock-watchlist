import React, { Component } from 'react';
import './App.css';
import AllStocks from './components/AllStocks'
import CreateWatchList from './components/CreateWatchList'
import Header from './components/Header'
import {
  getAllStocks,
  saveCategoryName
} from './services/api'






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Wiki Index',
      stocks: null,
      flag: false
    }
    this.determineWhichToRender = this.determineWhichToRender.bind(this);
  }



  componentDidMount() {
    getAllStocks()
      .then(data => {
        this.setState({
          stocks: data,
          flag: true
        })
      })
  }

  createWatchList(category) {
    saveCategoryName(category)
      .then(data => {
        AllStocks();
        this.setState({
          currentView: 'Wiki Index',
          category: data
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
      'Create WatchList'
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
