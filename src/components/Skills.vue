<template lang="html">
  <div v-if="data" class="">

  <div class="blockright">
    <p class="section-title_2">{{ data.title }}</p>
    <details open>
        <summary class="summary">{{ data.pm_webdeb_title }}</summary>
        <ul>
          <li>{{ data.pm_webdeb_skills[0] }}: <b>Agile</b>/KANBAN</li>
          <li>PM Software: Trello, <b>Monday.com</b>, Jira, Google Sheets</li>
          <li><b>HTML 5, CSS 3, Bootstrap(3,4)</b></li>
          <li><b>JavaScript</b> - first level</li>
          <li>PHP - fundamentals</li>
          <li>Mobile Web Design Optimization</li>
          <li><strong>PIM</strong> - Content Management Automation (180.000 Products)</li>
          <li>Google: Sheets, Docs, Slides, Drive</li>
          <li>Microsoft: Excel, Word, SharePoint</li>
          <li><b>SAP</b></li>
        </ul>
    </details>
    <details open>
        <summary class="summary">SEO</summary>
        <ul>
            <li><b>Google Webmaster</b> Tools</li>
            <li>Google Analytics</li>
            <li>Google Search Console</li>
            <li>Google Optimize <b>(A/B Testing)</b></li>
            <li>Google Tag Manager</li>
            <li>Google Trends</li>
            <li>Google AdWords</li>
            <li><b>Yandex</b> Webmeister Tools</li>
            <li>Yandex Analytic Tools (Metrika, Webvisor)</li>
            <li><b>MOZ</b>, SEOPtimer, SEOquake</li>
        </ul>
    </details>
    <details>
        <summary class="summary">CMS</summary>
        <ul>
            <li>OpenCart</li>
            <li>Magento</li>
            <li>Wordpress</li>
            <li>Contao</li>
        </ul>
    </details>
    <details>
        <summary class="summary">SMM</summary>
        <ul>
            <li>Managing Tools</li>
            <li>Analytic Tools</li>
            <li>Automation Tools</li>
        </ul>
    </details>
    <details>
        <summary class="summary">Additionally</summary>
        <ul>
            <li>Photoshop</li>
            <li>Design: UX/UI Design, Neuro-Marketing - fundamentals</li>
            <li>Marketing Strategy Planning</li>
            <li>Email Marketing + Mailchimp</li>
        </ul>
    </details>
    <div class="lang">
      <p class="position_sub_titles">Languages:</p>
      <div class="graph-container">
          <div class="graph-item-container">
              <div class="graph-item" title="English (B2 - IELTS)">
                  <div class="circle-bg">
                      <div class="text-container">
                          <p class="text">En<br>(IELTS)</p>
                      </div>
                      <div class="rect-en1"></div>
                      <div class="rect-en2"></div>
                  </div>
              </div>
          </div>
          <div class="graph-item-container">
              <div class="graph-item" title="Russian (native speaker)">
                  <div class="circle-bg">
                      <div class="text-container">
                          <p class="text">Ru</p>
                      </div>
                      <div class="rect-ru">
                      </div>
                  </div>
              </div>
          </div>
          <div class="graph-item-container">
              <div class="graph-item" title="German (C1)">
                  <div class="circle-bg">
                      <div class="text-container">
                          <p class="text">De</p>
                      </div>
                      <div class="rect-de1"></div>
                      <div class="rect-de2"></div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getBD from '@/composables/getBD'

export default {
  name: 'Skills',
  setup() {
    const { loadData, data, error } = getBD()

    loadData('http://localhost:3000/keyskills')

    return { data, error }
  }
}
</script>

<style lang="css" scoped>

</style>
