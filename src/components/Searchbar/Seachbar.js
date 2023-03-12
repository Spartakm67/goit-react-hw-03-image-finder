import { Component } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import {
    Seachbar, SearchForm, SearchFormButton,
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
      <Seachbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormInput
            autocomplete="off"
            autofocus
            type="text"
            placeholder="Search images and photos"
            aria-label="Search"
            value={this.state.value}
            onChange={this.handleChange}
                />
                <SearchFormButton type="submit" className={css.searchFormButton}>
                <BiSearchAlt
                  style={{
                  height: '32px',
                  width: '32px',
                }}
              />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
        </SearchForm>
      </Seachbar>
    );
  }
}

Notiflix.Notify.init({
  position: 'right-top',
  width: '300px',
  distance: '10px',
  opacity: 1,
  rtl: false,
  timeout: 1000,
});