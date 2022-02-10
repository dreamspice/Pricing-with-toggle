const toggle = document.getElementById("toggle");
const columnOne = document.getElementById("one-yearly");
const columnTwo = document.getElementById("two-yearly");
const columnThree = document.getElementById("three-yearly");



let clicked = false;
toggle.onclick = function() {
    if(!clicked) {
        clicked = true;
        columnOne.innerHTML = `&dollar;19.99`;
        columnTwo.innerHTML = `&dollar;24.99`;
        columnThree.innerHTML = `&dollar;39.99`;
    } else {
        clicked = false;
        columnOne.innerHTML = `&dollar;199.99`;
        columnTwo.innerHTML = `&dollar;249.99`;
        columnThree.innerHTML = `&dollar;399.99`;
    }
}
