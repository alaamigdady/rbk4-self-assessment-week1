var Stack = function() {
    
    this._storage =[]
    this.add = function(value){
      // write me
      this._storage.push(value)
    };
    this.remove = function() {
      // write me
     return this._storage.pop()
    };
    
  };