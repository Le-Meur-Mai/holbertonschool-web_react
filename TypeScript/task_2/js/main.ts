interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// on prepare les interfaces pour les classes

class Director implements DirectorInterface {

    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
    
}

class Teacher implements TeacherInterface {

    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
    
}

function createEmployee(salary: number | string): Teacher | Director {
    if (typeof(salary) === "number" && salary < 500) {
        return new Teacher;
    } else {
        return new Director;
    }
}
// creation  d'une fonction qui cree des nouvelles instances de Teacher ou Director

function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
    // En gros on dit: retourne le type de l'employee comme Director si la methode du directeur n'est pas undefined
}

function executeWork(employee: Teacher | Director): void {

    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

// Affiche differentes sorties suivant si l'employee est le directeur ou pas
