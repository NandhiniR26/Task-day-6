

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
//    a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie {
    constructor(title,studio,rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided   

    if (typeof this.rating === undefined) {
        this.rating === PG;
    }  
    }
    }

    let movie1 = new Movie('leo','sevenscreen','9.5');
    let movie2 = new Movie('vikram','rajkamal','10');
    let movie3 = new Movie('kaithi','2D','9');

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG".
//    You may assume the input array is full of Movie instances. The returned array need not be full.

    function getPG(Movie) {
        let lok = Movie;
        for (let i = 0; i < Movie.length; i++) {
            if (Movie[i].rating === 'PG') {
        res.push(Movie[i].title);
        }
        }
        return lok;
       }
       let array = [movie1, movie2, movie3];
       console.log(getPG(array));


//    d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”


      let movie4 = new Movie('Casino Royale', 'Eon Productions', 'PG13');
      console.log(movie4);