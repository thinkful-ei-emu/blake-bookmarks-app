'use strict';

console.log('rating-list.js is working');

const bookmarkList = (function(){

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