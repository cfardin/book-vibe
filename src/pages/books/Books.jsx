import React, { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import BookList from "../../components/ListedBooks/BookList";
import WishList from "../../components/ListedBooks/WishLIst";

const Books = () => {

    const {storedBooks, wishList} = useContext(BookContext);

  return (
    <div className="container mx-auto">
      <h3>Books</h3>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>


        {/* Read list tab */}
        <TabPanel>
          <h2>Total Books Read : {storedBooks.length}</h2>
          <BookList></BookList>
        </TabPanel>

        {/* Wish list tab */}
        <TabPanel>
          <h2>Total Books in WishList  : {wishList.length}</h2>
          <WishList></WishList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
