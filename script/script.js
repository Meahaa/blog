document.onreadystatechange = function() {
	if (document.readyState === "complete") {
		var portfolios = document.querySelectorAll(".portfolio_bg");

		for (var i = 0; i < portfolios.length; i++) {
			var portfolio = portfolios[i];
			setTimeout(function(p) {
				var bg = p.querySelector(".portfolio_bg_img");

				p.addEventListener("mouseenter", function() {
					bg.classList.add("portfolio-hover");
				});

				p.addEventListener("mouseleave", function() {
					bg.classList.remove("portfolio-hover");
				});
			}(portfolio), 1);
		}
	}
}