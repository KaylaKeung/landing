/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools cons
const results = Splitting({ by: "chars" });

results[0].el.style.setProperty("--noOfItems", results[0].chars.length);
