<template lang="html">
  <div v-if="$store.state.db">
    <div>
      <p class="section-title_2">{{ $store.state.db.skilllist.title }}:</p>
      <details v-for="skill in $store.state.db.skilllist.skills" :open="skill.open" :key="skill.title">
          <summary class="summary">{{ skill.title }}</summary>
          <ul>
            <li v-for="item in skill.skills" :key="skill">{{ item }}</li>
          </ul>
      </details>
      <section class="lang">
        <p class="position_sub_titles">{{ $store.state.db.skilllist.lang.title }}</p>
        <div class="lang_wrap">
          <div class="graph-container" v-for="skill in $store.state.db.skilllist.lang.skills" :key="skill.title">
            <div class="graph-item-container">
                <div class="graph-item" :title="skill.level">
                    <div class="circle-bg">
                        <div class="text-container">
                            <p class="text">{{ skill.code }}</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <Error :error="error" />
</template>

<script>
import Error from '@/components/Error'

export default {
  name: 'Skills',
  components: { Error }
}
</script>

<style lang="css" scoped>
.lang {
    border-top: 1px dotted #ddd;
    margin: 20px 0;
}

.lang_wrap {
  display: flex;
  justify-content: space-around;
}
.graph-container {
    /* display: flex; */
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.graph-item-container {
    width: 33.33%;
    text-align: center;
}
.graph-item {
    width: 100px;
    height: 100px;
    /* background: #000; */
    display: inline-block;
    position: relative;
    overflow: hidden;
}

.text-container {
    display: flex;
    position: absolute;
    background: #fff;
    left: 10px;
    top: 10px;
    width: 80px;
    height: 80px;
    margin: auto;
    line-height: 80px;
    border-radius: 50px;
    z-index: 100;
}

.text {
    margin: auto;
}

.circle-bg {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: #eee;
  z-index: 0;
  position: relative;
}
.circle-bg::before {
  content: "";
  position: absolute;
  width: 50px;
  height: 100px;
  background: var(--bright-color);
  z-index: 1;
  border-radius: 50px 0 0 50px;
  transform: rotate(0deg);
  left: 0;
  top: 0;
}

.circle-bg::after {
  content: "";
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 100px;
  background: var(--bright-color);
  border-radius: 0 50px 50px 0;
  transform: rotate(0deg) translate(0%, 0%);
}

.graph-container:first-child .circle-bg::after {
  transform: rotate(34.5deg) translate(7.5%, 14%);
}

.graph-container:nth-child(3) .circle-bg::after {
  transform: rotate(26.5deg) translate(5%, 11%);
}

.circle-bg:hover:after,
.circle-bg:hover:before {
  background: #000;
}

</style>
