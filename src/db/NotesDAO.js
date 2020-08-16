import { db } from './db';

export class NotesDAO {

    static getInstance() {
        return new NotesDAO();
    }

    get() {
        return db.notes.reverse().toArray();
    }

    save(note) {
        return db.notes.add(note);
    }

    remove(note) {
        return db.notes.delete(note.id);
    }
}