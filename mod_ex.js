module.exports = {
  pigeons: Math.floor(Math.random() * 100),
  explain: function() {
    console.log('It is sunny in Vancouver, and  there are ' + this.pigeons + ' very happy pigeons today!');
  }
};
