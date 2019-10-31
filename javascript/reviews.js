document.getElementById("star_rating").addEventListener(
  "click",
  (getUserRating = chosen_stars => {
    removeRating();

    let stjerner = document.getElementById("star_rating");
    let antall_stjerner = stjerner.getElementsByTagName("SPAN").length;

    for (var i = 1; i <= chosen_stars; i++) {
      let thisStar = "star" + [i];
      let changeStar = document.getElementById(thisStar);
      changeStar.classList.add("checked");
      changeStar.innerHTML = "\u2605";
      changeStar.style.color = "gold";
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
  }
};

document.getElementById("new_review").addEventListener(
  "click",
  (addReview = () => {
    let user_review_container = document.createElement("DIV");

    let user_name = document.createElement("P");
    let user_name_input = document.getElementById("user_name").value;
    user_name.innerHTML = user_name_input;

    let user_star_rating = document.createElement("DIV");

    for (var i = 1; i <= 5; i++) {
      let thisStar = "star" + [i];
      let newStar = document.getElementById(thisStar);
    }

    let textarea = document.createElement("TEXTAREA");
    textarea.cols = 40;
    textarea.rows = 5;
    let textarea_input = document.getElementById("user_text_review").value;
    textarea.innerHTML = textarea_input;

    user_review_container.appendChild(user_name);
    user_review_container.appendChild(textarea);
    user_reviews.appendChild(user_review_container);
  })
);
