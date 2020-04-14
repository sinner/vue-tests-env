<template>
  <div>
    <span>{{ celsius }} deg. Celsius</span>
    <span>{{ fahrenheit }} deg. Fahrenheit</span>
  </div>
</template>

<script>
export default {
  props: ['temp'],

  data() {
    return {
      type: 'celsius',
      degrees: 0,
    };
  },

  computed: {
    celsius() {
      if (this.type === 'celsius') {
        return this.degrees;
      }

      return parseInt((this.degrees - 32) * 0.556, 10);
    },

    fahrenheit() {
      if (this.type === 'fahrenheit') {
        return this.degrees;
      }

      return (this.degrees * 1.8) + 32;
    },
  },

  watch: {
    temp: {
      immediate: true,
      handler(val) {
        if (!val) return;
        this.degrees = parseInt(val, 10);
        this.type = String(val).endsWith('f') ? 'fahrenheit' : 'celsius';
      },
    },
  },
};
</script>
