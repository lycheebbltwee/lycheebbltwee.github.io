// 1. Select query with id #copyright
const copyrightYear = document.querySelector("#copyright");
console.log(copyrightYear.innerHTML);

// 2. Assign a date function to a variable and output the current year
const today = new Date();
console.log(today.getFullYear());

// 3. Rewrite query with current year
copyrightYear.innerHTML = today.getFullYear();
