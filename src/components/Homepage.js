import React, { Component } from 'react';

class Homepage extends React.Component {
    render() { 
        return (
            <div className="Homepage">
                <h1 className="text-1">
                    A Platform for the Creative to Market Their Talent.
                </h1>
                <br></br>
                <div className="text-2">
                    Find your artist. Market your talent. Always be looking for new opportunities.
                </div>
                <button className = "button-1"> <li> Find Work </li> </button>
                <button className = "button-2"> <li> Find Talent </li> </button>
            </div>
        );
    }
}
 
export default Homepage;