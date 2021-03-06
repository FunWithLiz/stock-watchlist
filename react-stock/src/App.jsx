import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import AllStocks from './components/AllStocks'
import CreateWatchList from './components/CreateWatchList'
import Header from './components/Header'
import Footer from './components/Footer'
import AllWatchlist from './components/AllWatchList'
import {
  getAllStocks,
  saveName,
  fetchWatchlist,
  fetchStockList,
  deleteTheWatchList,
  updateWatchList,
  addToWatchList
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
      value: '',
      getWatchId: '',
    }
    this.determineWhichToRender = this.determineWhichToRender.bind(this);
    this.createWatchList = this.createWatchList.bind(this);
    this.callingFetchStockList = this.callingFetchStockList.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.setIdToEdit = this.setIdToEdit.bind(this);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.handleSelectionSubmit = this.handleSelectionSubmit.bind(this);
    this.addStockToWatchList = this.addStockToWatchList.bind(this);
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

  callingFetchStockList(id) {
    fetchStockList(id)
      .then(res => {
        this.setState({
          list: res,
        })
      })
  }

  setIdToEdit(id) {
    this.setState({
      currentView: 'Edit Form',
      idToEdit: id,
    })
  }

  onDelete(id) {
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

  onUpdate(watch, watchId) {
    updateWatchList(watch, watchId)
      .then(res => fetchWatchlist())
      .then(res => {
        this.setState({
          currentView: 'Watch lists',
          name: res,
        })
      })
  }

  addStockToWatchList(stockId, watchId) {
    addToWatchList(stockId, watchId)
      .then(res => {
        fetchWatchlist()
          .then(res => {
            this.setState({
              currentView: 'Watch lists',
              list: res.list,
            })
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
          stocks={this.state.stocks}
          handleSelectionChange={this.handleSelectionChange}
          handleSelectionSubmit={this.handleSelectionSubmit}
          value={this.state.value}
          addToWatchList={this.addStockToWatchList}
        />

      case 'Edit Form':
        return <EditForm
          idToEdit={this.state.idToEdit}
          onUpdate={this.onUpdate}
          name={this.state.name}
        />


    }
  }

  // handles the switch-case render view

  handleLinkClick(link) {
    this.setState({
      currentView: link
    });
  }

  // handles the change for when selecting one of the stocks in the dropdown

  handleSelectionChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSelectionSubmit(e) {
    e.preventDefault();
  }

  render() {
    const links = [
      'Wiki Index',
      'Create WatchList',
      'Watch lists'
    ]

    // if/else statement for better user experience
    //so users are able to see loading data if code breaks
    
    if (this.state.flag) {
      return (
        <div>
          <Header
            onClick={this.handleLinkClick.bind(this)}
            links={links} />
          {this.determineWhichToRender()}

          <Footer />
          
        </div>
      );
    } else {
      return <h1>Loading data</h1>
    }

  }
}

export default App;
