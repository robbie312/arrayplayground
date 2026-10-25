let array = [];
const elementInput = document.getElementById("elementInput");
const addLastButton = document.getElementById("addLast");
const removeLastButton = document.getElementById("removeLast");

function addElement() {
    const element = elementInput.value;

    array.push(element);

    console.log(array);

      displayArray();
}

addLastButton.addEventListener("click", addElement);

function displayArray() {

    const arrayElements = document.getElementById("arrayElements");

    arrayElements.innerHTML = "";

    array.forEach(function(element, index) {

        const paragraph = document.createElement("p");

        paragraph.textContent = "Element " + (index + 1) + ": " + element + " ";

        const removeButton = document.createElement("button");

        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", function() {
            removeElement(index);
        });

        paragraph.appendChild(removeButton);

        arrayElements.appendChild(paragraph);

    });
}

function removeLastElement() {

    array.pop();

    displayArray();

}

removeLastButton.addEventListener("click", removeLastElement);

const removeFirstButton = document.getElementById("removeFirst");

function removeFirstElement() {
    array.shift();
    displayArray();
}

removeFirstButton.addEventListener("click", removeFirstElement);

const addFirstButton = document.getElementById("addFirst");

function addFirstElement() {

    const element = elementInput.value;

    if (element.trim() === "") {
        alert("Please enter an item first.");
        return;
    }

    array.unshift(element);

    displayArray();
}

addFirstButton.addEventListener("click", addFirstElement);

function removeElement(index) {

    array.splice(index, 1);

    displayArray();

}