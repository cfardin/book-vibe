import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext()

const BookProvider = ({children}) => {
    const [storedBooks, setStoredBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) =>{

        const isExistBook = storedBooks.find(
            (book) => book.bookId === currentBook.bookId
        )

        if(isExistBook){

            toast.error("The Book is already exist");
            return;
        } else{
            setStoredBooks([...storedBooks, currentBook]);
            toast.success(`${currentBook.BookName} add to reading list`)
        }
    }

    const handWishList = (currentBook) =>{

        const isExistBook = wishList.find(
            (book) => book.bookId === currentBook.bookId
        )

        if(isExistBook){

            toast.error("The Book is already exist");
            return;
        } else{
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.BookName} add to wish list`)
        }
    }



    const data = {
        storedBooks, setStoredBooks, handleMarkAsRead, wishList, setWishList, handWishList
    }

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;