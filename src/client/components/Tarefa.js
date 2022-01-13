let generateId = () => {
    return Math.random().toString(26).substring(2, 9);
};

function Item(text) {
    this.id = generateId();
    this.text = text;
}

export default Item;
