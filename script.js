const containerEl = document.querySelector(".container");

for(let i = 0; i < 60; i++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");

    const colorCodeEl = document.createElement("span");
    colorCodeEl.classList.add("color-code");
    colorContainerEl.appendChild(colorCodeEl);

    const copyButtonEl = document.createElement("button");
    copyButtonEl.innerText = "Copy";
    colorContainerEl.appendChild(copyButtonEl);

    containerEl.appendChild(colorContainerEl);

    // console.log(containerEl);

}

function randomColor() {
    const chars = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = "";

    for(let i = 0; i < colorCodeLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.charAt(randomNum);

        // console.log(colorCode);
    };

    return colorCode;

}


const colorContainerEls = document.querySelectorAll(".color-container");

generateColors()

function generateColors() {
    for(let i = 0; i < colorContainerEls.length; i++){
        const colorContainerEl = colorContainerEls[i];
        const newColorCode = randomColor();

        const colorCodeEl = colorContainerEl.querySelector(".color-code");

        colorContainerEl.style.backgroundColor = "#" + newColorCode;

        colorCodeEl.innerText = "#" + newColorCode;


    }
}

colorContainerEls.forEach((colorContainerEl)=>{
    const copyButtonEl = colorContainerEl.querySelector("button")
    const colorCodeEl = colorContainerEl.querySelector(".color-code")
    copyButtonEl.addEventListener("click", ()=>{
        const colorCode = colorCodeEl.innerText;
        copyToClipboard(colorCode);
    })
})

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
    .then(()=>{
        alert("Copied to Clipboard : " + text)
    })
    .catch((error)=>{
        console.log("Failed to Copy to Clipboard", error)
    })
}