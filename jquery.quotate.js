(function($) {
	
	$.fn.quotate = function(options) {
		
		var quoteList;
		
		var defaults = {
			type: "json",
			interval: 10,
			quoteClass: "quote",
			authorClass: "author"
		};
		var options = $.extend(defaults, options);
		
		// private dataReady function
		function dataReady() {
			var interval = options.interval * 1000;
			$(this).everyTime(interval, function() {
				$(this).html('<div class="'+options.quoteClass+'"></div><div class="'+options.authorClass+'"></div>'); // clear out container element
				if (quoteList.length > 0) {
					var limit = quoteList.length;
					var randIndex = Math.floor(Math.random()*limit+1);
					var randomQuote = quoteList[randIndex];
					$(this).find("."+options.quoteClass).html(randomQuote.quote);
					$(this).find("."+options.authorClass).html(randomQuote.author);
				} else {
					return false;
				}
			});
		}
		
		return this.each(function() {
			// Check if we have the jQuery Timers plugin. If not, go no further.
			if (typeof(everyTime) == "function") {
				if (typeof(options.type) == "undefined") {
					
				} else {
					if (options.type == "json") {
						
					} else if (options.type == "xml") {
						
					} else {
						return false;
					}
				}
			} else {
				return false;
			}
		});
	};
	
}) (jQuery);