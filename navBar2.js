
// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, set } from "firebase/database";
// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBsDz_ffuSaP-RAZEY3Mjyli65XSIRkkF0",
//   authDomain: "to-do-8ae19.firebaseapp.com",
//   databaseURL: "https://to-do-8ae19-default-rtdb.firebaseio.com",
//   projectId: "to-do-8ae19",
//   storageBucket: "to-do-8ae19.appspot.com", 
//   messagingSenderId: "531554719783",
//   appId: "1:531554719783:web:a1a8cc619e41d474ad1602",
//   measurementId: "G-8291ZP59DE"
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

const userInput = document.querySelector(".user-input");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector(".todo-list");
const deleteItem = document.querySelector(".deleteBtn");
const burger = document.querySelector(".burger");

// let input = userInput.value;
// function writeUserData(input) {
//   const db = getDatabase();
//   set(ref(db, 'users/'), {
//     userVal : input
    
//   });
// }
//burger animation
function slider() {
  const burger = document.getElementById("burger");
  const navLinks = document.querySelector(".nav-links");
  burger.addEventListener("click", () => {
    console.log("hi");
    navLinks.classList.toggle("nav-active");
    console.log(navLinks);
    burger.classList.toggle("toggle");
    console.log(burger);
  });
}
//TODO LIST
//
//MOUSE CLICK EVENT
addBtn.addEventListener("click", function addItem() {
  //getting user input value
  var todoItem = userInput.value;
  var t = document.createTextNode(todoItem);
  console.log(todoItem);
  writeUserData(todoItem);
  if (todoItem === "" || todoItem === " " || todoItem === "  ") {
    alert("You cannot enter a blank to-do item.");
  } 
  else {
    //creating new items
    var addListItem = document.createElement("div");
    addListItem.classList.add("todo");

    var creatingLi = document.createElement("li");
    creatingLi.appendChild(t);

    var createingBtn1 = document.createElement("button");
    createingBtn1.innerHTML = '<i class="fas fa-check"></i>';
    createingBtn1.classList.add("check");

    var createingBtn2 = document.createElement("button");
    createingBtn2.classList.add("deleteBtn");
    createingBtn2.innerHTML = '<i class="far fa-trash-alt"></i>';

    addListItem.appendChild(creatingLi);
    addListItem.appendChild(createingBtn1);
    addListItem.appendChild(createingBtn2);
    todoList.appendChild(addListItem);

    console.log(todoList);
  }
  userInput.value = "";
});

//ENTER KEY EVENT
userInput.addEventListener("keyup", function addItem(event) {
  if (event.keyCode === 13) {
    //getting user input value
    var todoItem = userInput.value;
    var t = document.createTextNode(todoItem);
    console.log(todoItem);
    if (todoItem === "" || todoItem === " " || todoItem === "  ") {
      alert("You cannot enter a blank to-do item.");
    } else {
      //creating new items
      var addListItem = document.createElement("div");
      addListItem.classList.add("todo");

      var creatingLi = document.createElement("li");
      creatingLi.appendChild(t);

      var createingBtn1 = document.createElement("button");
      createingBtn1.innerHTML = '<i class="fas fa-check"></i>';
      createingBtn1.classList.add("check");

      var createingBtn2 = document.createElement("button");
      createingBtn2.classList.add("deleteBtn");
      createingBtn2.innerHTML = '<i class="far fa-trash-alt"></i>';

      addListItem.appendChild(creatingLi);
      addListItem.appendChild(createingBtn1);
      addListItem.appendChild(createingBtn2);
      todoList.appendChild(addListItem);

      console.log(todoList);
    }

    userInput.value = "";
  }
});

//adding function to delete button
todoList.addEventListener("click", deleteCheckBtn);
todoList.addEventListener("keyup", deleteCheckBtn);
function deleteCheckBtn(e) {
  const item = e.target;
  // DELETE ITEM
  if (item.classList[0] === "deleteBtn") {
    let todo = item.parentElement;
    todo.classList.add("animate");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }

  //CHECK ITEM
  if (item.classList[0] === "check") {
    let todo = item.parentElement;
    todo.classList.toggle("done");
    console.log(todo);
  }
}
slider();

//VOICE SPEECH
const btn = document.querySelector(".mic");

btn.addEventListener("click", () => {
  const content = document.querySelector(".content");

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.onstart = () => {
    console.log("voice activated");
  };

  recognition.onresult = (event) => {
    console.log(event);
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    console.log(transcript);
    const getText = document.createTextNode(transcript);

    //creating new items
    var addListItem = document.createElement("div");
    addListItem.classList.add("todo");

    var creatingLi = document.createElement("li");
    creatingLi.appendChild(getText);

    var createingBtn1 = document.createElement("button");
    createingBtn1.innerHTML = '<i class="fas fa-check"></i>';
    createingBtn1.classList.add("check");

    var createingBtn2 = document.createElement("button");
    createingBtn2.classList.add("deleteBtn");
    createingBtn2.innerHTML = '<i class="far fa-trash-alt"></i>';

    addListItem.appendChild(creatingLi);
    addListItem.appendChild(createingBtn1);
    addListItem.appendChild(createingBtn2);
    todoList.appendChild(addListItem);

    console.log(todoList);
  };
  recognition.start();
});

     /*  // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
    
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyBsDz_ffuSaP-RAZEY3Mjyli65XSIRkkF0",
        authDomain: "to-do-8ae19.firebaseapp.com",
        projectId: "to-do-8ae19",
        storageBucket: "to-do-8ae19.appspot.com",
        messagingSenderId: "531554719783",
        appId: "1:531554719783:web:a1a8cc619e41d474ad1602",
        measurementId: "G-8291ZP59DE"
      };
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
     */
