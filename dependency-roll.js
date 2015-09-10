var formatter = (function() {
  return {
    formatDate: function(date) {
      return date.toLocaleDateString();
    },
    formatFullName: function(firstname, surname) {
      return firstname + ' ' + surname;
    }
  }
}());

var roll = (function() {
  var entries = [];
  function add(firstname, lastname, joinDate) {
    var index = entries.length;
    entries.push({firstname: firstname, lastname: lastname, joinDate: joinDate});
    return index;
  }
  function getByJoinNumber(number) {
    return entries[number];
  }
  function count() {
    return entries.length;
  }
  return {add: add, getByJoinNumber: getByJoinNumber, count: count};
}());

var output = (function() {
  return {
    print: function(data) {
      console.log(data);
    }
  };
}());

var rollGenerator = (function(o, f, roll) {
  return {
    generate : function() {
        for (var i = 0; i < roll.count(); i++) {
        var entry = roll.getByJoinNumber(i);
        var fullname = f.formatFullName(entry.firstname, entry.lastname);
        var content = fullname + ' (depuis le ' + f.formatDate(entry.joinDate) + ')';
        o.print(content);
      }
    }
  }
}(output, formatter, roll));

roll.add('Jean', 'Dupont', new Date(2004, 5, 10)); // 5=june !
roll.add('Marc', 'Martin', new Date(2010, 7, 31));

rollGenerator.generate();
