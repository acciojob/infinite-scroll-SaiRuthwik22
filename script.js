//your code here!
let x = 0
function addElements(num) {
	let list = document.getElementById("infi-list")
	for (let i = 0; i < num; i++) {
		const listItem = document.createElement('li')
		listItem.textContent = `Item ${x+1}`
		list.appendChild(listItem)
		x+=1
		
	}
}
addElements(10)
function handleScroll(){
	let list = document.getElementById("infi-list")
	if (list.scrollTop+list.clientHeight >= list.scrollHeight) {
		addElements(2)
	}
}