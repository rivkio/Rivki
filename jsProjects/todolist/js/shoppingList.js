export class ShoppingList {

    array = [];

    add(shopping) {
        this.array.push(shopping)
    }

    toggleFavorite(id) {
        const index = this.array.findIndex(s => s.id === id);
        this.array[index].favorite = !this.array[index].favorite
    }

    remove(id) {
        this.array = this.array.filter(s => s.id != id)
    }
}