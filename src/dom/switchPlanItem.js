/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
const planItems = document.querySelectorAll('.plan-items .wrapper');
const planItemsList = Array.from(planItems);
const itemTitle = document.querySelector('.container #plan-item-title');

function switchItemActiveState(items) {
  items.forEach((item) => {
    item.addEventListener('click', () => {
      items.forEach((itm) => {
        itm.classList.remove('active');
      });
      item.classList.add('active');
    });
  });
}

function getSelectedItemName(items) {
  let selectedItemName;
  items.forEach((item) => {
    if (item.classList.contains('active')) {
      selectedItemName = item.lastElementChild.textContent;
    }
  });
  return selectedItemName;
}

function changeItemTitle(items, itmTitle) {
  items.forEach((item) => {
    item.addEventListener('click', () => {
      const selectedName = getSelectedItemName(items);
      if (selectedName == null) return;
      itmTitle.textContent = selectedName;
    });
  });
}

export default function switchItems() {
  switchItemActiveState(planItemsList);
  changeItemTitle(planItemsList, itemTitle);
}
