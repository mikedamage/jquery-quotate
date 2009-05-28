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
			$(this).html('<div class="'+options.quoteClass+'"></div><div class="'+options.authorClass+'"></div>'); // clear out container element
			$(this).everyTime(interval, function() {
				
				if (quoteList.length > 0) {
					var limit = quoteList.length;
					var randIndex = Math.floor(Math.random()*limit);
					var thisQuote = quoteList[randIndex];
					
					$(this).find("."+options.quoteClass).add("."+options.authorClass).fadeOut("slow");
					$(this).find("."+options.quoteClass).queue(function() {
						$(this).html(thisQuote.quote);
						$(this).dequeue();
					});
					$(this).find("."+options.authorClass).queue(function() {
						$(this).html("-- "+thisQuote.author);
						$(this).dequeue();
					});
					$(this).find("."+options.quoteClass).add("."+options.authorClass).fadeIn("slow");
					
				} else {
					return false;
				}
			});
		}
		
		return this.each(function() {
			// Check if we have the jQuery Timers plugin. If not, go no further.
			if (typeof(everyTime) == "function") {
				switch (options.type) {
					case "json":
						$.getJSON(options.quoteFile, function(json) {
							quoteList = json;
							dataReady();
						});
						break;
					case "xml":
						$.get(options.quoteFile, function(xml) {
							// process the xml with ninja power
							//dataReady(); // call dataReady when done
						}, "xml");
						break;
					case "list":
						quoteList = options.quoteList;
						dataReady();
						break;
					default:
						if (window.console)
							console.log("Invalid type supplied for quote list");
						break;
				} 
			}
		});
	};
	
}) (jQuery);