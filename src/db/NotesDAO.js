import { db } from './db';

export class NotesDAO {

    static getInstance() {
        return new NotesDAO();
    }

    get() {
        return db.notes.toArray();
    }
}