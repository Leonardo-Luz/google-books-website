import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { service } from "../services/api.service";
import { book } from "../types";
import DOMPurify from "dompurify";

import '../styles/book.style.css'

type bookElementProps = {
  title: string,
  data: string
}
const BookElement = ({ title, data }: bookElementProps) =>
  data != 'undefined' ?
    <label className="book-element">
      <p>{title}:</p>
      <p className="dashes"></p>
      <p className="book-data-info">{data}</p>
    </label>
    :
    <></>

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
            <div
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(book.volumeInfo.description) }}
              className="book-description"
            />
            <div className="book-data">
              <BookElement title="Publisher" data={String(book.volumeInfo.publisher)} />
              <BookElement title="Published Date" data={String(book.volumeInfo.publishedDate)} />
              <BookElement title="Maturity Rating" data={String(book.volumeInfo.maturityRating)} />
              <BookElement title="Categories" data={String(book.volumeInfo.categories.join(' / '))} />
              <BookElement title="Rating" data={String(book.volumeInfo.averageRating)} />
              <BookElement title="Rating Count" data={String(book.volumeInfo.ratingsCount)} />
              <BookElement title="Price" data={String(book.saleInfo.listPrice ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}` : undefined)} />
            </div>
          </div>
          :
          <p>LOADING</p>
      }
    </>
  )
}
