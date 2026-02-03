var RandomizedSet = function() {
    this.map = new Map(); // value -> index
    this.arr = [];        // store values
};

RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false;
    this.map.set(val, this.arr.length);
    this.arr.push(val);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false;
    let idx = this.map.get(val);
    let last = this.arr[this.arr.length - 1];
    this.arr[idx] = last;
    this.map.set(last, idx);
    this.arr.pop();
    this.map.delete(val);
    return true;
};

RandomizedSet.prototype.getRandom = function() {
    let randIdx = Math.floor(Math.random() * this.arr.length);
    return this.arr[randIdx];
};

