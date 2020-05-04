class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    for (const element in this.items) {
      
    }


    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  load(pos) {
    if (pos < 0 || pos > this.length - 1) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((acc, item) => Math.max(acc, item));
    }
  }

  min() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((acc, item) => Math.min(acc, item));
    }
  }

  sum() {
      return this.items.reduce((acc, item) => acc + item, 0);
  }

  avg() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((acc, item) => acc + item) / this.items.length;
    }
  }
}

module.exports = SortedList;
