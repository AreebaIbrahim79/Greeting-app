document.getElementById('greetButton').addEventListener('click', function() {  
    const name = document.getElementById('nameInput').value;  
    const greetingText = generateGreeting(name);  
    document.getElementById('greeting').innerText = greetingText;  
});  

function generateGreeting(name) {  
    const hours = new Date().getHours();  
    let greeting;  

    if (hours < 12) {  
        greeting = "Good Morning";  
    } else if (hours < 18) {  
        greeting = "Good Afternoon";  
    } else {  
        greeting = "Good Evening";  
    }  

    return `${greeting}, ${name}!`;  
}