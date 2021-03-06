const CATALOGS_URL = 'http://127.0.0.1:3000/catalogs'
const main = document.getElementById('main')
const form = document.querySelector('form')

class Catalog {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.movies = data.movies
        Catalog.all.push(this)
    }
    static all = []

    render() {
        return `
        <li>
            <a href="#" data-id="${this.id}">${this.name}</a>
        </li>
        ` 
    }

    renderCatalog() {
        return `
            <h3>${this.name}</h3>
            <button id="add-movie" data-id="${this.id}">Add A Movie</button>
            <button class="delete-catalog" data-id="${this.id}">Remove Catalog</button>
            <hr>

            
        `
    }
}