'use strict';

console.log('api working');

const api = (function(){
  
  const baseURL = 'https://thinkful-list-api.herokuapp.com/blakelowrey/bookmarks';

  const createBookmark = function(title, url, desc, rating){
    const apiBody = JSON.stringify({
      title,
      url,
      desc,
      rating
    });
    console.log(apiBody);
    return fetch(baseURL, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: apiBody
    })
      .catch(e => console.log(`createBookmark error: ${e}`));

  };

  const getBookmarks = function(){
    return fetch(baseURL)
      .then(r => r.json())
      .then(bookmarks => {
        console.log('HIT');
        return bookmarks;
      })
      .catch(e => console.log(`getBookmark error : ${e}`));
  };

  const deleteBookmark = function(id){

  };

  return {
    createBookmark,
    getBookmarks,
    deleteBookmark
  };

}());

