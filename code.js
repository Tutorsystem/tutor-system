var menubtn=document.getElementById("menubtn")
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
// var overlay=document.getElementById("overlay")

sidenav.style.right="-250px";

menubtn.onclick=function(){
    if(sidenav.style.right=="-250px"){
        sidenav.style.right="0px";
        menuicon.src="img/close.png";
        // overlay.style.right="0px";
    }
    else{
        sidenav.style.right="-250px";
        menuicon.src="img/menu.png";
        // overlay.style.right="-250px";
    }
}


// var scroll = new SmoothScroll('a[href*="#"]', {
// 	speed: 2000,
// 	speedAsDuration: true
// });


// Get all the navigation links
const navLinks = document.querySelectorAll('nav a');
const naviLinks = document.querySelectorAll('div a');

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior

        const targetSection = document.querySelector(this.getAttribute('href')); // Get the target section

        if (targetSection) {
            const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - 100; // Calculate the offset with an adjustment of 120 pixels

            // Scroll to the target section smoothly
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

naviLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior

        const targetSection = document.querySelector(this.getAttribute('href')); // Get the target section

        if (targetSection) {
            const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - 100; // Calculate the offset with an adjustment of 120 pixels

            // Scroll to the target section smoothly
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


document.getElementById('servicebtn').addEventListener('click', function () {
    const targetSection = document.getElementById('service'); // Replace 'section2' with the ID of the section you want to scroll to
    
    if (targetSection) {
        const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - 100; // Adjust the offset as needed

        // Scroll to the target section smoothly
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
});