# A simple modular jQuery-accordion that

Comes with skeleton, works just fine without it.

You can find a demonstration here: http://codepen.io/vonvlaho/pen/GEGLMP

## How to use
Be sure to implement jQuery:
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

Put this code in your main or an additional JS-file:
```
$(".acchead").click(function() { /* opens and closes the on the .acchead following .accbody-element while toggling the .rotate-class */
  $(this).toggleClass("rotate").next(".accbody").toggleClass("accopen");
});
$(".showall").click(function() { /* opens all accbodys on .showall-button-click */
  $(".acchead").addClass("rotate");
  $(".accbody").addClass("accopen");
});
$(".hideall").click(function() { /* closes all accbodys on .showall-button-click */
  $(".acchead").removeClass("rotate");
  $(".accbody").removeClass("accopen");
});
```
Use `.showall` and `.hideall` as class for your "all"-buttons. Use `.acchead` for each columns headline/toggle of your accordion and `.accbody` for the corresponding body.

Be sure to set the necessary css-rules as well:
```
.acchead {
	margin: 0;
	cursor: pointer;
	transition-duration: 0.5s;
}
.accbody {
	overflow: hidden;
	opacity: 0;
	height: 0;
}
.accopen {
	opacity: 1;
	height: auto;
	transition-duration: 0.5s;
}
.showall, .hideall {
	cursor: pointer;
	margin-right: 1em;
}
.rotate {
	/*some sort of :active-function*/
	transition-duration: 0.5s;
	color: #1eaedb;
}
```
---
Contribution is highly appreciated :v:
