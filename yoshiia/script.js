$(function(){
  $(document).on('click','.switch a',function(e){
    e.preventDefault();
    $(this).parent().toggleClass('is-selected');
    selectCounter();
  });

  selectCounter();

  function selectCounter(){
    var slctLen = $('.is-selected').length,
        total = $('.switch').children().length;
    $('.count').children().eq(0).html(slctLen).next().html(total);
  }
});