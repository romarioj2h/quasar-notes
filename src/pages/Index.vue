<template>
  <div>
    <div v-for="note in notes">
      <q-card class="my-card bg-blue-grey text-white q-my-md">
        <q-card-section>
          <div class="text-h6">{{ note.title }}</div>
        </q-card-section>

        <q-card-section>
          {{ note.content }}
        </q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-btn flat :to="'/edit/' + note.id">{{ $t('index.edit') }}</q-btn>
          <q-btn flat @click="remove(note)">{{ $t('index.delete') }}</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn to="/add" fab icon="add" color="primary" />
    </q-page-sticky>
  </div>
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
  methods: {
    remove: function(note) {
      NotesDAO.getInstance().remove(note).then(() => {
        this.refresh();
        this.$q.notify(this.$t('index.deleted'));
      });
    },
    refresh: function() {
      NotesDAO.getInstance().get().then(result => {
        this.notes = result;
      });
    }
  },
  mounted: function() {
    this.refresh();
  }
}
</script>
