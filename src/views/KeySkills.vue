<template>
  <div class="home">
      <Skills :data="data" :error="error" />
  </div>
</template>

<script>
// @ is an alias to /src
import Skills from '@/components/Skills'

export default {
  name: 'KeySkills',
  props: [ 'data', 'error' ],
  components: {
    Skills
  }
}
</script>
