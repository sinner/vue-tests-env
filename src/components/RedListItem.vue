<template>
    <ListItem>
      <div slot="list-item" class="colored-list-item">
        <slot name="list-item">
          {{ movie }}
        </slot>
      </div>
    </ListItem>
</template>

<script>
import ListItem from '@/components/ListItem.vue';

export default {
  components: {
    ListItem,
  },
  props: {
    movie: String,
  },
};
</script>

<style scoped>
.colored-list-item {
  color: red;
}
</style>
