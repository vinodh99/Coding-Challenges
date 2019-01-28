
Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array.
    if (this.length !== other.length) {
      return false;
    }
    for (var i = 0; i < this.length; i++) {
      if (isArray(this[i]) && isArray(other[i])) {
        if (!this[i].sameStructureAs(other[i])) { return false; }
      } else if (!isArray(this[i]) && isArray(other[i])) {
        return false;
      } else if (isArray(this[i]) && !isArray(other[i])) {
        return false;
      }
    }
    return true
};