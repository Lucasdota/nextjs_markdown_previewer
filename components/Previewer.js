import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPager } from '@fortawesome/free-solid-svg-icons';
import 'github-markdown-css';
import ReactMarkdown from 'react-markdown';
import { ExpandPrev } from './ExpandIcon';

export default function Previewer(props) {
    //aria hidden tells sr to ignore the icon
    //aria expanded tells sr that the area is not expanded at first
    return (
        <div className="w-[100%] sm:min-w-[50%] sm:max-w-[60%] lg:min-w-[47%] m-1 shadow-lg border border-black" id="previewerContainer">
            <h3 className="p-1 text-base bg-amber-200 font-bold tracking-wide drop-shadow-md z-10 border-b border-black" id="headerPrev">
            <FontAwesomeIcon icon={faPager} className="px-1" flip="horizontal" aria-hidden/>
            Previewer
            <button className="float-right mr-2" onClick={ExpandPrev} aria-expanded="false"><i className="fa solid fa-expand hover:text-stone-500" id="expandIcon2" /></button>
            </h3>
            <p className="min-h-[calc(100vh-355px)] p-3 sm:min-h-[230px] markdown-body" id="preview">
                <ReactMarkdown>{props.input}</ReactMarkdown>
            </p>
        </div>
    );
}