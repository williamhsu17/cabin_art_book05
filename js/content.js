function showContent(contentId) {
    // Hide all content divs first
     const contentDivs = document.querySelectorAll('.content');
    contentDivs.forEach(
        div => {div.style.display = 'none';}
    );

    // Show the selected content
    document.getElementById(contentId).style.display = 'block';
}
function changeImage(newSrc, displayField) {
    console.log('change image')
    const imageElement = document.getElementById(displayField);
    imageElement.src = newSrc;
}
function changeText(newText, displayField) {
    const textElement = document.getElementById(displayField);
    textElement.innerText = newText;
}