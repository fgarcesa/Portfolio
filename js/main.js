function verScroll(){
	$(document).scroll(function(){
        let scroll = $(document).scrollTop();
        console.log(scroll)
        if (scroll > 200){
        	$("#btnup").addClass("active");
        }
        else if (scroll <= 200){
        	$("#btnup").removeClass("active");
        }
    })
}

$(document).ready(function(){
	verScroll()
})	

$(document).ready(function(){
	var typed = new Typed('.type', {
  	strings: [
  		'Felipe Garcés Acero', 
  		'an Engineer',
  		'a Web Developer',],

  		typeSpeed: 80,
  		backSpeed: 80,
  		loop: true	
	});
})

$(document).ready(function () {
	$(".clipboard").click(function (event) {
		event.preventDefault();
		copyClipboard("felipegarces1@hotmail.com", true, "Email copied to clipboard");
	});
});

function copyClipboard(value, showNotification, notificationText) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val(value).select();
	document.execCommand("copy");
	$temp.remove();
	if (typeof showNotification === 'undefined') {
		showNotification = true;
	}
	if (typeof notificationText === 'undefined') {
		notificationText = "Copied to clipboard";
	}
	var notificationTag = $("div.copy-notification");
	if (showNotification && notificationTag.length == 0) {
		notificationTag = $("<div/>", { "class": "copy-notification", text: notificationText });
		$("body").append(notificationTag);
		notificationTag.fadeIn("slow", function () {
			setTimeout(function () {
				notificationTag.fadeOut("slow", function () {
					notificationTag.remove();
				});
			}, 2000);
		});
	}
}