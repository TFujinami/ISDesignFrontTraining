$(function(){
	var jq_count = {
		num: $('.count span:first-child'),
		den: $('.count span:last-child'),
		elem: $('.switch').children(),
		cnt: $('.is-selected').length,
		is_selected : 'is-selected',
	}
	$(jq_count.num).text(jq_count.cnt);
	$(jq_count.den).text(jq_count.elem.length);

	$(jq_count.elem).each(function(){
		$(this).on('click', function(){
			$(this).toggleClass(jq_count.is_selected);
			var cnt = $('.is-selected').length;
			$(jq_count.num).text(cnt);
		});
	});
});