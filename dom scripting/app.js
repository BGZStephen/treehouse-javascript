const form = document.getElementById(`registrar`);
const input = form.querySelector(`input`);
const ul = document.getElementById(`invitedList`);

// function to build the LI based on the text information provided on the submit event listener

const createLi = (text) => {
  const li = document.createElement(`li`);
  li.textContent = text;
  const label = document.createElement(`label`);
  label.textContent = `Confirmed`;
  const checkbox = document.createElement(`input`);
  checkbox.type = `checkbox`;
  label.appendChild(checkbox)
  const button = document.createElement(`button`);
  button.textContent = `Remove`;
  li.appendChild(label)
  li.appendChild(button)
  return li;
}

form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const text = input.value;
  const li = createLi(text) // send text to createLi function
  ul.appendChild(li);
  input.value = ``;
})

ul.addEventListener(`change`, (e) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const li = checkbox.parentNode.parentNode;

  if(checked) {
    li.className=`responded`
  } else {
    li.className=``
  }
})

ul.addEventListener(`click`, (e) => {
  if(e.target.tagName === `BUTTON`) {
    const li = e.target.parentNode;
    const ul = li.parentNode;
    ul.removeChild(li);
  }
})
