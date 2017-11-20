function Stock(n, t, i, v, q){
  this.name = n;
  this.ticker = t;
  this.index = i;
  this.value = v;
  this.quantity = q;

  this.totalValue = function(){

    return (this.value*this.quantity)
  };

  this.sell = function(q){
    if (q <= this.quantity){
      this.quanitity = this.quantity - q;
      return q * this.value;
    }
    else{
      console.log("");
    }
  };
}


module.exports = Stock;
