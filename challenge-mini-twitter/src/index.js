

function setup()
{
    let textarea=document.querySelector("#typing-area");
    let content;
    let submitBtn=document.querySelector("#btn");

    textarea.addEventListener("input", function(){
        content=textarea.value; 
        countChars(content);
    });
}



function countChars(content)
{
    
    let limit=10;//280
    let charCounter = document.querySelector("#char-counter");
    if(content)
    charCounter.textContent=`Number of characters:${content.length}`;
    if(content)
    { 
         console.log(content);
    console.log(content.length);
        if(content.length > limit)
        {
            charCounter.style.color="red";
        }
        else
        charCounter.style.color="blue";
    }

}
// textarea.addEventListener("input",countChars);
countChars();
window.onload= setup;