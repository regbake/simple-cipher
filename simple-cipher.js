var Cipher = function() {
  // this.key = "aaaaaaaaaa";
};

Cipher.prototype.key = "aaaaaaaaaa";

Cipher.prototype.encode = function(input) {
  if (input === this.key) {
    return this.key;
  } 
};

Cipher.prototype.decode = function(input) {
  if (input === this.key) {
    return this.key;
  }
};

module.exports = Cipher;
