let movieReviewsContainer = document.getElementById("movieReviewsContainer");

let reviewsContainerEl = document.createElement("div");
reviewsContainerEl.id = "reviewsContainer";
movieReviewsContainer.appendChild(reviewsContainerEl);

function createReview(review) {
    let reviewheadingElement = document.createElement("h1");
    reviewheadingElement.textContent = "Movie Title :" + review["Movie Title"];
    reviewsContainerEl.appendChild(reviewheadingElement);

    let reviewparaElement = document.createElement("p");
    reviewparaElement.textContent = "review :" + review.review;
    reviewsContainerEl.appendChild(reviewparaElement);
}


function addReview() {
    let userInputEl = document.getElementById("titleInput");
    let userInputValue = userInputEl.value;
    if (userInputValue === "") {
        alert("Enter valid movie title");
        return;
    }
    let reviewEl = document.getElementById("reviewTextarea");
    let reviewValue = reviewEl.value;
    let review = {
        "Movie Title": userInputValue,
        review: reviewValue
    };
    createReview(review);
    let horizontalLineEl = document.createElement("hr");
    reviewsContainerEl.appendChild(horizontalLineEl);
    userInputEl.value = "";
    reviewEl.value = "";
}

let addBtnEl = document.getElementById("addBtn");
addBtnEl.onclick = function() {
    addReview();
}
