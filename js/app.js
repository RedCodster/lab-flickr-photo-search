// YOUR CODE HERE
$(document).ready(function () {

  var bindSearchButton = function () {
    $('#bindSearchButton').on('click', function (e) {
      e.preventDefault();

  var getPhotos = function () {
  $.ajax({
        url: "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        data: {
          format: 'json'
        method: "GET"
        success: function (response, status) {
        }

        },
        dataType: 'jsonp',
        error: // YOUR CALLBACK
      });
  };

  var init = function () {
    getPhotos();
    bindSearchButton();
  };


// var getAllDonuts = function () {
//     $.ajax({
//       url: "http://api.doughnuts.ga/doughnuts",
//       method: "GET",
//       success: function (response, status) {
//         response.forEach(function (elem) {
//           createNewLi(elem.id, elem.flavor, elem.style);
//         });
//         bindButtons();
//       },
//       error: function (response, status) {
//         console.log(response);
//       }
//     });
//   };
)}