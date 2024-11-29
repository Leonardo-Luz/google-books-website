import { useNavigate } from 'react-router-dom'
import '../styles/home.style.css'
import React, { useEffect, useRef, useState } from 'react';
import { book } from '../types';
import { service } from '../services/api.service';

export const Home = () => {
  const navigate = useNavigate();

  const [searchResult, setSearchResult] = useState<book[]>();
  const search = useRef<HTMLInputElement>(null);

  const getBooksBySearch = async () => {
    setSearchResult(undefined)

    if (search.current == null || search.current.value.trim() === '')
      return;

    const response = await service.get(`/books/v1/volumes`, {
      method: 'get',
      params: {
        q: search.current.value
      }
    })

    setSearchResult(response.data.items)
  }

  const keyHandler = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    switch (ev.key) {
      case 'Enter':
        getBooksBySearch();
        break;
      case 'Escape':
        setSearchResult(undefined);
        search.current!.value = '';
        break;
    }
  }

  return (
    <div className='home-container'>
      <label className='search-label'>
        <input
          ref={search}
          className="books-search"
          type="search"
          placeholder='Search for a book...'
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
            undefined
        }
      </div>
    </div>
  )
}
