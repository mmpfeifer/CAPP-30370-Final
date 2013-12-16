$('img').click(function(){
	console.log('Img alt:  ' + $(this).attr('alt'));
	console.log('Img Width:  ' + $(this).width());
	console.log('Img Height: ' + $(this).height());
	});

$('h1, h2, h3, h4, h5, h6').click(function(){
	console.log('Header Text: ' + $(this).text());
	console.log('Header Color: ' + $(this).css('color'));
	console.log('Header Size: ' + $(this).css('fontSize'));

	});

 $('#add-li').on("click", function () {
		var $litext = $('#li-text');
		$('#add-li-list').append('<li>' + $litext.val() + '</li>');
		
	});

 $(window).on("load resize", function(){
      console.log( 'Width: ' + $(window).width() );
          });







	