
export default class Joke {
    constructor(catId, jokeText) {
        this.jokeId = Date.now();
        this.jokeText = jokeText;
        this.categoryId = catId;

    }
}