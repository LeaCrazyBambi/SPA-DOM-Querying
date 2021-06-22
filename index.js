/* Change the font of the body element. */
const bodyElement = document.querySelector("body");
bodyElement.style.fontFamily = "Sans Serif";

/* Center the text of h1 on the page. */

/* The menu headings have a class named `category`. Select the elements by class name. Then, change the `color` and `font-style` of each element. */
const targets = document.querySelectorAll(".category");
targets.forEach((category) => {
  category.style.color = "black";
  category.style.fontFamily = "Verdana";
  category.style.textDecoration = "underline";
  category.style.fontWeight = "5px";
});

/* Create a function named "_colorGenerator_" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of `food-category`. Give each list a different background color using the function that you created. */
colorGenerator = () => {};

/* Align the `food-category` lists in a row on desktop. Make sure that the page is responsive and also works on mobile.*/
const categories = document.querySelectorAll(".food-category");
categories.forEach((box) => {
  box.style.background = "#E5C4AF";
});

/* Select the warning at the end of the page by its id `warning`. Select the id without using a querySelector. Change the size and font of the `warning`.*/
const warning = document.getElementById("warning");
warning.style.fontSize = "2.5rem";

/* Select all _even_ `allergy-info` items. Give the even items a different background color.*/
const allergies = document.querySelector(".allergies");
allergies.style.backgroundColor = "skyBlue";

/* Make the `allergy-warning` appear as a column in the center of the page.*/

/* The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.
const title = document.querySelector("h1");
title.style.textAlign = "center";*/
