import React, { useContext, useState } from "react";
import { BookContext } from "../../Context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import BookList from "../../components/ListedBooks/BookList";
import WishList from "../../components/ListedBooks/WishLIst";

const Books = () => {

  const [sortingType, setSortingType] = useState('')
  console.log(sortingType);

  const {storedBooks, wishList} = useContext(BookContext);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center my-3">

        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">Sort by</div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={()=>setSortingType('pages')}><a>Pages</a></li>
            <li onClick={()=>setSortingType('rating')}><a>Rating</a></li>
          </ul>
        </div>
      </div>


      <h3>Books</h3>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>


        {/* Read list tab */}
        <TabPanel>
          <h2>Total Books Read : {storedBooks.length}</h2>
          <BookList sortingType = {sortingType}></BookList>
        </TabPanel>

        {/* Wish list tab */}
        <TabPanel>
          <h2>Total Books in WishList  : {wishList.length}</h2>
          <WishList sortingType = {sortingType}></WishList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
