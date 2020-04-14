<template>
    <RedListItem>
        <div slot="list-item">
          <span class="strong">
            - {{ movie }}
          </span>
        </div>
    </RedListItem>
</template>

<script>
import RedListItem from '@/components/RedListItem.vue';

export default {
  components: {
    RedListItem,
  },
  props: {
    movie: String,
  },
};
</script>

<style scoped>
.strong {
  font-weight: bold;
}
</style>
