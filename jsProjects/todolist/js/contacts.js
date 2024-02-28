export class Contacts {
    // prop: 
    array = [];

    add(contact) {
        this.array.push(contact);
    }

    edit(id, name) {
        //[{id: '123', name: 'dave'}, {id: '456', name: 'moe'}]
        const index = this.array.findIndex(c => c.id === id);
        this.array[index].name = name;
    }

    toggleFavorite(id) {
        //[{id: '123', name: 'dave'}, {id: '456', name: 'moe'}]
        const index = this.array.findIndex(c => c.id === id);
        this.array[index].favorite = !this.array[index].favorite;
    }

    remove(id) {
        this.array = this.array.filter(c => c.id !== id);
    }
}