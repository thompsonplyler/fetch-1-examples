For this lecture, you should be able to explain the following concepts: 
* What is a server? 
* What is a database?
* What is a client? 
* What is an API? 
* What is a response code? 
* What response codes do we want when we make a request to a remote resource? 
* What reponses codes indicate there was an error either in the client or server code?
* What is JSON?
* What is a RESTful API? 
* What is the Fetch API?

Do not go forward, do not continue, do not think you're better than this information:
* Event Loop Lecture - https://www.youtube.com/watch?v=8aGhZQkoFbQ

***
JSON Validator:
https://jsonlint.com/

SW API: https://swapi.dev/

Example fetch call to SW API with fetch (using .then)

```javascript
fetch("https://swapi.dev/api/people/5")
    .then(r=>r.json())
    .then(res=> console.log(res))
```

Example fetch call to SW API with fetch (using async/await)
```javascript
async function(){ // We cannot use await outside of an async function. 
let response = await fetch("https://swapi.dev/api/people/5")
response = response.json()
console.log(response)
}

```

Original Rest Specification by Roy Thomas Fielding
https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm

Restular Archived: 
https://web.archive.org/web/20190717071143/http://www.restular.com/   
(Restular was a terrific tool to see make your own APIs RESTful. Even though the website is down now, it lives on still at the Internet Archive, but that also means this will be pretty slow. Be patient.)

HTTP Status Codes:
https://gist.github.com/sgnl/11084b28e28a18ee6a64