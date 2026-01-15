interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// L'interface Teacher ou on peut ajouter ou non yearsOfExperience et d'autres proprietes

interface Directors extends Teacher {
    numberOfReports: number;
}

// On etend l'interface de teacher et on rajoute un attribut

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};

// console.log(printTeacher("John", "Doe")); -> La commande de test

// On cree une interface pour la fonction printTeacher
