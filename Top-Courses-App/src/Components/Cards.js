import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    
    //it returns a list of all courses received from the API response
    function getCourses() {
        if(category === "All") { //if All is clicked then show all the data
            let allCourses = []; //this is to store all the API received data in single array
            Object.values(courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else {
            //pass the data of a specific category
            return courses[category];
        }        
    }

    return (
        <div className="flex flex-wrap justify-center gap-8 mt-7 mb-4">
        {
            getCourses().map( (course) => { //sare data ko map krdo and hr data ke liye ek card bnado
                    return <Card key={course.id} course={course}
                        likedCourses={likedCourses} setLikedCourses={setLikedCourses}
                    />
        })
        }  
        </div>
    )                   
}

export default Cards;