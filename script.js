// const nameofPerson=window.prompt("enter your name please")
// window.alert("welcome"+ nameofPerson);
// const nameA=document.getElementById('name');
// nameA.innerHTML=nameofPerson;
// const text=document.getElementById('text');
// const joke=document.getElementById('Joke');
// const mailTo=document.getElementById('Mail');

// const author=document.getElementById('author');
// const api="https://api.chucknorris.io/jokes/random";

// async function getJokes(URL){
//     const res=await fetch(URL);
//     var data=await res.json();
//     console.log(data);
//     text.innerHTML=data.value;
//     author.innerHTML=nameofPerson;

// }
// getJokes(api);
// // function newJokes(){
// //     getJokes(api);
// // }
// joke.addEventListener('click',function(){
//     getJokes(api);
// })


// function mail(){
//     window.open("https://        "+   text.innerHTML+"       ______by "+" author.innerHtml","Tweet Window","width=600,height=300")
// }
// mailTo.addEventListener('click',function(){
//     mail();
// });


$(document).ready(function(){


const nameofPerson=window.prompt("enter your name please")
window.alert("welcome"+ nameofPerson);

$("#name").text(nameofPerson)

// const author=document.getElementById('author');
    const api="https://api.chucknorris.io/jokes/random";

    async function getJokes(URL){
        const res=await fetch(URL);
        var data=await res.json();
        console.log(data);
        $("#text").text(data.value);
        $("#author").text(nameofPerson)

        // text.innerHTML=data.value;
        // author.innerHTML=nameofPerson;
    
    }
    getJokes(api);

    function changecolor(){
        return Math.floor(Math.random()*255);
       }
           
    
    function randomColor(){
        $('#text').css({'color':'rgba('+changecolor()+','+changecolor()+ ','+changecolor()+'\)'})
        $('#quote-author').css({'color':'rgba('+changecolor()+','+changecolor()+ ','+changecolor()+'\)'})
    
        // $("#text").css({'color':'green'})
        // $("#quote-author").css({'color':'green'})
    }


    $("#Joke").click(function(){
        getJokes(api);
        randomColor();
    })
    function mailto(){
        var dataContent=$("#text").text();
        var author=$("#author").text();
        window.open("mailto:?subject=YourSubject&body=YourBodyText"+encodeURIComponent(dataContent+" -----by "+author),"Mail Window","width=600,height=300")
    }
    $("#Mail").click(function(){
        mailto();
    })


})





