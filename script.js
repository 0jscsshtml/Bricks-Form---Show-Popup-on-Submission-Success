<script>
// Form Success Show Popup
	if ( document.body.classList.contains('page-id-253') ) { // change to your page ID
		const targetEle = document.querySelector(".wl-login-form"); // change to your form classname
		const targetPopup = document.querySelector(".brxe-popup-424"); // change to your popup classname
		const observer = new MutationObserver(function(mutations_list) {
			mutations_list.forEach(function(mutation) {
				mutation.addedNodes.forEach(function(added_node) {
					if(added_node.classList.contains('success')) {
						targetPopup.classList.remove('hide');
						targetPopup.classList.add('wl-slide-in-blurred-top'); // add class for custom animation
						observer.disconnect();
					}
				});
			});
		});
		observer.observe(targetEle, { subtree: false, childList: true });
	}
</script>
