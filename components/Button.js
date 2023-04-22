import React from "react";

export default function Button(props) {
    return (
        //aria tells sr that the button is related to the i element
        //sr reads alt attribute to users
        <button className="absolute sm:right-5 top-5 sm:top-4 z-50 bg-amber-200 w-12 rounded-xl border border-black shadow-md" onClick={props.buttonChange}id="btn" aria-describedby="imgBtn">
            <i className="fa fa-sun scale-110" id="imgBtn" alt="switch between light and dark mode"/>
        </button>
    )
}