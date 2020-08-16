<template>
  <q-form @submit="save()" class="q-gutter-md">
    <q-input v-model="note.title" outlined :label="$t('add.title')" :rules="[val => !!val || $t('add.fieldIsRequired')]" />
    <q-input v-model="note.content" outlined type="textarea" :label="$t('add.content')"/>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn type="submit" fab icon="done_all" color="primary" />
    </q-page-sticky>
  </q-form>
</template>

<script>
import { NotesDAO } from '../db/NotesDAO';
import { Note } from '../models/Note';

export default {
  name: 'Add',
  data () {
    return {
      note: new Note()
    }
  },
  methods: {
    save: function() {
      NotesDAO.getInstance().save(this.note).then(() => {
        this.$q.notify(this.$t('add.saved'));
        window.history.back();
      });
    }
  }
}
</script>
