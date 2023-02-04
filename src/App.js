import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import useGenerateRandomColor from "./useGenerateRandomColor";

function App() {
   const { color, generateColor } = useGenerateRandomColor();
   const [length, setLength] = useState();
   const [random, setRandom] = useState(0);
   const [post, setPost] = useState({});
   function getRandom(max) {
      return Math.floor(Math.random() * (max + 1));
   }

   function getLength() {
      axios
         .get("https://type.fit/api/quotes")
         .then((res) => {
            return res.data.length;
         })
         .then((length) => setLength(length));
   }
   getLength();

   const handleClick = () => {
      generateColor();
      setRandom(getRandom(length));
   };

   useEffect(() => {
      axios
         .get("https://type.fit/api/quotes")
         .then((res) => {
            return res.data;
         })
         .then((data) => {
            console.log(data[random]);
            setPost({
               theQuote: data[random].text,
               theAuthor: data[random].author,
            });
         });
   }, [random]);

   return (
      <div className="App" style={{ backgroundColor: color || "gray" }}>
         <div id="quote-box" style={{ color: color || "lightgray" }}>
            <div>
               <div id="text">"{post.theQuote}"</div>
               <div id="author">{post.theAuthor}</div>
            </div>
            <div>
               <button
                  id="new-quote"
                  onClick={handleClick}
                  style={{ backgroundColor: color || "gray" }}
               >
                  New quote
               </button>
               <a
                  href="twitter.com/intent/tweet"
                  id="tweet-quote"
                  style={{ backgroundColor: color || "gray" }}
               >
                  Tweet quote
               </a>
            </div>
         </div>
      </div>
   );
}

export default App;
