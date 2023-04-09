const closeButtons = document.querySelectorAll(".container");

closeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("close")) {
      const card = event.target.parentNode;
      card.remove();
      event.preventDefault();
    }
  });
});


// First, select the container element and the new card form
const container = document.querySelector(".container");
const newCardForm = document.querySelector("#new-card-form");

// Next, add an event listener to the form to listen for a submit event
newCardForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values of the company name and phone number inputs
  const companyNameInput = document.querySelector("#company-name");
  const phoneNumberInput = document.querySelector("#phone-number");
  const companyName = companyNameInput.value;
  const phoneNumber = phoneNumberInput.value;

  // Create a new card element
  const newCard = document.createElement("div");
  newCard.classList.add("card");

  // Create a new span element for the card name and set its text content
  const newName = document.createElement("span");
  newName.classList.add("nama");
  newName.textContent = companyName;

  // Create a new span element for the phone number and set its text content
  const newPhone = document.createElement("span");
  newPhone.classList.add("tel");
  newPhone.textContent = phoneNumber;

  // Create a new anchor element for the close button and set its text content
  const newClose = document.createElement("a");
  newClose.classList.add("close");
  newClose.href = "";
  newClose.textContent = "×";

  newCard.appendChild(newName);
  newCard.appendChild(newPhone);
  newCard.appendChild(newClose);

  // Finally, append the new card div to the container and reset the form
  container.appendChild(newCard);
  newCardForm.reset();
});
