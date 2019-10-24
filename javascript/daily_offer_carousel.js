const next_button = document.getElementById('next_offer_button')
const previous_button = document.getElementById('previous_offer_button')

next_button.addEventListener("click", next_offer)
previous_button.addEventListener("click", previous_offer)

let offer_list = document.querySelectorAll(".offer")
let start_offer = document.querySelector(".current")
let current_index
let end_index = offer_list.length - 1

for (let i = 0; i < offer_list.length; i++) {
	if(offer_list[i] == start_offer) {
		current_index = i
	}
}

function next_offer() {
	if (current_index < end_index - 1){
		offer_list[current_index - 1].classList = "offer hidden_offer_left"
		offer_list[current_index].classList = "offer preview_offer_left"
		offer_list[current_index + 1].classList = "offer current"
		if (current_index < end_index - 1){
			offer_list[current_index + 2].classList = "offer preview_offer_right"
		}
		current_index++
	}
}
function previous_offer(){
	if (current_index > 1){
		offer_list[current_index + 1].classList = "offer hidden_offer_right"
		offer_list[current_index].classList = "offer preview_offer_right"
		offer_list[current_index - 1].classList = "offer current"
		if (current_index > 1){
			offer_list[current_index - 2].classList = "offer preview_offer_left"
		}
		current_index--
	}
}
