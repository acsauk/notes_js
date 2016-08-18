(function(exports) {
  
  function NoteList() {
    this.notes = [];
  }

NoteList.prototype.addNote = function (string) {
  var note = new Note(string);
  this.notes.push(note);
};

NoteList.prototype.getNotes = function () {
  return this.notes;
};

  exports.NoteList = NoteList;

})(this);