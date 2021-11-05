
class Movie{
    constructor(Title,Director,Genre,Release_year,Rating){
        this.Title        = Title;
        this.Director     = Director;
        this.Genre        = Genre;
        this.Release_year = Release_year;
        this.Rating       = Rating;
    }

    //Method
    getOverview(){
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
        //console.log("Movie : " + this.Title + '\n' + "Diredted by : " + this.Director + '\n' + "Released in : " + this.Release_year + '\n' + "rating : " + this.Rating);
    }

}

let movie1 = new Movie("Doreamon","Nobi","genre",2001,5);
movie1.getOverview();