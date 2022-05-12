class Subject {
  constructor(){
    this.observers = [];
  }
  subscribe(observer){
    this.observers.push(observer);
  }
  unsubscribe(observer){
    this.observers.splice(this.observers.indexOf(observer),1)
  }
  unsubscribeAll(){
    this.observers = [];
  };
  notifySubscribers(source, ...others){
    for (let item in this.observers){
      this.observers[item].update(source, ...others)
    }
  }
}

export { Subject };
