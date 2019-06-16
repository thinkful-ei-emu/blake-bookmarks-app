'use strict';

console.log('store.js is working');

const STORE = (function(){
  let addItem = function(item){
    item.expanded = false;
    this.bookmarks.push(item);
  };
  let initItems = function(){
 
    api.getBookmarks(function(retval){
      this.bookmarks = retval;
      this.bookmarks.forEach(item => item.expanded=false);
    });
  };

  function callbackfun(retval){
    this.bookmarks = retval;
    console.log('STORE');
    this.bookmarks.forEach(item => item.expanded=false);

  }

  return {
    bookmarks:[] ,
    addItem,
    initItems,
  };


}());