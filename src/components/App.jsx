import { Component } from 'react';
import { Container } from "./App.styled";
import { Searchbar } from './Searchbar/Searchbar';
import Notiflix from 'notiflix';

class App extends Component {
  state = {
    gallery: [],
    error: '',
    status: 'stoped',
    page: 1,
    searchValue: '',
    showBtn: false,
  };
onSearch = searchValue => {
    this.setState({
      searchValue,
      // gallery: [],
      // page: 1,
      // status: 'stoped',
      // showBtn: false,
    });
  };


  render() {
  
    return (
    <>
    {/* // <Container */}
      <Searchbar onSearch={this.onSearch} />
    {/* // </Container > */}
    </>
  );
  }
};

export default App;