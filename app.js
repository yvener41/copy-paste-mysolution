const copyText = document.getElementById('copyTxt');
const finalText = document.getElementById('finalTxt');
const copyBtn = document.getElementById('copyBtn');
const moveBtn = document.getElementById('moveBtn');

copyBtn.addEventListener('click', () => {
    copyText.select(); 
    document.execCommand("copy"); 
    alert("Text Copied"); 
});


moveBtn.addEventListener('click', () => {
    finalText.value = copyText.value; 
});