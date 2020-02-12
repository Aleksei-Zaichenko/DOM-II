// Your code goes here

//prevents default action
const stopLinks = document.querySelectorAll(".nav-link");

stopLinks.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
    }) 
})

const body = document.querySelector('body');

body.addEventListener('click', () => {
  body.style.backgroundColor="red";
})

//stopLinks[0]



const leadingHeader = document.querySelector('.logo-heading');

leadingHeader.addEventListener('mouseover', (event) => {
    event.target.style.background = 'pink';
    event.target.textContent = "BUS FUN";
},false)

leadingHeader.addEventListener('mouseleave', (event) => {
    event.target.style.background = 'white';
    event.target.textContent = "FUN BUS";
},false)

//hiddes middle section when the window is resized
const middlePart = document.querySelectorAll('.content-section');

window.addEventListener('resize', () => {
    middlePart.forEach(item =>{
        item.style.display = 'none';
    })
})

window.addEventListener('scroll', () => {
    middlePart.forEach(item =>{
        item.style.display = 'flex';
    })
})

//Changes the color of the header2 in the "intro" 
const h2InHeader = document.querySelector('.intro h2');

h2InHeader.addEventListener("mouseover", (event) => {
    
    event.target.style.color = "orange";
})

h2InHeader.addEventListener("mouseleave", (event) => {
    
    event.target.style.color = "black";
})


//Changes the size of the image in the "content-destination" 
//and changes the background-color of the page while cursor is
//on the image
const ImgContentDestination = document.querySelector('.content-destination img');

ImgContentDestination.addEventListener("mouseenter", () => {
    document.body.style.background = 'lightblue'; 
    ImgContentDestination.style.transform = "scale(1.2)";
})

ImgContentDestination.addEventListener("mouseleave", () => {
    document.body.style.background = 'white'; 
    ImgContentDestination.style.transform = "scale(1)";
  })

//Changes the background-color of the page when either button is clicked on
const buttons = document.querySelectorAll('.btn');

buttons[0].addEventListener('click', () => {
        document.body.style.background = 'CadetBlue'; 
        event.stopPropagation();
})

buttons[1].addEventListener('click', () => {
    document.body.style.background = 'aliceblue'; 
    event.stopPropagation();
})

buttons[2].addEventListener('click', () => {
    document.body.style.background = 'aqua'; 
    event.stopPropagation();
})