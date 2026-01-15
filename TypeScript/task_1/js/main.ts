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

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};

// console.log(printTeacher("John", "Doe")); -> La commande de test

// On cree une interface pour la fonction printTeacher

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructorInterface {
    firstName: string;
    lastName: string;
}

// On prepare les interfaces pour la classe

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName }: StudentConstructorInterface) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
    
}

// On cree la class studentclass
