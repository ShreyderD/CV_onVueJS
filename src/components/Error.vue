<template lang="html">
  <div v-if="$store.state.error" class="my-notify-error">
    <p class="warning">{{ $store.state.error }}!</p>
  </div>
</template>

<script>
export default {
  name: "Error"
}
</script>

<style lang="css" scoped>

</style>
