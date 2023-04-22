import React, { useState } from 'react';
import Editor from "./Editor";
import Previewer from "./Previewer";
import Button from "./Button";
import SrOnly from "./SrOnly";

const App = () => {
    const [input, setInput] = useState("# Welcome to my React Markdown Previewer!\n\n## Using Next.js and TailwindCSS...\n### Github flavored markdown:\n\nHeres some code, `accessibility techniques utilized`, between 2 backticks.\n\n\`\`\`\n// this is multi-line code\:\n\nfunction anotherExample(firstLine, lastLine) \{ if (firstLine == '```' && lastLine == '```') \{ return multiLineCode\;}}\n\`\`\`\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\n.\n\nThere's also [links](https://www.linkedin.com/in/lucas-dota-trombini/), and\n> Block Quotes!\n\n- There are lists too: \n- Item 2\n- Item 3\n\nAnd last but not least, let's not forget embedded images:\n\n![React Logo](https://cdn.cdnlogo.com/logos/r/85/react.svg)");

    //reads and updates the input with each event(e) happening in the target
    const handleChange= (e) => {
        setInput(e.target.value)
    }

    const buttonChange = () => {
        //adds and removes the string 'dark' from the html with each click, activating and deactivating the darkMode from tailwind
        document.getElementById("target").classList.toggle("dark");
        //this if else statement is the 'animation' of the button element, switching between images and css properties with each click
        if (document.getElementById("imgBtn").classList.contains("fa-moon")) {
            document.getElementById("imgBtn").classList.replace("fa-moon", "fa-sun");
            document.getElementById("imgBtn").classList.replace("scale-80", "scale-110");
            document.getElementById("btn").classList.replace("bg-neutral-200", "bg-amber-200");
            document.getElementById("editorContainer").classList.replace("bg-neutral-200", "bg-amber-200");
            document.getElementById("headerPrev").classList.replace("bg-neutral-200", "bg-amber-200");
            document.getElementById("imgBtn").style.animation = "slideR 0.2s ease-in"
        } else {
            document.getElementById("imgBtn").classList.replace("fa-sun", "fa-moon");
            document.getElementById("imgBtn").classList.replace("scale-110", "scale-80");
            document.getElementById("btn").classList.replace("bg-amber-200", "bg-neutral-200");
            document.getElementById("editorContainer").classList.replace("bg-amber-200", "bg-neutral-200");
            document.getElementById("headerPrev").classList.replace("bg-amber-200", "bg-neutral-200")
            document.getElementById("imgBtn").style.animation = "slideL 0.2s ease-in"
        }   
    }


    return (
        <>  
            <SrOnly />
            <Button buttonChange={buttonChange} />
            <Editor input={input} handleChange={handleChange} />
            <Previewer input={input} />
        </>
    )
}

export default App
  