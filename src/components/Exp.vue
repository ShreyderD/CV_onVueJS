<template lang="html">
  <div v-if="data" class="">
    <p class="section-title_2" id="experience">{{ data.title }}</p>
    <div v-for="job in data.jobs" :key="job.title" @click="this.showPosition = !this.showPosition" class="position">
        <div class="period">
            <div class="center">{{ job.from }}<br />{{ job.to }}</div>
        </div>
        <div class="position_title"><strong>{{ job.title }}</strong> ({{ job.company }}, {{ job.location }})</div>
        <div v-if="showPosition" class="position__description">
          <p>{{ job.description }}</p>
          <div class="responsabilities">
              <p class="position_sub_titles">{{ data.txt1 }}</p>
              <ul v-for="item in job.aor" :key="item.title">
                  <li>{{ item.title }}
                      <ul>
                          <li v-for="item in item.list" :key="item">{{ item }}</li>
                      </ul>
                  </li>
              </ul>
              <br>
          </div>
        </div>
    </div>
           <div class="position">
               <div class="period">
                   <div class="center">2019 June<br />- up to date</div>
               </div>
               <div class="position_title"><strong>Development B2B-platform & Data Proccessing</strong> (Swarovski, Wattens)</div>
               <div class="position__description">Design-Prototypes-Database development, Data Proccessing.
                   <div class="responsabilities">
                       <p class="position_sub_titles">Areas of responsibility:</p>
                       <ul>
                           <li>VBA Scripts development for:
                               <ul>
                                   <li>SAP-Excel Integration</li>
                                   <li>Automation of data processing within Excel</li>
                                   <li>VBA custom Functions</li>
                                   <li>Outlook e-mail traffic automation</li>
                               </ul>
                           </li>
                           <li>Application and testing of the integration tools for SAP and Excel from <b>third-party providers</b>, such as "Process Runner" from the international company <b>"Innowera"</b></li>
                           <li>Supplier requests: e-mail and phone</li>
                           <li>SAP MM – data Review and correction (manually)</li>
                       </ul>
                       <br>
                   </div>
               </div>
           </div>
           <div class="position">
               <div class="period">
                   <div class="center">2019 January<br />2019 June</div>
               </div>
               <div class="position_title"><strong>IT Freelance</strong></div>
               <div class="position__description">Participation in various projects.
                   <div class="responsabilities">
                       <p class="position_sub_titles">Areas of responsibility:</p>
                       <ul>
                           <li><b>Web Development</b></li>
                           <li><b>SEO</b> Consultation</li>
                       </ul>
                   </div>
               </div>
           </div>

           <div class="position">
               <div class="period">
                   <div class="center">January 2017<br>May 2018</div>
               </div>
               <div class="position_title"><strong>IT Project Manager/SEO</strong> (Rupertus Pharmacy)</div>
               <div class="position__description">Support an <a href="www.rupertus-aposhop.com" target="_blank" rel="nofollow noreferrer noopener">existing online Shop</a> and develop a new one with more than 180.000 products.
                   <div class="responsabilities">
                       <p class="position_sub_titles">Areas of responsibility:</p>
                       <ul>
                           <li><b>Project Management</b> of the new online shop.</li>
                           <li>Web Developing of online pharmacy shop with <b>over 180.000 products</b> (<a href="https://yetipharm.com/" target="_blank" rel="nofollow noreferrer noopener">www.yetipharm.com</a>): from Technical Task to Development, Products/Content initial filling, Testing and Design!</li>
                           <li>Online Marketing/SEO: microdata, schema.org, speed improvements...</li>
                           <li>Google Analytics</li>
                           <li>Google Webmaster</li>
                           <li>Mobile Web Design Optimization</li>
                           <li>Social Marketing: Strategie Planning</li>
                           <li>Analysis of the competitors</li>
                           <li>E-Mail Marketing: Design, Layout coding, Analytics</li>
                           <li>Content Management: 180.000 Products</li>
                       </ul>
                   </div>
               </div>
           </div>
           <div class="position">
               <div class="period">
                   <div class="center">July 2016<br>December 2016</div>
               </div>
               <div class="position_title"><strong>Merchandiser</strong> (BMS GmbH)</div>
               <div class="position__description">Merchandising in 12 Libro Branches in Styria (State of Austria)</div>
           </div>
           <div class="position">
               <div class="period">
                   <div class="center">February 2016<br>April 2016</div>
               </div>
               <div class="position_title"><strong>Online Shop Manager/SEO</strong> (GVS Austria e.U., Vienna)</div>
               <div class="position__description">
                   <div class="responsabilities">
                       <p class="position_sub_titles">Areas of responsibility:</p>
                       <ul>
                           <li>Online Marketing</li>
                           <li>Design updates</li>
                           <li>Content Management</li>
                           <li>Website and online shop analytics</li>
                           <li>Trends recognition</li>
                           <li>Google Adwords</li>
                       </ul>
                   </div>
               </div>
           </div>
           <div class="position">
               <div class="period">
                   <div class="center">June 2014<br>June 2016</div>
               </div>
               <div class="position_title"><strong>CEO of Lux-Exchange.com</strong> (Lux Exchange e.U. - my own project)</div>
               <div class="position__description">
                   <div class="responsabilities">
                       <p class="position_sub_titles">Areas of responsibility:</p>
                       <ul>
                           <li>Marketing</li>
                           <li>Online Marketing</li>
                           <li>Web Design</li>
                           <li>Team coordination (remotely): programmer and designer </li>
                           <li>Negotiations with the partners (manufacturers)</li>
                           <li>Analysis of the competitors</li>
                           <li>Marketing Strategy Planning</li>
                           <li>SEO</li>
                           <li>Copywriting in 3 languages: English, German, Russian</li>
                           <li>Translation (German, English and Russian)</li>
                       </ul>
                   </div>
               </div>
           </div>
           <div class="position">
               <div class="period">
                   <div class="center">December 2013<br>May 2014</div>
               </div>
               <div class="position_title"><strong>Independent web search engine consultant</strong> (Appen Butler-Hill - Company in USA - remotely from Graz (Austria))</div>
               <div class="position__description">Monitoring and Evaluation of Web Content... (NDA)</div>
           </div>
           <div class="position">
               <div class="period">
                   <div class="center">June 2013<br>November 2013</div>
               </div>
               <div class="position_title"><strong>Director's Assistant</strong> (firm ITV GmbH)</div>
               <div class="position__description">
                   <div class="responsabilities">
                       <p class="position_sub_titles">Areas of responsibility:</p>
                       <ul>
                           <li>Sales Supporter</li>
                           <li>Negotiations with the customers</li>
                           <li>Offer calculations</li>
                           <li>Initial accounting</li>
                       </ul>
                   </div>
               </div>
           </div>
           <div class="position">
               <div class="period">
                   <div class="center">February 2013<br>March 2013</div>
               </div>
               <div class="position_title"><strong>Mystery Buyer</strong> (Bare International, Austria, <a href="www.bareinternational.com" target="_blank" rel="nofollow noreferrer noopener">www.bareinternational.com</a>)</div>
               <div class="position__description">Visit various shops, cafes and restaurants to check if the advisors are doing their job properly - as the rules say. During work I have reached the 9 professional level (9 out of 10). Kafes and restaurants in order to check the whether the consultants do their job properly - as it says in regulations. Doing the job I have reached 9-th professional level (9 of 10).</div>
           </div>
           <div class="position">
               <div class="period">
                   <div class="center">September 2008<br>September 2012</div>
               </div>
               <div class="position_title"><strong>Trader</strong> (Alor Broker, <a href="https://alorbroker.ru/" target="_blank" rel="nofollow noreferrer noopener">www.alorbroker.ru</a>)</div>
               <div class="position__description">We used to develop new <b>arbitrage</b> strategies on Russian shares market and trade according to the strategies.
               </div>
           </div>
           <div class="position">
               <div class="period">
                   <div class="center">March 2008<br>September 2008</div>
               </div>
               <div class="position_title"><strong>Waiter</strong> (Russia, <a href="www.amaks-hotels.ru" target="_blank" rel="nofollow noreferrer noopener">www.amaks-hotels.ru</a>)</div>
               <div class="position__description">As a student in Russia, I have been working in a restaurant.
               </div>
           </div>
  </div>

</template>

<script>
import getDB from '@/composables/getDB'

export default {
  name: "Exp",
  setup() {
    const { loadData, data, error } = getDB()

    loadData('http://localhost:3000/experience')

    return { data, error }
  },
  data() {
    return {
      showPosition: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
