function showDiv(){
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
}


const lines = document.querySelectorAll(".line");
const movingLane = document.querySelector(".moving-lane");

function TriggerMovement(element,direction,speed){
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                document.addEventListener("scroll", handleScroll);
            }else{
               document.removeEventListener("scroll", handleScroll);
            }
        })

        const initialPos = direction?-24:0;
        function handleScroll(){
            const TranslateX = (window.innerHeight - entries[0].target.getBoundingClientRect().top) * speed;
            const TotalTranslate = TranslateX + initialPos;
            entries[0].target.style.transform = direction?`translateX(-${TotalTranslate}px)`:`translateX(${TotalTranslate}px)`;
        }
    },{
        threshold: 0.15
    });

    observer.observe(element);
}

lines.forEach((line,idx) => {
    if(idx % 2 === 0){
       TriggerMovement(line,true,0.15); 
    }else{
        TriggerMovement(line,false,0.15);
    }
})

TriggerMovement(movingLane,true,0.4);


function display(elementClass){
    const elementToRotate = document.querySelector(`.${elementClass}`);
    const elementToShow = document.querySelector(`#${elementClass}`);
    elementToRotate.classList.toggle("-rotate-180");
    elementToRotate.classList.toggle("transition");
    elementToShow.classList.toggle("hidden");
}


















// understanding intersection observer

// const cards = document.querySelectorAll(".card");

// const observer = new IntersectionObserver((entries) => { // callback function
//     if(entries[0].isIntersecting){ // instad of usingindex 0 we can also use forEach
//         entries[0].target.classList.remove("-translate-x-1/2");
//         console.log(entries[0].isIntersecting);
//         observer.unobserve(entries[0].target); // unobserving card meaning removing intersection observer
//     }
// },{ // options
//     threshold: 0.30, // the amount of that element must be visible in order to execute above callback function (0-1)

//     // rootMargin:"-200px", // negative means it will make screen 200 pixels smaller wrt to root size
//                          // and putting positive will mean it will make screen 200px larger
//                          // larger screen is usefull for loading images before they appear on screen

//     // root:  we can make any html alement as root in which tracking will tske place
//     // by Default root is viewport
// });

// cards.forEach(card => {
//     observer.observe(card);
// })
