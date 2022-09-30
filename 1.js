// создаем экземпляр класса DOMParser
const parser = new DOMParser();

// XML, который будем парсить
const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;

// Получение данных
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");
const nameNode = listNode.querySelectorAll("name");
const firstNameNode = listNode.querySelectorAll("first");
const secondNameNode = listNode.querySelectorAll("second");
const ageNode = listNode.querySelectorAll("age");
const profNode = listNode.querySelectorAll("prof");

// объявление нового массива, в который будут добавлены данные двух студентов
const result = [];

// добавление данных для каждого студента
for (let i= 0; i<nameNode.length; i++) {
    let langAttr = nameNode[i].getAttribute("lang");
    result[i] = { 
        name: firstNameNode[i].textContent + " " + secondNameNode[i].textContent,
        age: Number(ageNode[i].textContent),
        prof: profNode[i].textContent,
        lang: langAttr,
    };
}

console.log('list:',result);

