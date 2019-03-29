/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("overlay").style.display = "block";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("overlay").style.display = "none";
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Open/Close Add Family member form

function openForm() {
	document.getElementById("myForm").style.display = "block";
	document.getElementById("overlay").style.display = "block";

}

function closeForm() {
	document.getElementById("myForm").style.display = "none";
	document.getElementById("overlay").style.display = "none";

}

navigator.serviceWorker && navigator.serviceWorker.register('./sw.js').then(function(registration) {
	console.log('Excellent, registered with scope: ', registration.scope);
  });

//   if ('serviceWorker' in navigator) {
// 	window.addEventListener('load', function() {
// 	  navigator.serviceWorker.register('/sw.js').then(function(registration) {
// 		console.log('ServiceWorker registration successful with scope: ', registration.scope);
// 	  }, function(err) {
// 		console.log('ServiceWorker registration failed: ', err);
// 	  });
// 	});
//   }