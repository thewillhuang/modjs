var Classrooms = function(name, studentsArray) {
  this.name = name;
  this.students = studentsArray || [];
};

Classrooms.prototype.addStudent = function(student) {
  this.students.push(student);
};

Classrooms.prototype.reportStudent = function() {
  console.log('the classroom', this.name, 'has these students:');
  for (var i = 0; i < this.students.length; i++) {
    console.log(this.students[i]);
  }
};

module.exports = Classrooms;
