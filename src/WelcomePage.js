import React from "react";
 
const Course = () => {
    return (
        <div id="course">Let's Look at some courses</div>
    );
};
 
const Article = () => {
    return <div id="article">Let's Read some Articles</div>;
};
 
const WelcomePage = () => {
    return (
        <div>
            <Course />
            <Article />
        </div>
    );
};
 
export default WelcomePage;