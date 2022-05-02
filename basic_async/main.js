// to understand asynchronous JavaScript, 
// try moving around the console.logs and 
// setTimeouts and see how it affects the 
// placement of the logs in your console.
    
        
console.log("This is normal. No confusion here!")
console.log("Running in sequence.")


setTimeout(function(){
    alert("Alert! I will block the thread until I am completed, which happens on user input."); 
    console.log("Since the alert was clicked, the thread was allowed to continue: I am a console log.")
},0)

console.log("I am here!!")

setTimeout(function(){
    alert("Another alert! I will also block the thread until I am completed."); 
    console.log("Finally, I can log myself.")},0)
    
console.log("There I went!")
    
setTimeout(function(){
    alert("Again an alert? Better block the thread until the alert is clicked!"); 
    console.log("Logging happening. Finally.")},
    0)
        
console.log("Here I go!")


setTimeout(function(){
    console.log("This is to demonstrate what setTimeout does.")
},2000)


























setTimeout(function(){
     
    console.log("%cThe event loop will be a lot less confusing after you watch this video:\nhttps://www.youtube.com/watch?v=8aGhZQkoFbQ", "font-weight: bold; color:red; font-family: Oswald; padding-top: 5px; padding-bottom: 5px; font-size: 16px;")
},
    0)

