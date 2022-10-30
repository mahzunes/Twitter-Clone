import React, { useEffect, useState } from "react";
import Divider from "../components/Divider";
import TweetBox from "../components/TweetBox";
import { collection, doc, getDocs } from "firebase/firestore";
import db from "../firebase";
import { PopulerIcon } from "../icons/Icon";

import FeedList from "../components/FeedList";

const Content = () => {
  const [tweets, setTweets] = useState([]);



  useEffect(() => {
;(async()=>{

  const colRef=collection(db,"tw3")
  const snapshots=await getDocs(colRef)

  const docs=snapshots.docs.map((doc)=> {

   const data= doc.data()
   data.id=doc.id

   return data
  
   

  })
  setTweets(docs)
  console.log(docs)





})()

    






  }, []);



  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10 bg-white flex justify-between items-center p-4 border-b border-gray-extraLight ">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex space-x-4 px-4 py-3">
        <img
          src="https://pbs.twimg.com/profile_images/1138175077449719808/BdntS7rp_400x400.jpg"
          alt="Profile"
          className="w-11 h-11 rounded-full"
        />
        <TweetBox></TweetBox>
      </div>
      <Divider></Divider>



      <FeedList tweets={tweets}></FeedList>




    </main>
  );
};

export default Content;
