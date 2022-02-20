<template lang="html">
  <div v-if="error" class="my-notify-error">
    <p class="warning">{{ error }}!</p>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: [ 'error' ]
}
</script>

<style lang="css" scoped>
</style>
