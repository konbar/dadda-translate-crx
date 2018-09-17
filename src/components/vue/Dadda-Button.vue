<template>
  <div 
    @mouseup.stop="e => e" 
    @click.stop="handleClick" 
    class="__transltor_button" 
  />
</template>

<script>
export default {
  name: 'dadda-button',

  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
