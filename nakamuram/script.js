
$(function (){

	// class定義
	var app = {
		root        : '.switch-count',
		list_parent : '.switch',
		count_area  : '.count',
		is_selected : 'is-selected',
	};

	// classを付け外しするメソッド
	function toggleClass($target, CLASS){
		return  $target.hasClass(CLASS) ? $target.removeClass(CLASS) : $target.addClass(CLASS);
	}

	// 要素の数を数えるメソッド
	function countLength($target){
		return $target.length;
	}

	$.each($(app.root), function (){

		// DOMキャッシュ
		var $root                = $(this),
			$list_parent         = $root.find($(app.list_parent)),
			$count_area          = $root.find($(app.count_area).children('span')),
			$count_area_selected = $count_area.eq(0), // .is-selectedがついている要素の数が表示されるエリア
			$count_area_total    = $count_area.eq(1)  // 要素のトータルの数が表示されるエリア
			;

		// ロード時の挙動
		$(window).on('load', function (){

			var total_count = countLength($list_parent.children()),
				selected_count = countLength($list_parent.children('.' + app.is_selected));
			
			// ロード時に要素の数（トータル）をカウントして、.swich > span.eq(1) に表示する
			$count_area_total.text(total_count);
			
			// ロード時に.is-selectedが付いている要素の数をカウントして、.swich > span.eq(0) に表示する
			$count_area_selected.text(selected_count);
		});

		// クリック時の挙動
		$list_parent.children().find('a').on('click', function (e){
			
			// e.preventDefault();   // html側でvoid(0) してるからいらない

			// クリック毎にclassを付け外し
			var $target = $(this).parent();
			toggleClass($target, app.is_selected);

			// クリック毎に.is-selectedが付いている要素の数をカウントして、.swich > span.eq(0) に表示する
			var selected_count = countLength($list_parent.children('.' + app.is_selected));
			$count_area_selected.text(selected_count);

		});

	});

});
