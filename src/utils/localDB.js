

const getAllReadFromLocalDB = () => {
    const allReadList = localStorage.getItem('readList');
    // console.log(allReadList, "read list from local db");

    if(allReadList) return JSON.parse(allReadList);

    return [];

}


const getAllWishListFromLocalDB = () => {
    const allWishList = localStorage.getItem('wishList');

    if(allWishList) return JSON.parse(allWishList);

    return [];
}


const addReadListToLocalDB = (book) => {
    const allBooks = getAllReadFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId);

    if(!isAlreadyExist) {
        allBooks.push(book);
        localStorage.setItem("readList", JSON.stringify(allBooks));
    }
}


const addWishListTOlocalDB = (book) => {
    const allBooks = getAllWishListFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId);

    if(!isAlreadyExist){
        allBooks.push(book);
        localStorage.setItem("wishList", JSON.stringify(allBooks));
    }
}


export {getAllReadFromLocalDB, addReadListToLocalDB, getAllWishListFromLocalDB, addWishListTOlocalDB}