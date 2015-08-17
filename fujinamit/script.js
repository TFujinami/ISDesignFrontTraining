
// クラス名から先頭のドットを取り除くメソッド
String.prototype.parseClass = function(){
	return this.replace(/^\./, '');
}

$(function(){
	var switch_count_name = {
		container: '.jq-switch-count',
		state_loaded: '.is-loaded',
		number: '.jq-switch-count-num',
		max: '.jq-switch-count-max',
		item: '.jq-switch-count-item',
		trigger: '.jq-switch-count-trigger',
		state_selected: '.is-selected',
	}
	switch_count_name.state_loaded_nd = switch_count_name.state_loaded.parseClass();
	switch_count_name.state_selected_nd = switch_count_name.state_selected.parseClass();

	var initSwitchCount = function(){
		$(switch_count_name.container + ':not(' + switch_count_name.state_loaded + ')').each(function(){
			var container_element = $(this);
			var number_element = container_element.find(switch_count_name.number);
			var max_element = container_element.find(switch_count_name.max);

			container_element.on('click', switch_count_name.trigger, function(){
				var trigger_element = $(this);
				var item_element = trigger_element.closest(switch_count_name.item);

				item_element.toggleClass(switch_count_name.state_selected_nd);
				updateCount();
			});

			var updateCount = function(){
				var number = container_element.find(switch_count_name.item + switch_count_name.state_selected).size();
				var max = container_element.find(switch_count_name.item).size();

				number_element.text(number);
				max_element.text(max);
			}
			updateCount();

			$(window).bind('update', updateCount);

			container_element.addClass(switch_count_name.state_loaded_nd);
		});
	}

	$(window).bind('load update', initSwitchCount);
	// 要素追加後は $(window).trigger('update'); を呼ぶ
})

