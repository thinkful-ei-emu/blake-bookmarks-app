'use strict';

console.log('rating-list.js is working');

const bookmarkList = (function(){

  function generateItemElement(item) {

    const checkedClass = item.checked ? 'shopping-item__checked' : '';

    const editBtnStatus = item.checked ? 'disabled' : '';



    let itemTitle = `<span class="shopping-item ${checkedClass}">${item.name}</span>`;

    if (item.isEditing) {

      itemTitle = `

        <form class="js-edit-item">

          <input class="shopping-item" type="text" value="${item.name}" />

        </form>

      `;

    }

  

    return `

      <li class="js-item-element" data-item-id="${item.id}">

        ${itemTitle}

        <div class="shopping-item-controls">

          <button class="shopping-item-edit js-item-edit" ${editBtnStatus}>

            <span class="button-label">edit</span>

          </button>

          <button class="shopping-item-toggle js-item-toggle">

            <span class="button-label">check</span>

          </button>

          <button class="shopping-item-delete js-item-delete">

            <span class="button-label">delete</span>

          </button>

        </div>

      </li>`;

  }
  function render() {

    // Filter item list if store prop is true by item.checked === false

    let items = [ ...store.items ];

    if (store.hideCheckedItems) {

      items = items.filter(item => !item.checked);

    }

  

    // Filter item list if store prop `searchTerm` is not empty

    if (store.searchTerm) {

      items = items.filter(item => item.name.includes(store.searchTerm));

    }

  

    // render the shopping list in the DOM

    console.log('`render` ran');

    const shoppingListItemsString = generateShoppingItemsString(items);

  

    // insert that HTML into the DOM

    $('.js-shopping-list').html(shoppingListItemsString);

  }


  

  let showHideForm = function(){
    $('.form-toggle').click(() => {
      console.log('showHideForm working');
      $('#js-bookmark-form').toggle();
    });

  };

  let addBookmark = function(){
    $('#js-bookmark-form').submit((event) => {
      event.preventDefault();
      const nameEntry = $('input[name ="bookmark-name-entry"]').val();
      console.log(nameEntry);
      const urlEntry = $('input[name ="bookmark-url-entry"]').val();
      console.log(urlEntry);
      const descEntry = $('input[name ="bookmark-description-entry"]').val();
      console.log(descEntry);
      const ratingEntry = $('input[name ="bookmark-rating-entry"]').val();
      console.log(ratingEntry);
      api.createBookmark(nameEntry,urlEntry,descEntry,ratingEntry)
        .then(res => res.json())
        .then(e => {
          STORE.addItem(e);
        });
    });

  };
  return {
    showHideForm,
    addBookmark
  };

}());

bookmarkList.showHideForm();
bookmarkList.addBookmark();