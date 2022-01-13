function Item(text) {
    this.id = generateId();
    this.text = text;
    this.done = false;

    function generateId() {
        Math.random().toString(26).substring(2, 9);
    }
}

export default Item;
