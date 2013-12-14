 
function getWidth() {
    if (self.innerWidth) {
       return self.innerWidth;
    }
    else if (document.documentElement && document.documentElement.clientHeight){
        return document.documentElement.clientWidth;
    }
    else if (document.body) {
        return document.body.clientWidth;
    }
    return 0;
}
console.log('Browser Width:  ' + self.innerWidth);



 $('#add-li').on("click", function () {
		var $litext = $('#li-text');
		$('#add-li-list').append('<li>' + $litext.val()) + '</li>');
		
	});