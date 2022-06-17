// import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import Comments from './Comments';
import { Endmessage } from './Endmessage';
import Header from './Header';
// import index from 'App.js'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import Routes from './Routes';
// import Cart from './Cart';
function Home() {
  const [items, setItems]= useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(2);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20`
        `https://fakestoreapi.com/products/`
        // For json server use url below
        // `http://localhost:3004/comments?_page=1&_limit=20`
      );
      const data = await res.json();
      
      setItems(data);
      console.log(items);
    };

    getComments();
  }, []);
 
const fetchComments = async () => {
  const res = await fetch(
    // `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`
    // For json server use url below
    // `http://localhost:3004/comments?_page=${page}&_limit=20`
    `https://fakestoreapi.com/products/`
  );
  const data = await res.json();
  console.log("ss");

  return data;
};

  const fetchData = async()=>{
    const commentsFormServer = await fetchComments();
    setItems([...items, ...commentsFormServer]);
    

     if (items.length === 100 ) {
      sethasMore(false);
    }
    setpage(page+1);
  };
  return (
    <>
   
    <Header></Header>
    
    
    
    
    
    <InfiniteScroll
    dataLength={items.length} //This is important field to render the next data
    next={fetchData}
    hasMore={hasMore}
    loader={<h4>Loading...</h4>}
    endMessage={
      <Endmessage></Endmessage>
    }
    // below props only if you need pull down functionality
    
  >
    {items.map((item) => {
      
      return  <div key={item.id}>
          {/* <div>id :{item.id}</div>
          <div>email :{item.email}</div>
          <div>comment :{item.body}</div> */}
          <Comments id={item.id} 
          title={item.title}
          price={item.price}
          image={item.image}
          ></Comments>
        </div>;

    })}
  </InfiniteScroll>
  
  </>
  );
}

export default Home;
