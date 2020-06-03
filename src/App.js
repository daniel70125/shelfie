import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      inventory: [],
      isEdit: false,
      id: ""
    }

    this.getAll = this.getAll.bind(this);
    this.changeId = this.changeId.bind(this);
    this.changeEdit = this.changeEdit.bind(this);
  }

  componentDidMount(){
    this.getAll()
  }
  changeId(e){
    this.setState({
      id: e
    })
  }

  changeEdit(){
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  getAll(){
    axios.get('/api/inventory')
    .then(res => this.setState({inventory: res.data}))
    .catch(err => console.log(err));
  }
  render(){
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <Dashboard updatedList={this.getAll} id={this.changeId} edit={this.state.isEdit} changeEdit={this.changeEdit} inventory={this.state.inventory}/>
        <Form id={this.state.id} edit={this.state.isEdit}  changeEdit={this.changeEdit} updatedList={this.getAll}/>
      </div>
    );
  }
}

export default App;
