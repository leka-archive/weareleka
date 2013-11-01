//This function .acive the <li> of the .nav in navbar.php
$(function(){

  var url = window.location.pathname;
  var activePage = url.substring(url.lastIndexOf('/') + 1);

  $('.nav li a').each(function(){
    var currentPage = $(this).attr('href');
    if (activePage === currentPage) {
      $(this).parent().addClass('active');
    }
  });
});