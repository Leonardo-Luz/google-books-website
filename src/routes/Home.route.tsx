import { useNavigate } from 'react-router-dom'
import '../styles/home.style.css'
import React, { useEffect, useRef, useState } from 'react';
import { book } from '../types';
import { service } from '../services/api.service';

export const Home = () => {
  const navigate = useNavigate();

  const [searchResult, setSearchResult] = useState<book[]>();

  const getBooksBySearch = async (search: string) => {
    setSearchResult(undefined)

    if (search.trim() == '')
      return;

    const response = await service.get(`/books/v1/volumes`, {
      method: 'get',
      params: {
        q: search
      }
    })

    setSearchResult(response.data.items)
  }

  const keyHandler = (ev: React.KeyboardEvent<HTMLInputElement>) =>
    ev.key === 'Enter' ?
      getBooksBySearch(ev.currentTarget.value) :
      undefined

  return (
    <div className='home-container'>
      <label className='search-label'>
        <p>Search your book: </p>
        <input
          className="books-search"
          type="search"
          placeholder='Sherlock Holmes...'
          onKeyDown={keyHandler}
        />
      </label>

      <div className='books-result'>
        {
          searchResult ? searchResult.map(book => (
            <img
              className='books-thumb'
              src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'}
              alt='thumbnail'
              onClick={() => navigate(`/book/${book.id}`)}
            />
          )) :
            <h1>Search to preview</h1>
        }
      </div>
    </div>
  )
}
