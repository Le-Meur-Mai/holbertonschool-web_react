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
