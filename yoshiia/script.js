$(function(){
  var legacy = navigator.userAgent.match(/msie\s[0-9|10]+\.\d*/i);

  if(legacy){
    $(window).on('DOMNodeInserted', counterInit);
  }else{
    var mo = new MutationObserver(counterInit);
  }

  counterInit();

  $(document).on('click','.switch-count a',function(e){
    e.preventDefault();
    var $this = $(this),
        $target = $this.parent(),
        thisWrap = $this.closest('.switch-count')[0];
    $target.toggleClass('is-selected');
    counterUpdate(thisWrap);
  });

  function counterInit(){
    legacy ? $(window).off('DOMNodeInserted', counterInit) : mo.disconnect();
    $('.switch-count').each(function(){
      counterUpdate(this);
    });
    legacy ? $(window).on('DOMNodeInserted', counterInit) : mo.observe(document,{childList:true, subtree:true});
  };

  function counterUpdate(wrapper){
    var $wrapper = $(wrapper),
        $count = $wrapper.find('.count'),
        slctLen = $wrapper.find('.is-selected').length,
        total = $wrapper.find('.switch').children().length;
    $count.children().eq(0).text(slctLen).next().text(total);
  }
});