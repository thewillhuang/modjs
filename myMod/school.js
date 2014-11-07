var Classrooms = require('./class');
var Student = require('./student');

var william = new Student('William',
  [
  'javascript dev'
  ]);

var javascriptDev = new Classrooms('javascriptDev',
  ['Ivan',
  'ToastyNerd!',
  'William'
  ]);

javascriptDev.reportStudent();
javascriptDev.addStudent('Mark');
javascriptDev.reportStudent();

william.reportClass();
william.addClass('Foundations 2');
william.reportClass();
