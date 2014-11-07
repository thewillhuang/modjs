'use strict';
var expect = require('chai').expect;
var Classrooms = require('../myMod/class');
var Student = require('../myMod/student');

describe('Classroom constructor', function() {
  it('should create a new instance of classroom', function() {
    var iOs = new Classrooms('iOs');
    expect(iOs.name).to.eql('iOs');
  });
  it('should add a new student to the classroom', function() {
    var iOs = new Classrooms('iOs');
    iOs.addStudent('Mark');
    expect(iOs.students).to.include('Mark');
  });
  it('should report all students thats in the class', function(){
    var iOs = new Classrooms('iOs');
    iOs.addStudent('Mark');
    iOs.addStudent('William');
    expect(iOs.students).to.be.instanceof(Array);
    expect(iOs.students).to.include('William');
  })
});

describe('Students constructor', function() {
  it('should create a new instance of Students', function() {
    var william = new Student('William');
    expect(william.name).to.eql('William');
  });
  it('should add a new class to the student\'s class list', function() {
    var leeroy = new Student('leeroy');
    leeroy.addClass('Trolling');
    expect(leeroy.classRoom).to.include('Trolling');
  });
  it('should report all classes the student has', function(){
    var leeroy = new Student('leeroy');
    leeroy.addClass('Trolling');
    leeroy.addClass('How to get viral views on youtube for trolling');
    expect(leeroy.classRoom).to.be.instanceof(Array);
  });
});
