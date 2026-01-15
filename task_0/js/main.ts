interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Miles",
    lastName: "Morales",
    age: 19,
    location: "Brooklyn"
};

const student2: Student = {
    firstName: "Peter",
    lastName: "Parker",
    age: 21,
    location: "Queens"
};

const studentsList: Student[] = [student1, student2];

// On passe au js vanilla

const tableTitles: String[] = ["First Name", "Location"];

// On fait le header du tableau
const table = document.createElement('table');
const tHead = document.createElement('thead');
const titlesRow = document.createElement('tr');

// On cree le bon nombre de colonnes dans le header du tableau
tableTitles.forEach((title) => {
    const column = document.createElement('th');
    column.setAttribute("scope", "col");
    column.textContent = `${title}`;
    titlesRow.appendChild(column);
});

tHead.appendChild(titlesRow);
table.appendChild(tHead);

// On fait le body du tableau

const tBody = document.createElement('tbody');

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const celluleName = document.createElement('td');
    celluleName.textContent = `${student.firstName}`;
    row.appendChild(celluleName);
    
    const celluleLocation = document.createElement('td');
    celluleLocation.textContent = `${student.location}`;
    row.appendChild(celluleLocation);
    tBody.appendChild(row);
});

table.appendChild(tBody);
document.body.appendChild(table);
