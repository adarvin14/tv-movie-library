class Movie{
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.release_year = data.release_year
        this.catalog_id = data.catalog_id
    }

    renderMovies() {
        return `
        <li>
            <a href="#" data-id="${this.id}">${this.title}</a> 
        </li>
        <br>
        <button id="create-movie" data-id="${movie.id}">Add Movie</button>
        `
    }

    renderMovie() {
        let main = document.getElementById('main')
        main.innerHTML += `
            <h4>Movie Title: ${this.title}</h4>
            <h4>Release Year: ${this.release_year}</h4>
            <button class="delete-movie" data-id="${this.id}">Delete Movie</button>
            <br>
        ` 
    }
}