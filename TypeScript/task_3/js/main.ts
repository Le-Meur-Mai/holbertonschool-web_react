/// <reference path="./crud.d.ts" />
// on import toutes nos declarations de fonctions avant la compilation
import {RowID, RowElement} from './interface';
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
}

const newRowID: RowID = CRUD.insertRow(row);

row.age = 23;
const updatedRow: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23
}

const newObject = CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);
