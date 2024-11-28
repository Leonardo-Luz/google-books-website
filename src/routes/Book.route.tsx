import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { service } from "../services/api.service";
import { book } from "../types";

import '../styles/book.style.css'

export const Book = () => {
  const { search } = useParams();

  const [book, setBook] = useState<book>();

  const getBookById = async () => {
    const response = await service.get(`/books/v1/volumes/${search}`, {
      method: 'get',
    })

    setBook(response.data);
  }

  useEffect(() => {
    getBookById();
  }, [search])

  return (
    <>
      {
        book ?
          <div className="book-container" key={book.id}>
            <p>{book.volumeInfo.title}</p>
            <img src={book.volumeInfo.imageLinks.thumbnail} />
            {book.volumeInfo.description as React.ReactNode}
          </div>
          :
          <p>LOADING</p>
      }
    </>
  )
}
