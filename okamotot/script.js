
$(function(){

 var trigger = $(".switch > li");
 var cnt = 0;
 var classCount = $(".is-selected").length; 
 
 $(trigger).each(function(){
  ++cnt;
  $("p.count").find('span:gt(0)').text(cnt);
  $("p.count").find('span:lt(1)').text(classCount);
  
  $(this).click(function() {
   $(this).toggleClass("is-selected");
    var classCount = $(".is-selected").length;
    $("p.count").find('span:lt(1)').text(classCount)
   });
 });

});
