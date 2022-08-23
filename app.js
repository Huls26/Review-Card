"use strict"

// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


let main = function() {
  // buttons
  let buttons = document.querySelectorAll(".btn");
  
  for (let btn of buttons) {
    btn.addEventListener("click", event => {
      let n = document.querySelector(".name").textContent;
      let idx = findIndex(n, reviews);

      let classList = Array.from(event.currentTarget.classList);
      let index = buttonValues(classList, idx);
      let {id, name, job, img, text} = reviews[index];
      updateReview(id, name, job, img, text);
    })
  }
}()

function updateReview(id, name, job, img, text) {
  const idNumber = id;
  
  let n = document.querySelector(".name");
  n.innerText = name;

  let j = document.querySelector(".job-title");
  j.innerText = job;

  let i = document.querySelector(".profile-photo");
  i.setAttribute("src", img)

}

// output index for reviews
function buttonValues(classList, index) {
  if (classList.includes("btn-right")) {
    index = leftAndRight(1, index)
  } else if (classList.includes("btn-left")) {
    index = leftAndRight(-1, index)
  } else {
    let id = random(reviews)

    index = findIndex("none", reviews, id);
  }

  return index
}

// find index 
function findIndex(name = "none", reviews, id) {
  let idx = reviews.reduce((prev, element, index) => {
    if (element.name === name.toLowerCase() || element.id === id) {
      return index
    }

    return prev
  }, -1)

  return idx
}

// button left and right
// getting the index
function leftAndRight(btn, index) {
    const size = reviews.length;

    index += btn;

    if (index > size - 1) {
      index = 0
    } else if (index < 0) {
      index = size - 1
    } 

    return index
}

// random button
// give the id
function random(reviews) {
    let length = reviews.length;
    let id = Math.ceil(Math.random() * length);

    return id
}


