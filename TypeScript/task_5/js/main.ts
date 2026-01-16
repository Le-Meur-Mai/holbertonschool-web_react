const majorBrand: unique symbol = Symbol("majorCredits");
const minorBrand: unique symbol = Symbol("minorCredits");


interface MajorCredits {
    credits: number;
    [majorBrand]: true;
    // en gros on dit que l'interface MajorCredit correspond a un symbole unique et est non interchangeable
}

interface MinorCredits {
    credits: number;
    [minorBrand]: true;
}

function sumMajorCredits (subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const total: number = subject1.credits + subject2.credits;
    return {credits: total, [majorBrand]: true};
}

function sumMinorCredits (subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const total: number = subject1.credits + subject2.credits;
    return {credits: total, [minorBrand]: true};
}
// Je crois qu'il faut additionner les credits des deux sujets et return l'objet avec pour valeur la somme
