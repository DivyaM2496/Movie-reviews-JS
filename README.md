# 🎬 Movie Review App

## 📌 Overview

The **Movie Review App** is a simple interactive web application built using **HTML, CSS, and JavaScript**. Users can submit movie titles and reviews, which are then displayed dynamically on the page.

This project is perfect for beginners to practice **DOM manipulation**, **form input handling**, and **dynamic content creation** using JavaScript.

---

## 🧩 Features

* Submit movie title and review
* Dynamically display submitted reviews
* Each review shows the movie title and review text
* Horizontal line separates reviews for clarity

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (DOM Manipulation)

---

## ⚙️ How It Works

* Users enter a movie title and review in input fields
* On clicking the **Add** button:

  * Inputs are validated to ensure title is not empty
  * A review object is created
  * `createReview()` function dynamically generates `h1` and `p` elements for title and review
  * A horizontal line (`hr`) is added to separate reviews
  * Input fields are cleared for the next entry

---

## 📂 Project Structure

```
movie-review-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 JavaScript Logic

```js
function addReview() {
  let userInputEl = document.getElementById("titleInput");
  if (userInputEl.value === "") {
    alert("Enter valid movie title");
    return;
  }
  let review = {
    "Movie Title": userInputEl.value,
    review: document.getElementById("reviewTextarea").value
  };
  createReview(review);
  userInputEl.value = "";
  document.getElementById("reviewTextarea").value = "";
}
```

---

## 📚 Concepts Covered

* DOM element creation and appending
* Handling user input
* Validation for empty inputs
* Dynamic content updates

---

## 🚀 Future Improvements

* Add character limit for reviews
* Save reviews using localStorage
* Add delete/edit functionality for reviews
* Style reviews with cards for better UI

---

## 👩‍💻 Author

Created as a practice project to strengthen **JavaScript fundamentals** and **DOM manipulation skills**.

---

⭐ If you find this project useful, feel free to star the repository!
