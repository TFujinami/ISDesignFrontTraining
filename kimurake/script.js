$(function(){
	var jq_count = {
		root:         '.switch-count', // カウンタとスイッチを包括するクラス
		count_area:   '.count',        // カウントエリアを包括するクラス
		num:          '.num',          // 色のついた箱の数
		total:        '.total',        // 箱の総数
		elem_parent:  '.switch',       // 箱を包括するクラス
		is_selected : 'is-selected',   // 色つきクラス
	}

	// 個数をはかるやつ
	function countLength($target) {
		return $target.length;
	}

	// カウンタとスイッチの固まりごとに実行してね
	$(jq_count.root).each(function(){
		var $root = $(this),									// 今いる固まり
			$elem_parent = $root.find($(jq_count.elem_parent)),
			$count_area = $root.find($(jq_count.count_area))
			;

		$(window).on('load', function(){
			var total_count = countLength($elem_parent.children()),
				num_count = countLength($elem_parent.children('.' + jq_count.is_selected));

			$root.find($(jq_count.total)).text(total_count);
			$root.find($(jq_count.num)).text(num_count);
		});

		var $element = $root.find(jq_count.elem_parent).children(); // 今いる固まりの中の箱を指定
		// 今いる固まりの中の箱全部を対象に実行してね
		$element.each(function(){
			$(this).on('click', function(){
				$(this).toggleClass(jq_count.is_selected);
				var num_count = countLength($elem_parent.children('.' + jq_count.is_selected));
				$root.find($(jq_count.num)).text(num_count);
			});
		});
	});
});