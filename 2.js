// JSON, который мы будем парсить
const jsonString = `
    {
    "list": [
        {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
        },
        {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
        }
    ]
   }  
`;

// Получение данных
const data = JSON.parse(jsonString);
const list = data.list;

// замена типа данных для значений age на числовой
for (let i=0; i<list.length; i++) {
    list[i].age = Number(list[i].age);
}

console.log('list:', list);