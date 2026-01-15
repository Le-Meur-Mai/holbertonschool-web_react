interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// L'interface Teacher ou on peut ajouter ou non yearsOfExperience et d'autres proprietes
