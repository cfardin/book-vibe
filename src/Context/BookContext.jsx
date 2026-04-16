import React, { Children, createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext()

const BookProvider = ({Children}) => {
    const [storedBooks, setStoredBooks] = useState([]);

    const handleMarkAsRead = (currentBook) =>{

        const isExistBook = storedBooks.find(
            (book) => book.bookId === currentBook.BookId
        )

        if(isExistBook){
            alert("The Book is already exist");
            return;
        } else{
            setStoredBooks([...storedBooks, currentBook]);
            alert(`${currentBook.BookName} add to reading list`)
        }
    }

    const data = {
        storedBooks, setStoredBooks, handleMarkAsRead
    }

    return <BookContext.Provider value={data}>
        {Children}
    </BookContext.Provider>
};

export default BookProvider;