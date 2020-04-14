<template>
  <div class="list">
    <ul>
      <StrongRedListItem
        :key="index"
        v-for="(movie, index) in marvelMovies"
        :movie="movie"
      />
    </ul>
  </div>
</template>

<script>
import StrongRedListItem from '@/components/StrongRedListItem.vue';

export default {
  components: {
    StrongRedListItem,
  },

  data() {
    return {
      marvelMovies: [
        'Iron Man',
        'Avengers',
        'Infitinity War',
      ],
    };
  },

};
</script>

<style scoped>
.list {
  text-align: left;
}
</style>
