//your JS code here. If required.
const inpButton = document.querySelector("input");

inpButton.addEventListener("click", function() {
	const selectElement = document.getElementById("colorSelect");
	const selectedIndex = selectElement.selectedIndex;
	if(selectedIndex === -1) return; 
	
	selectElement.remove(selectedIndex);
})