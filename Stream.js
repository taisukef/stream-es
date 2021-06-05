class Stream {
  constructor() {
    this.data = {};
    this.autoDestroy = true;
  }
  on(name, f) {
    const a = this.data[name];
    if (!a) {
      this.data[name] = [f];
    } else {
      this.data[name].push(f);
    }
    console.log("x-on", name, this.data[name]);
  }
  emit(name, data) {
    const a = this.data[name];
    if (a) {
      a.forEach(f => f(data));
    }
    console.log("emit", name, data);
  }
};

export { Stream };
