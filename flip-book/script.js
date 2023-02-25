// Reference to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");
const paper8 = document.querySelector("#p8");
const paper9 = document.querySelector("#p9");


// Event listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPages = 9;
let maxLocation = numOfPages + 1;

function openBook()
{

}

function closeBook()
{
    
}

function goNextPage()
{
    if(currentLocation < maxLocation)
    {
        switch(currentLocation)
        {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                break;
            case 2:
                paper2.classList.add("flipped");
                break;
            case 3:
                paper3.classList.add("flipped");
                break;
            case 4:
                paper4.classList.add("flipped");
                break;
            case 5:
                paper5.classList.add("flipped");
                break;
            case 6:
                paper6.classList.add("flipped");
                break;
            case 7:
                paper7.classList.add("flipped");
                break;
            case 8:
                paper8.classList.add("flipped");
                break;
            case 9:
                paper9.classList.add("flipped");
                closeBook();
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage()
{
    
}