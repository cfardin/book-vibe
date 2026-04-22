import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, addWishListTOlocalDB, getAllReadFromLocalDB, getAllWishListFromLocalDB } from '../utils/localDB';

// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext()

const BookProvider = ({children}) => {
    const [storedBooks, setStoredBooks] = useState(() => getAllReadFromLocalDB());
    const [wishList, setWishList] = useState(() => getAllWishListFromLocalDB());

    // useEffect(()=>{
    //     const getReadListFromLocalDB = getAllReadFromLocalDB();
    //     console.log(getReadListFromLocalDB);
    //     setStoredBooks(getReadListFromLocalDB);
    // }, [])


    const handleMarkAsRead = (currentBook) =>{

        addReadListToLocalDB(currentBook);


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

        addWishListTOlocalDB(currentBook);

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