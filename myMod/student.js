var Students = function(name, classesArray) {
  this.name = name;
  this.classRoom = classesArray || [];
};

Students.prototype.addClass = function(classes) {
  this.classRoom.push(classes);
};

Students.prototype.reportClass = function() {
  console.log(this.name + ' is in');
  for (var i = 0; i < this.classRoom.length; i++) {
    console.log(this.classRoom[i]);
  }
};

module.exports = Students;
