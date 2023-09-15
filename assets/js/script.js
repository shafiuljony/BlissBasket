// init Isotope
var $grid = $('.collection-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtn();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
  });

  var filterBtn = $('.filter-button-group').find('button');
  function resetFilterBtn() {
    filterBtn.each(function(){
      $(this).removeClass('active-filter-btn');
    });
  }