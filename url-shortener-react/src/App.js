import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import BackgroundAnimate from "./components/BackgroundAnimate";
import InputUrl from "./components/InputUrl"
import { TableUrl } from "./components/TableUrl"

function App() {

  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);
  const [refreshData, setRefreshData] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function getData() {
    setIsLoading(true);
    axios({
      method : "GET",
      url: "http://localhost:5000/getData",
    }).then( res => {
      setData(res.data);   
      setIsLoading(false);
      console.log(res.data);
    }).catch(() => {
      setErrorMessage("Unable to loading data.");
      setIsLoading(false);
   });
  }

  useEffect(()=> {
    (async () => {
      await getData();
    })();
    if(refreshData){
      getData()
    }  
  },[refreshData]);

  return (
      <div className="Container">
        <h1>JigsawGroups URL Shortener</h1>
        <InputUrl setInputValue={setInputValue} inputValue={inputValue} refreshData={refreshData} setRefreshData={setRefreshData} />
        <TableUrl data={data} isLoading={isLoading} errorMessage={errorMessage} />
        <BackgroundAnimate />
      </div>
  );

}

export default App;
