<template lang="html">
  <div v-if="data" class="">
    <div class="blockright">
      <p class="section-title_2">{{ data.title }}</p>
      <details open>
          <summary class="summary">{{ data.pm_wd.title }}</summary>
          <ul>
            <li v-for="skill in data.pm_wd.skills" :key="skill">{{ skill }}</li>
          </ul>
      </details>
      <details>
          <summary class="summary">{{ data.seo.title }}</summary>
          <ul>
            <li v-for="skill in data.seo.skills" :key="skill">{{ skill }}</li>
          </ul>
      </details>
      <details>
          <summary class="summary">{{ data.cms.title }}</summary>
          <ul>
              <li v-for="skill in data.cms.skills" :key="skill">{{ skill }}</li>
          </ul>
      </details>
      <details>
          <summary class="summary">{{ data.smm.title }}</summary>
          <ul>
              <li v-for="skill in data.smm.skills" :key="skill">{{ skill }}</li>
          </ul>
      </details>
      <details open>
          <summary class="summary">{{ data.additional.title }}</summary>
          <ul>
              <li v-for="skill in data.additional.skills" :key="skill">{{ skill }}</li>
          </ul>
      </details>
      <section class="lang">
        <p class="position_sub_titles">{{ data.lang.title }}</p>
        <div class="lang_wrap">
          <div class="graph-container" v-for="skill in data.lang.skills" :key="skill.title">
            <div class="graph-item-container">
                <div class="graph-item" :title="skill.level">
                    <div class="circle-bg">
                        <div class="text-container">
                            <p class="text">{{ skill.code }}</p>
                        </div>
                        <div class="rect"></div>
                        <div class="rect"></div>
                    </div>
                </div>
            </div>
          </div>
            <!--
            <div class="rect-en1"></div>
            <div class="rect-en2"></div>

            <div class="graph-item-container">
                <div class="graph-item" :title="data.langs.skills.ru.title">
                    <div class="circle-bg">
                        <div class="text-container">
                            <p class="text">Ru</p>
                        </div>
                        <div class="rect-ru"></div>
                        <div class="rect-ru"></div>
                    </div>
                </div>
            </div>
            <div class="graph-item-container">
              <div class="graph-item" :title="data.langs.skills.de.title">
                  <div class="circle-bg">
                      <div class="text-container">
                          <p class="text">De</p>
                      </div>
                      <div class="rect-de1"></div>
                      <div class="rect-de2"></div>
                  </div>
              </div>
            </div> -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import getBD from '@/composables/getBD'

export default {
  name: 'Skills',
  setup() {
    const { loadData, data, error } = getBD()

    loadData('http://localhost:3000/skills')

    return { data, error }
  }
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

.circle-bg {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    background: #eee;
    z-index: 0;
}
.circle-bg:hover .rect-de1,
.circle-bg:hover .rect-de2,
.circle-bg:hover .rect-en1,
.circle-bg:hover .rect-en2,
.circle-bg:hover .rect-ru {
    background: #000;
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

.rect-de1 {
    position: absolute;
    width: 50px;
    height: 100px;
    background: #777;
    z-index: 1;
    border-radius: 50px 0 0 50px;
    transform: rotate(0deg);
}
.rect-de2 {
    position: absolute;
    left: 47.2%;
    top: 11%;
    width: 50px;
    height: 100px;
    background: #777;
    z-index: 1;
    border-radius: 0 50px 50px 0;
    transform: rotate(26.5deg);
}

.lang:first-child rect {
    position: absolute;
    width: 50px;
    height: 100px;
    background: #777;
    z-index: 1;
    border-radius: 50px 0 0 50px;
    transform: rotate(0deg);
}
.rect-en2 {
    position: absolute;
    left: 45.5%;
    top: 14%;
    width: 50px;
    height: 100px;
    background: #777;
    z-index: 1;
    border-radius: 0 50px 50px 0;
    transform: rotate(34.5deg);
}
.rect-ru {
    position: absolute;
    width: 100px;
    height: 100px;
    background: #777;
    z-index: 1;
    border-radius: 50px;
}

</style>
