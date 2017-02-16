const toggleList = document.getElementById(`toggleList`);
const listDiv = document.querySelector(`.list`);
const descriptionInput = document.querySelector(`input.description`);
const descriptionP = document.querySelector(`p.description`);
const descriptionButton = document.querySelector(`button.description`);
const listUl = listDiv.querySelector(`ul`)
const addItemInput = document.querySelector(`input.addItemInput`)
const addItemButton = document.querySelector(`.addItemButton`)
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = `lightskyblue`
lastListItem.style.backgroundColor = `lightsteelblue`

const attachListItemsButtons = (li) => {
  let up = document.createElement(`button`)
  up.className = `up`;
  up.textContent = `Up`;
  li.appendChild(up)

  let down = document.createElement(`button`)
  down.className=`down`;
  down.textContent=`Down`;
  li.appendChild(down)

  let remove = document.createElement(`button`)
  remove.className=`removeItem`;
  remove.textContent=`Remove`;
  li.appendChild(remove)
}

for(let i = 0; i < lis.length; i++) {
  attachListItemsButtons(lis[i]);
}

listUl.addEventListener(`click`, (event) => {
    if(event.target.tagName == `BUTTON`) {
      if(event.target.className == `removeItem`) {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
      }
      if(event.target.className == `up`) {
        let li = event.target.parentNode;
        let prevLi = li.previousElementSibling;
        let ul = li.parentNode;
        if(prevLi) {
            ul.insertBefore(li, prevLi);
        }
      }
      if(event.target.className == `down`) {
        let li = event.target.parentNode;
        let nextLi = li.nextElementSibling;
        let ul = li.parentNode;
        if(nextLi) {
            ul.insertBefore(nextLi, li);
        }
      }
    }
  })

// listDiv.addEventListener(`mouseout`, (event) => {
//   if(event.target.tagName == `LI`) {
//       event.target.textContent = event.target.textContent.toLowerCase();
//     }
//   })

toggleList.addEventListener(`click`, () => {
  if(listDiv.style.display == 'none') {
    listDiv.style.display = `block`;
    toggleList.textContent = `Hide list`;
  } else {
    listDiv.style.display = `none`;
    toggleList.textContent = `Show list`;
  }
})

descriptionButton.addEventListener(`click`, () => {
  descriptionP.textContent = descriptionInput.value + `:`;
  descriptionInput.value = ``;
})

addItemButton.addEventListener(`click`, () => {
  let ul = document.getElementsByTagName(`ul`)[0];
  let li = document.createElement(`li`);
  li.textContent = addItemInput.value;
  attachListItemsButtons(li);
  ul.appendChild(li);
  addItemInput.value = ``;
})
