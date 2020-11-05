// React hooks
import React, { useState, useEffect} from "react";
// styling 
import "./style/App.css";
//axios
import axios from "axios"
// import constants which is my base url and api
import {BASE_URL, API_KEY} from "./constants/constants"
//import from components file
import Header from "./components/Header"
import PhotoOfDay from "./components/PhotoOfDay"


function App() {
  // declaring the state
  const [currentDate, setCurrentDate] = useState([]);  
  // declaring effect hook
  useEffect(()=>{
    console.log('This is not broken')
    const DailyPhoto = () => {
      axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
         .then((res) => {
            console.log('response', res);
            setCurrentDate(res.data);
          })
      .catch((err) => {
        console.log('This is an error message', err)
        debugger
      });
    };
    console.log('daily', DailyPhoto());
  }, []);

	return (
		<div className='App'>
			<Header />
			<PhotoOfDay
				date={currentDate.date}
				title={currentDate.title}
				imgSrc={currentDate.url}
				imgAlt={currentDate.title}
				description={currentDate.explanation}
				copyright={currentDate.copyright}
			/>
		</div>
	);
}

export default App;
