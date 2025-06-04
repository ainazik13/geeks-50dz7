var employees = [];


employees[0] = {
  name: "Иван",
  age: 30,
  gender: "мужской",
  phone: {
    home: "123-45-67",
    mobile: "89012345678"
  }
};

employees[1] = {
  name: "Мария",
  age: 25,
  gender: "женский",
  phone: {
    home: "234-56-78",
    mobile: "89123456789"
  }
};

employees[2] = {
  name: "Алексей",
  age: 28,
  gender: "мужской",
  phone: {
    home: "345-67-89",
    mobile: "89234567890"
  }
};

employees[3] = {
  name: "Ольга",
  age: 32,
  gender: "женский",
  phone: {
    home: "456-78-90",
    mobile: "89345678901"
  }
};

employees.push ({
  name: "Дмитрий",
  age: 22,
  gender: "мужской",
  phone: {
    home: "567-89-01",
    mobile: "89456789012"
  }
});


employees.unshift( {
  name: "Сергей",
  age: 35,
  gender: "мужской",
  phone: {
    home: "678-90-12",
    mobile: "89567890123"
  }
});


var olderThan25 = [];
for (var i = 0; i < employees.length; i++) {
  if (employees[i].age > 25) {
    olderThan25[olderThan25.length] = employees[i];
  }
}


var employeeNames = [];
for (var i = 0; i < employees.length; i++) {
  employeeNames[employeeNames.length] = employees[i].name;
}


console.log("Данные сотрудников:");
for (var i = 0; i < employees.length; i++) {
  var emp = employees[i];
  var output =
    "Имя: " + emp.name + ", " +
    "Возраст: " + emp.age + ", " +
    "Пол: " + emp.gender + ", " +
    "Домашний: " + emp.phone.home + ", " +
    "Сотовый: " + emp.phone.mobile;
  console.log(output);
}


console.log("--- Проверка ---");
console.log("Сотрудники старше 25 лет:");
for (var i = 0; i < olderThan25.length; i++) {
  console.log(olderThan25[i].name + " (" + olderThan25[i].age + ")");
}

console.log("Все имена: " + employeeNames.join(", "));
console.log("Общее количество сотрудников: " + employees.length);