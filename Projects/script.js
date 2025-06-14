const buttons = document.querySelectorAll('.button'); // 👉 sab buttons ko select kiya
    const body = document.querySelector('body');           // 👉 body tag ko select kiya

    // 👉 Loop chalaya har button par
    buttons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        console.log(e);             // 🔍 pura event object
        console.log(e.target);      // 🔍 kis button par click hua uska reference

        // ✅ Agar button ka ID kisi color se match karta hai to usi color se background change
        if (e.target.id === 'green') {
          body.style.backgroundColor = 'green';
        }
        if (e.target.id === 'white') {
          body.style.backgroundColor = 'white';
          body.style.color = 'black';
        }
        if (e.target.id === 'blue') {
          body.style.backgroundColor = 'blue';
        }
        if (e.target.id === 'yellow') {
          body.style.backgroundColor = 'gold';
          body.style.color = 'black';
        }
        if (e.target.id === 'Red') {
          body.style.backgroundColor = 'red';
        }
      });
    });



//     | Line                                   | Concept          | Description                                                 |
// | -------------------------------------- | ---------------- | ----------------------------------------------------------- |
// | `document.querySelectorAll('.button')` | DOM Selection    | Sabhi buttons ko select karta hai jinka class `.button` hai |
// | `addEventListener('click', ...)`       | Event Binding    | Har button pe click event listener lagaya gaya              |
// | `e.target`                             | Targeted Element | Ye batata hai ki kaunsa button click hua                    |
// | `body.style.backgroundColor = ...`     | DOM Manipulation | Background color change karta hai dynamically               |
// | `if(e.target.id === 'green')`          | Condition Check  | Har color ke button ke liye alag condition check karta hai  |


// Ek reset button banao jo background ko fir se black kar de.

// mouseover event use karke hover par color badlo.

// Color options ko ek dropdown (<select>) mein convert karo.

// Show the clicked color name in an <h2> tag.

// Use event delegation instead of forEach.

