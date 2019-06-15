'use strict';

console.log('store.js is working');

const STORE = (function(){
  let bookmarks = [];
  let addItem = function(item){
    item.expanded = false;
    bookmarks.push(item);
  };
  let initItems = function(){
 
    this.bookmarks = api.getBookmarks();
    console.log('STORE');
    this.bookmarks.forEach(item => item.expanded=false);
    //console.log(`store bookmarks: ${this.bookmarks}`);
  };

  return {
    bookmarks,
    addItem,
    initItems,
  };


}());