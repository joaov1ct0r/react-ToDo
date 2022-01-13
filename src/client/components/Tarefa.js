function item(text) {
    this.id = generateId();
    this.id = this.text = text;
    this.done = false;

    function generateId() {
        Math.random().toString(26).substring(2, 9);
    }
}

export default item;
