function showmenu(){
	var ele = document.getElementById('menu');
	ele.style.display=(ele.style.display=='block')?'none':'block';
	
}
function validateCallme(){
	var name = document.getElementById('cname').value;
	var phone = document.getElementById('cphone').value;
	//name validation
	var ne = /^[a-zA-Z ]+$/;
	//phone validation
	 var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
     if(!ne.test(name)){
		if(name=="") alert("Please enter your name");
		else alert('Please enter a valid name');
		return false;
	} 
	if(!phone.match(phoneno)){
		if(phone=="") alert("Please enter your phone number");
		else alert("Please enter a valid phone number");
		return false;
     }
	return true;
}
function validateContact(){
	var email = document.getElementById('email').value;
	var name = document.getElementById('name').value;
	var message = document.getElementById('message').value;
	//email validation
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	//name validation
	var ne = /^[a-zA-Z ]+$/;
	//very basic message validation
	var me = /([a-zA-Z0-9 ]+)|([?@#*.\,\"\;\/\:\:\+\]\[\}\{&!\-\(\)])/;
    if(!re.test(email)){
		if(email=="") alert("Please enter your email address");
		else alert('Please enter a valid email address');
		return false;
	}
	if(!ne.test(name)){
		if(name=="") alert("Please enter your name");
		else alert('Please enter a valid name');
		return false;
	}
	if(!me.test(message)){
		if(message=="") alert("Please enter your message");
		alert('Your message contains invalid characters');
		return false;
	}
	return true;
} 

$( document ).ready(function() {
    $( window ).resize(function() {
	var width = $(window).width();
	var ele = document.getElementById('menu');
	if(width>=800){
		ele.style.display='block';
	}
	else 
		ele.style.display='none';
});
$('h1.caption').flowtype({
 minFont : 36,
 maxFont : 55,
 fontRatio : 20
});
$('h1.about').flowtype({
 minFont : 36,
 maxFont : 50,
 fontRatio : 20
});
/*$('.the_pub>p').flowtype({
 minFont : 16,
 maxFont : 26,
 fontRatio : 20
});
*/
$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});