<template>
    <li class="list-item">
      <slot name="list-item">
        <strong>{{ movie }}</strong>
      </slot>
    </li>
</template>

<script>
export default {
  props: {
    movie: String,
  },
};
</script>
