
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

/*$('img').click(function(){
	console.log($(this).attr('alt'));
	console.log($(this).attr(width));
	console.log($(this).attr(height));
	});
*/

var img = new Image();
img.onclick = function() {
  console.log('Image Width:  ' + this.width + 'x' + 'Image Height:  ' + this.height + 'Image Alt:  ' + this.alt);
}


