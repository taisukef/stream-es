class Stream {
  constructor() {
    this.data = {};
    this.dataonce = {};
    this.autoDestroy = true;
  }
  on(name, f) {
    const a = this.data[name];
    if (!a) {
      this.data[name] = [f];
    } else {
      this.data[name].push(f);
    }
    console.log("on", name, this.data[name]);
  }
  once(name, f) {
    const a = this.dataonce[name];
    if (!a) {
      this.dataonce[name] = [f];
    } else {
      this.dataonce[name].push(f);
    }
    console.log("once", name, this.dataonce[name]);
  }
  emit(name, data) {
    const a = this.data[name];
    if (a) {
      a.forEach(f => f(data));
    }
    const aonce = this.dataonce[name];
    if (aonce) {
      aonce.forEach(f => f(data));
      this.dataonce = {};
    }
    console.log("emit", name, data);
  }
};

export { Stream };
