import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { ExpandEditor } from "./ExpandIcon";

export default function Editor (props) {
    return (
        //aria hidden tells sr to ignore the icon
        //aria expanded tells sr that the area is not expanded at first
        <div className="min-w-[100%] sm:min-w-[45%] lg:min-w-[35%] bg-amber-200 m-4 shadow-lg leading-3 border border-black" id="editorContainer">
            <h3 className="p-1 w-full font-bold text-base shadow-inner tracking-wide border-b border-black">
            <FontAwesomeIcon icon={faKeyboard} className="px-1" aria-hidden/>
            Editor
            <button className="float-right mr-2" onClick={ExpandEditor} aria-expanded="false"><i className="fa solid fa-expand hover:text-stone-500" id="expandIcon" /></button>
            </h3>
            <textarea
            spellCheck="false"
            className="w-full min-h-[230px] p-2 font-mono bg-gray-50 dark:bg-[#0d1117] dark:text-[#c9d1d9] leading-6"
            onChange={props.handleChange}
            id="editor"        
            >{props.input}</textarea>
        </div>
    );
};