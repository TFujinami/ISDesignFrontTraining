
// クラス名から先頭のドットを取り除くメソッド
String.prototype.parseClass = function(){
	return this.replace(/^\./, '');
}

$(function(){
	var switch_count_name = {
		container: '.jq-switch-count',
		number: '.jq-switch-count-num',
		max: '.jq-switch-count-max',
		item: '.jq-switch-count-item',
		trigger: '.jq-switch-count-trigger',
		state_selected: '.is-selected',
	}
	switch_count_name.state_selected_nd = switch_count_name.state_selected.parseClass();

	$(document).on('click updateItem', switch_count_name.trigger, function(e){
		var trigger_element = $(this);
		var item_element = trigger_element.closest(switch_count_name.item);

		var container_element = trigger_element.closest(switch_count_name.container);
		var number_element = container_element.find(switch_count_name.number);
		var max_element = container_element.find(switch_count_name.max);

		if (e.type == 'click'){
			item_element.toggleClass(switch_count_name.state_selected_nd);
		}

		var number = container_element.find(switch_count_name.item + switch_count_name.state_selected).size();
		var max = container_element.find(switch_count_name.item).size();

		number_element.text(number);
		max_element.text(max);
	});

	var updateSwitchCount = function(){
		$(switch_count_name.container).each(function(){
			var container_element = $(this);
			var item_element = container_element.find(switch_count_name.item).eq(0);
			var trigger_element = item_element.find(switch_count_name.trigger);
			trigger_element.trigger('updateItem');
		});
	}

	$(window).bind('load update', updateSwitchCount);
	// 要素追加後は $(window).trigger('update'); を呼ぶ
})

