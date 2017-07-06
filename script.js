

function buttonPushed() {
  var getName = document.querySelector('#inputName');
  var firstname = getName.value;
  var getName2 = document.querySelector('#inputName2');
  var lastname = getName2.value;
  /*var radioDial= document.querySelector('[name="setA"]:checked');*/
  var hobbyRadioEl = document.querySelector('[name="hobbyRB"]:checked');
  var hobby = hobbyRadioEl.value

  document.getElementById("demo").innerHTML = "Welcome " + firstname + " " + lastname + "<br>";
  document.getElementById("demo").innerHTML += firstname + ", " + " We are so happy you arrived!" + "<br>";
  document.getElementById("demo").innerHTML += "There is a growing community of middle schoolers who like " + hobby +" books who are just like you! May I make some suggestions?" + "<br>";
}


var bookList = [
     {
       theme: "YA Topics/YA Dystopian",
       title: "Hunger Games",
       author: "Suzanne Collins"
     },
     {
       theme: "YA Topics/YA Dystopian",
       title: "Divergent",
       author: "Veronica Roth"
     },
     {
       theme: "YA Topics/YA Dystopian",
       title: "We Could Be Brothers",
       author: "Derrick Barnes"
     },
     {
       theme: "Funny Series",
       title: "Middle School Series",
       author: "James Patterson"
     },
     {
       theme: "Funny Series",
       title: "Dork Diaries",
       author: "Rachel Renée Russell"
     },
     {
       theme: "Funny Series",
       title: "Frankenstein Makes a Sandwich ",
       author: "Adam Rex"
     },
     {
       theme: "Graphic Novels & Anime",
       title: "Wonderstruck",
       author: "Brian Selznick"
     },
     {
       theme: "Graphic Novels & Anime",
       title: "Zita The Spacegirl",
       author: "Ben Hatke"
     },
     {
       theme: "Graphic Novels & Anime",
       title: "Foiled ",
       author: "Jane Yolen"
     },
     {
       theme: "Fantasy",
       title: "The Sweetest Heist in History (Randi Rhodes Ninja Detective) ",
       author: "Octavia Spencer"
     },
     {
       theme: "Fantasy",
       title: "The Black Parade",
       author: "Kyoko M"
     },
     {
       theme: "Fantasy",
       title: "Harry Potter",
       author: "J.K. Rowling "
     }
   ];
   
  function winning(event) {
   var hobby = document.querySelector('[name="hobbyRB"]:checked').value; 
    for (var test of bookList) {
      if (test.theme === hobby)
      {
        var msg = test.title + " by author " + test.author;
        document.getElementById("printSuggestions").innerHTML += '<li>' + msg + '</li>';
      }
    }
}