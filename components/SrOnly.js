//two buttons to help users with disabilities reach the main content faster through anchors links
export default function SrOnly() {
    return (
        <>
            <a href="#textEditor">
                <span className="sr-only">Go to editor to begin typing your markdown text</span>
            </a>
            <a href='#prev'>
                <span className="sr-only">Go to the preview section to read the output</span>
            </a>
        </>  
    )
}