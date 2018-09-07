import React, { Component } from 'react';
import './App.css';
import AllStocks from './components/AllStocks'
import CreateWatchList from './components/CreateWatchList'
import Header from './components/Header'
import AllWatchlist from './components/AllWatchList'
import {
  getAllStocks,
  saveName,
  fetchWatchlist,
  fetchStockList,
  deleteTheWatchList,
  updateWatchList
} from './services/api'
import EditForm from './components/EditForm';






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Wiki Index',
      name: [],
      stocks: null,
      flag: false,
      list: '',
      idToEdit: '',
    }
    this.determineWhichToRender = this.determineWhichToRender.bind(this);
    this.createWatchList = this.createWatchList.bind(this);
    this.callingFetchStockList = this.callingFetchStockList.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.setIdToEdit = this.setIdToEdit.bind(this);

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

  callingFetchStockList(id){
    fetchStockList(id)
    .then(res => {
      this.setState({
        list: res,
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


  setIdToEdit(id){
    this.setState({
      currentView: 'Edit Form',
      idToEdit: id,
    })
  }

  onDelete(id){
    deleteTheWatchList(id)
    .then(res => {
      fetchWatchlist()
      .then(data => {
        this.setState({
          currentView: 'Watch lists',
          name: data
        })
      }
      )
      
    })
  }

  onUpdate(watch, watchId){
    updateWatchList(watch, watchId)
    .then(res => fetchWatchlist())
    .then(res => {
      this.setState({
        currentView: 'Watch lists',
        name: res,
      })
    })
  }

  determineWhichToRender() {
    const { currentView } = this.state;
    switch (currentView) {
      case 'Wiki Index':
        return (
          <AllStocks
            stocks={this.state.stocks}
          />)

      case 'Create WatchList':
        return <CreateWatchList
          onSubmit={this.createWatchList}
          stocks={this.state.stocks} />;

      case 'Watch lists':
      return <AllWatchlist
          name={this.state.name}
          list={this.state.list}
          callingFetchStockList={this.callingFetchStockList}
          deleteTheWatchList={this.onDelete}
          updateWatchList={this.onUpdate}
          setIdToEdit={this.setIdToEdit}
      />

      case 'Edit Form':
      return <EditForm 
          idToEdit={this.state.idToEdit}
          onUpdate={this.onUpdate}
          name={this.state.name}
          />


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
