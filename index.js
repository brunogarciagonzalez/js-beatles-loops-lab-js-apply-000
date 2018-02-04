var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Rhythm Guitar", "Bass", "Lead Guitar", "Drums"];

function theBeatlesPlay(members, inst) {
  var empty_array = []
  for (i = 0; i < members.length; i ++) {
    empty_array[i] = `${members[i]} plays ${inst[i]}`
  }

  return empty_array;
}
alert(theBeatlesPlay())
