<template>
  <q-form @submit="save()" class="q-gutter-md">
    <q-input v-model="note.title" outlined :label="$t('editor.title')" :rules="[val => !!val || $t('editor.fieldIsRequired')]" />
    <q-input v-model="note.content" outlined type="textarea" :label="$t('editor.content')"/>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn type="submit" fab icon="done_all" color="primary" />
    </q-page-sticky>
  </q-form>
</template>

<script>
import { NotesDAO } from '../db/NotesDAO';
import { Note } from '../models/Note';

export default {
  name: 'Editor',
  props: {
    id: {
      type: Number,
      required: false
    }
  },
  data () {
    return {
      note: new Note()
    }
  },
  methods: {
    save: function() {
      NotesDAO.getInstance().save(this.note).then(() => {
        this.$q.notify(this.$t('editor.saved'));
        window.history.back();
      });
    }
  },
  mounted: function() {
    if (this.id) {
      NotesDAO.getInstance().getById(this.id).then(note => {
        this.note = note;
      });
    }
  }
}
</script>
