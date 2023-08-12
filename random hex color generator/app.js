const chBg= () =>{
    const randomColor=Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}

genbtn.addEventListener('click',chBg);
chBg();

const copyIcon = document.getElementById("copy");
const colorSpan = document.getElementById("color");

copyIcon.addEventListener("click", () => {
    const colorText = colorSpan.textContent;
    
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = colorText;
    document.body.appendChild(tempTextArea);
    
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    
    alert(`Color code "${colorText}" copied to clipboard.`);
});
