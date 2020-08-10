<template>
  <q-page class="flex flex-center">
    <div v-for="note in notes">
      <q-card class="my-card bg-secondary text-white">
        <q-card-section>
          <div class="text-h6">{{ note.title }}</div>
        </q-card-section>

        <q-card-section>
          {{ note.content }}
        </q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-btn flat>{{ $t('index.edit') }}</q-btn>
          <q-btn flat>{{ $t('index.delete') }}</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { NotesDAO } from '../db/NotesDAO';

export default {
  name: 'PageIndex',
  data () {
    return {
      notes: []
    }
  },
  mounted: function() {
    NotesDAO.getInstance().get().then(result => {
      this.notes = result;
    });
  }
}
</script>
