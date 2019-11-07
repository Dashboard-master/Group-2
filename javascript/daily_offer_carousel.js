const next_button = document.getElementById('next_offer_button')
const previous_button = document.getElementById('previous_offer_button')
next_button.addEventListener("click", next_offer)
previous_button.addEventListener("click", previous_offer)

function update_image_buttons (){
	let next_image = document.querySelector(".preview_offer_right")
	let previous_image = document.querySelector(".preview_offer_left")
	next_image.addEventListener("click", next_offer)
	previous_image.addEventListener("click", previous_offer)
}

let d = new Date()
let today = d.getDay()
let offer_list = document.querySelectorAll(".offer")
let end_index = offer_list.length - 1


let current_index
if (today == 0){
	current_index = offer_list[7]
}
else {
	current_index = today
}
offer_list[current_index].classList = "offer current"
offer_list[current_index].querySelector("h2").innerText = 'Today: '
for (let i = 1; i < current_index - 1; i++){
	offer_list[i].classList = "offer hidden_offer_left"
}
for (let i = 7; i > current_index; i--){
	offer_list[i].classList = "offer hidden_offer_right"
}


function next_offer() {
	if (current_index < end_index - 1){
		offer_list[current_index - 1].classList = "offer hidden_offer_left"
		offer_list[current_index - 1].removeEventListener('click', previous_offer)
		offer_list[current_index].classList = "offer preview_offer_left"
		offer_list[current_index + 1].classList = "offer current"
		offer_list[current_index + 1].removeEventListener('click', next_offer)
		if (current_index < end_index - 1){
			offer_list[current_index + 2].classList = "offer preview_offer_right"
		}
		current_index++
		update_image_buttons()
	}
}
function previous_offer(){
	if (current_index > 1){
		offer_list[current_index + 1].classList = "offer hidden_offer_right"
		offer_list[current_index + 1].removeEventListener('click', next_offer)
		offer_list[current_index].classList = "offer preview_offer_right"
		offer_list[current_index - 1].classList = "offer current"
		offer_list[current_index - 1].removeEventListener('click', previous_offer)
		if (current_index > 1){
			offer_list[current_index - 2].classList = "offer preview_offer_left"
		}
		current_index--
		update_image_buttons()
	}
}

window.onload = () => {
	offer_list[current_index - 1].classList = "offer preview_offer_left"
	offer_list[current_index + 1].classList = "offer preview_offer_right"
	update_image_buttons()

}

window.onkeydown = (e) => {
	if (e.keyCode == 37){
		previous_offer()
	}
	else if (e.keyCode == 39) {
		next_offer()
	}
}
