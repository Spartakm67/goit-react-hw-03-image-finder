import { Component } from 'react';
import { Container } from "./App.styled";
import { Searchbar } from './Searchbar/Seachbar.styled';
import Notiflix from 'notiflix';

class App extends Component {
  state = {
    gallery: [],
    error: '',
    status: 'stoped',
    page: 1,
    searchParameter: '',
    showBtn: false,
  };
onSearch = searchParameter => {
    this.setState({
      searchParameter,
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