const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");

    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        //to add a cross beside each item in the list;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

//to add or remove an item from the list
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

//to ensure that contents don't disappear after refreshing the browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

//to display any previously stored tasks when the app window is reopened
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
//This line calls the showTask function, which retrieves the data from local storage and displays it in the listContainer element.



// Sure, let's break down each line of code:

// 1. `listContainer.addEventListener("click", function(e){`: This line adds an event listener to the `listContainer` element, listening for a click event. When a click event occurs within the `listContainer`, the function specified as the second argument will be executed.

// 2. `if(e.target.tagName === "LI"){`: This line checks if the element that triggered the click event (`e.target`) has a tag name of "LI", indicating that it's a list item.

// 3. `e.target.classList.toggle("checked");`: If the clicked element is a list item ("LI"), this line toggles the presence of the CSS class "checked" on that list item. This typically represents toggling the checked state of a to-do item or similar functionality.

// 4. `else if(e.target.tagName === "SPAN"){`: If the clicked element is not a list item but has a tag name of "SPAN", this line executes.

// 5. `e.target.parentElement.remove();`: This line removes the parent element of the clicked "SPAN" element from the DOM. This is typically used when the "SPAN" element represents an action to delete or remove a list item, and the parent element is the list item itself.

// 6. `}, false);`: This line closes the event listener function and specifies `false` for the useCapture parameter. This parameter is optional and defaults to `false`. When set to `false`, events are dispatched to the target element first and then propagate to ancestors. When set to `true`, events are dispatched to ancestors first, then to the target element. In this case, it's set to `false`,
//  indicating that the event should not use the capturing phase.




//FUNCTION SAVE DATA
// localStorage.setItem("data", listContainer.innerHTML): This line uses the setItem method of the localStorage object to save data. It takes two parameters:
// "data": This is the key under which the data will be stored in the local storage.
// listContainer.innerHTML: This represents the HTML content inside the listContainer element. It will be stored as the value associated with the key "data" in the local storage.

// function showTask(){: This line declares a function named showTask.
//     listContainer.innerHTML = localStorage.getItem("data");: This line retrieves the value associated with the key "data" from the local storage using getItem method and sets it as the HTML content of the listContainer element.