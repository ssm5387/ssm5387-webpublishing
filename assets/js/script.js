(function($) {
	let observer = new IntersectionObserver((e)=>{
		e.forEach(()=>{
			$('.first.circle').circleProgress({
				value: 0.8
				}).on('circle-animation-progress', function(event, progress) {
				$(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
			});

			$('.second.circle').circleProgress({
				value: 0.85
			}).on('circle-animation-progress', function(event, progress) {
				$(this).find('strong').html(Math.round(85 * progress) + '<i>%</i>');
			});

			$('.third.circle').circleProgress({
				value: 0.9
				}).on('circle-animation-progress', function(event, progress) {
				$(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
			});

			$('.fourth.circle').circleProgress({
				value: 0.95
				}).on('circle-animation-progress', function(event, progress) {
				$(this).find('strong').html(Math.round(95 * progress) + '<i>%</i>');
			});
		})
	})
	let skill = document.querySelector('#skill')
	observer.observe(skill);
})(jQuery);
  