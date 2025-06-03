let employees = [
  {
    name: "Иван",
    age: 30,
    gender: "мужской",
    phone: {
      home: "123-45-67",
      mobile: "89012345678"
    }
  },
  {
    name: "Мария",
    age: 25,
    gender: "женский",
    phone: {
      home: "234-56-78",
      mobile: "89123456789"
    }
  },
  {
    name: "Алексей",
    age: 28,
    gender: "мужской",
    phone: {
      home: "345-67-89",
      mobile: "89234567890"
    }
  }
];


employees.push({
  name: "Ольга",
  age: 32,
  gender: "женский",
  phone: {
    home: "456-78-90",
    mobile: "89345678901"
  }
});

employees.unshift({
  name: "Дмитрий",
  age: 24,
  gender: "мужской",
  phone: {
    home: "567-89-01",
    mobile: "89456789012"
  }
});


const olderThan25 = employees.filter(emp => emp.age > 25);


const names = employees.map(emp => emp.name);


employees.forEach(emp => {
  console.log(
    `Имя: ${emp.name}, Возраст: ${emp.age}, Пол: ${emp.gender}, Домашний: ${emp.phone.home}, Сотовый: ${emp.phone.mobile}`
  );
});