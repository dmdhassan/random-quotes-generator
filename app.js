const reviews = [
     {
          id: 1,
          name: "Ray Krock",
          job: "ux desiner",
          img: "./person1.png",
          text: "I have always belived that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy"
     },
     {
          id: 2,
          name: "Simeon Lindstorm",
          job: "web desiner",
          img: "./person2.png",
          text: "When we have respect for ourselves and others, we gravitate towards connections that encourages that"
     },
     {
          id: 3,
          name: "Dalai Lama",
          job: "Student",
          img: "./person3.png",
          text: "Anger is the ultimate destroyer of your own peace of mind"
     },
     {
          id: 4,
          name: "Wayne Gretzy",
          job: "software developer",
          img: "./person4.png",
          text: "Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don't take the shot"
     },
     {
          id: 5,
          name: "Kahil Gibran",
          job: "product desgner",
          img: "./person5.png",
          text: "The true wealth of a nation lies not in it's gold nor silver but in it's learning, wisdom and the uprigtness of it's sons"
     }
]



const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


let currentItem = 0;



window.addEventListener("DOMContentLoaded", function () {
     showPerson();
});


function showPerson() {
     let item = reviews[currentItem];
     img.src = item.img;
     author.textContent = item.name;
     job.textContent = item.job;
     info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
     currentItem++;
     if(currentItem > reviews.length - 1) {
          currentItem = 0;
     }
     showPerson();
});
prevBtn.addEventListener("click", function () {
     currentItem--;
     if(currentItem < 0) {
          currentItem = reviews.length - 1;
     }
     showPerson();
});

randomBtn.addEventListener("click", function () {
     currentItem = Math.floor(Math.random() * reviews.length);
     showPerson();
})