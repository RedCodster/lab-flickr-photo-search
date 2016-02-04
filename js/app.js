// YOUR CODE HERE
$(document).ready(function () {

  var srchQuery;
  var srchMode;

  var bindSearchButton = function () {
    $('#search').on('click', function (e) {
      e.preventDefault();
      srchQuery = $('input.form-control').val();
      srchMode = $('selectpicker.form-control').val();
      getPhotos(srchQuery, srchMode);
    });
  };


  var getPhotos = function (tags, mode) {
    $.ajax({
        url: "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        method: "GET",
        data: {
          format: 'json',
          tags: tags,
          tagmode: mode
        },
        dataType: 'jsonp',
        success: function (response, status) {
          $('div#images').empty();
          var images = response.items;
          images.forEach(function (elem,index) {
            showNewPic(elem, index);
          });
        },
        error: function (response, status) {
        }
      });
    };

  var init = function () {
    bindSearchButton();
  };

  var showNewPic = function (elem, index) {
    var newPic = ('<div class="row col-xs-3"><img class="thumbnail" src="'+elem.media.m+'"></div>');
    $('#images').prepend(newPic);
  };

    init();

});