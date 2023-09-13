import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

const App = () => { //to get data we have to call API from "data.js"
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

    async function fetchData() {
      setLoading(true); //until the data comes setLoading should be true (visible);
      try {
        let res = await fetch(apiUrl);
        let output = await res.json();
        //save data into a variable 
        setCourses(output.data);
      }
      catch(error) {
        toast.error("Something went wrong");
      }
      setLoading(false); //once data has come then setLoading should be set to false(not visible)
    }  
    
    useEffect( () => {
      fetchData();
    }, [] ); //here we passed the empty array because we want changes on first render only.

  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <div>
        <Navbar/>
      </div>

      <div className="bg-bgDark2">
        <Filter filterData = {filterData} category={category} setCategory={setCategory} />
      </div>

      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>) 
          //until loading is true show Spinner once it is false then show Cards
        }
      </div>
    </div>
  );
};

export default App;
