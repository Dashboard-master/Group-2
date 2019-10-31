const rating_array = [];

document.getElementById("star_rating").addEventListener(
  "click",
  (getUserRating = chosen_stars => {
    removeRating();

    for (var i = 1; i <= chosen_stars; i++) {
      let thisStar = "star" + [i];
      let changeStar = document.getElementById(thisStar);
      changeStar.classList.add("checked");
      changeStar.innerHTML = "\u2605";
      changeStar.style.color = "gold";
      changeStar.style.textShadow = "0 0 4px rgb(211, 179, 0)";
    }
  })
);

const removeRating = () => {
  for (var i = 1; i <= 5; i++) {
    let thisStar = "star" + [i];
    let changeStar = document.getElementById(thisStar);
    changeStar.classList.remove("checked");
  }
};

const hoverStars = () => {
  for (var i = 1; i <= 5; i++) {
    let thisStar = "star" + [i];
    let changeStar = document.getElementById(thisStar);
    changeStar.innerHTML = "☆";
    changeStar.style.color = "black";
    changeStar.style.textShadow = "none";
  }
};

document.getElementById("new_review").addEventListener(
  "click",
  (addReview = () => {
    if (
      document.getElementById("user_text_review").value == "" ||
      document.getElementById("user_name").value == "" ||
      document.getElementById("user_email").value == ""
    ) {
      alert("Please fill in all necessary fields.");
    } else {
      let user_review_container = document.createElement("DIV");
      user_review_container.id = "userReview";

      let user_name = document.createElement("P");
      let user_name_input = document.getElementById("user_name").value;
      user_name.innerHTML = user_name_input;

      let user_star_rating = document.createElement("DIV");
      user_star_rating.id = "userRating";

      let goldStar = 0;
      for (var i = 1; i <= 5; i++) {
        let thisStar = "star" + [i];
        let newStar = document.getElementById(thisStar).innerHTML;
        if (newStar == "\u2605") {
          goldStar++;
        }
        let copy_of_star = document.createElement("SPAN");
        copy_of_star.innerHTML = newStar;
        if (copy_of_star.innerHTML == "\u2605") {
          copy_of_star.style.color = "gold";
          copy_of_star.style.textShadow = "0 0 4px rgb(211, 179, 0)";
        }
        console.log(copy_of_star.innerHTML);
        copy_of_star.id = "star_copy" + [i];
        console.log(copy_of_star.id);

        user_star_rating.appendChild(copy_of_star);
      }

      //let rating_numbers = document.createElement("P");
      //rating_numbers.id = "User_rating_number";
      //rating_numbers.innerHTML = goldStar + "/5";
      rating_array.push(goldStar);
      //console.log(rating_array);

      let textarea = document.createElement("DIV");
      textarea.id = "text_input_user";
      let actual_input = document.createElement("P");
      let value_of_input = document.getElementById("user_text_review").value;
      actual_input.innerHTML = value_of_input;
      textarea.appendChild(actual_input);

      user_review_container.appendChild(user_name);
      user_review_container.appendChild(user_star_rating);
      //user_review_container.appendChild(rating_numbers);
      user_review_container.appendChild(textarea);
      user_reviews.insertBefore(user_review_container, user_reviews.firstChild);

      calculateRating();
      clearFields();
    }
  })
);

const calculateRating = () => {
  for (var i = 1; i <= 5; i++) {
    let thisStar = "star_o" + [i];
    let changeStar = document.getElementById(thisStar);
    changeStar.innerHTML = "☆";
    changeStar.style.color = "black";
    changeStar.style.textShadow = "none";
  }

  let sum = 0;
  for (var i = 0; i < rating_array.length; i++) {
    sum += parseInt(rating_array[i], 6);
  }
  let avg = sum / rating_array.length;
  let rating = Math.ceil(avg);
  console.log(rating);

  for (var i = 1; i <= rating; i++) {
    let thisStar = "star_o" + [i];
    let changeStar = document.getElementById(thisStar);
    changeStar.innerHTML = "\u2605";
    changeStar.style.color = "gold";
    changeStar.style.textShadow = "0 0 4px rgb(211, 179, 0)";
  }

  let rating_text = document.getElementById("overall_rating_text");
  rating_text.innerText = rating_array.length + " people rated us: ";
};

const clearFields = () => {
  hoverStars();
  document.getElementById("user_text_review").value = "";
  document.getElementById("user_name").value = "";
  document.getElementById("user_email").value = "";
};
