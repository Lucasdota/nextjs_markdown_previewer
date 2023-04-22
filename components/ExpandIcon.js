//switches between font awesome icons and css properties with each click
export function ExpandEditor() {
    if (document.getElementById('expandIcon').classList.contains("fa-expand")) {
        document.getElementById('expandIcon').classList.replace("fa-expand", "fa-compress");
        document.getElementById('editor').setAttribute("style","height: calc(92.5svh)");
        document.getElementById('target').classList.add("overflow-hidden")
        
    } else {
        document.getElementById('expandIcon').classList.replace("fa-compress", "fa-expand");
        document.getElementById('editor').removeAttribute("style", "height");
        document.getElementById('target').classList.remove("overflow-hidden")
    }
}

export function ExpandPrev() {
    if (document.getElementById('expandIcon2').classList.contains("fa-expand")) {
        document.getElementById('expandIcon2').classList.replace("fa-expand", "fa-compress");
        document.getElementById('preview').setAttribute("style","min-height: calc(92.5svh)");
        document.getElementById('previewerContainer').classList.add("mt-[-282px]")
    } else {
        document.getElementById('expandIcon2').classList.replace("fa-compress", "fa-expand");
        document.getElementById('preview').removeAttribute("style", "min-height");
        document.getElementById('previewerContainer').classList.remove("mt-[-282px]")
    }
}