$(document).ready(function(){
	if($('.load-more-button').length)
	{
		var btn = $('.load-more-button');
		var loading = false;
		btn.click(function(e){
			e.preventDefault();
			loadMore(btn);
		});

		$(window).scroll(function(){
			var p = $(this).scrollTop();
			var h = $(this).height();
			var b = btn.offset().top;

			if((p+(h/1.5)) > b && loading === false)
			{
				loadMore(btn);
				loading = true;
			}
		});
	}

	function loadMore(btn){
		var page = btn.data('page'),
			base = btn.data('url-base');

		btn.html('Loading <i class="fa fa-spin fa-spinner"></i>');
		
		$("<div>").load(base+"/page/"+page+" #blog-articles", function() {
			$("#blog-articles").append($(this).find("#blog-articles").html());
			btn.data('page',page+1);

			if($(this).find(".blog-articles").children().length)
			{
				btn.html('Load More <i class="fa fa-caret-down"></i>');
				loading = false;
			}
			else
			{
				btn.remove();
			}
		});
	}
});