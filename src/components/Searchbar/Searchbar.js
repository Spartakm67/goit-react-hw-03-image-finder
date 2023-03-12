import { Component } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import {
    SearchbarContainer, SearchForm, SearchFormButton,
    SearchFormButtonLabel, SearchFormInput
} from './Searchbar.styled';
import Notiflix from 'notiflix';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.value)
      return  Notiflix.Notify.failure(
        'Enter seach parameters.')
       
  
    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <SearchbarContainer>
        <SearchForm onSubmit={this.handleSubmit} status={'pending'}>
          <SearchFormInput
            autocomplete="off"
            autoFocus
            type="text"
            placeholder="Search images and photos"
            aria-label="Search"
            value={this.state.value}
            onChange={this.handleChange}
          />
                <SearchFormButton type="submit">
                 <BiSearchAlt
                  style={{
                  height: '32px',
                  width: '32px',
                }}
                 />
                  <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormButton>
        </SearchForm>
      </SearchbarContainer>
    );
  }
}

Notiflix.Notify.init({
  position: 'right-top',
  width: '300px',
  distance: '10px',
  opacity: 1,
  rtl: false,
  timeout: 1500,
});