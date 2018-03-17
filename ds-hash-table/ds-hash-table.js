var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) {
        //return this._storage[hashFn(key, max)];
        for(var i=0; i<this._storage[hashFn(key, max)].length; i++){
          if(this._storage[hashFn(key, max)][i][0]===key){
            return this._storage[hashFn(key, max)][i][1]
          }
        }


      },

      insert: function(key, value) {
        //your code is here
        var nested=[]
        if(this._storage[hashFn(key,max)]===undefined){
          var array=[];
        nested.push(key,value);
        array.push(nested);
        this._storage[hashFn(key, max)] = array;
      }
      else{
        nested.push(key,value)
        this._storage[hashFn(key, max)].push(nested)
      }


    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};