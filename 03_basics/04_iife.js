// Immediately Invoked Function Expression(IIFE)
// iife -> Jo function immediately execute ho jaye
// iife -> global scope k pollution s problem hoti hain kayi baar tho global scope k pollution (yani ki declerations/variables) ko 
//         hatane k liye iife ka use kiya.


(function chai() {                  // named iife -> because iska naam hain.
    console.log(`DB CONNECTED`);
})();                               // iife m ; lagana hota hain

( (port) => {                       // unnamed iife.
    console.log(`DB CONNECTED TO ${port}`)
} )("Port1");                              // Arguments dusre wale () m aata hain.

