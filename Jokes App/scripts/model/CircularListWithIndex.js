export default class CircularListWithIndex {
    constructor(items, i) {
        this.items = items;
        this.index = i;
    }

    moveIndexNext() {
        if (this.items.length === 0) {
            return;
        }
        if (this.index + 1 === this.items.length) {
           this.index = 0;
        } else {
           this.index++;
        }
        console.log(this.index);
        return this.index;
    }

    moveIndexPrevious() {
        if (this.items.length === 0) {
            return;
        }
        if (this.index - 1 === -1) {
           this.index = this.items.length - 1;
        } else {
           this.index--;
        }
        console.log(this.index);
        return this.index;
    }
    
    getCurrentItem() {
        return this.items[this.index];
    }
} 