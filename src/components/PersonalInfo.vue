<template lang="html">
    <div v-if="data" class="blockleft">
      <div class="introduction">
        <div class="intro_wrap">
          <div class="personal_data">
            <p class="section-title_1">{{ data.personal.title }}:</p>
            <ul class="pdatalist">
              <li v-for="i in data.personal.personaldata" :key="i.title"><b>{{ i.title }}:</b> {{ i.text }}</li>
              <li><b>{{ data.personal.birthday }}:</b> {{ data.birthday_date }} (<span id="full-year">{{ fullYear }}</span> years old)</li>
            </ul>
          </div>
          <div class="contacts">
            <p class="section-title_1">{{ contacts }}</p>
            <span>
              <a href="skype:Lux-exchange.com?chat"><svg class="contact_icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.987 13.966c1.357-7.765-5.416-14.412-13.052-12.979-5.821-3.561-12.503 3.226-8.935 9.029-1.387 7.747 5.384 14.48 13.083 13.01 5.832 3.536 12.493-3.26 8.904-9.06zm-10.603 5.891c-3.181 0-6.378-1.448-6.362-3.941.005-.752.564-1.442 1.309-1.442 1.873 0 1.855 2.795 4.837 2.795 2.093 0 2.807-1.146 2.807-1.944 0-2.886-9.043-1.117-9.043-6.543 0-2.938 2.402-4.962 6.179-4.741 3.602.213 5.713 1.803 5.917 3.289.101.971-.542 1.727-1.659 1.727-1.628 0-1.795-2.181-4.6-2.181-1.266 0-2.334.528-2.334 1.674 0 2.395 8.99 1.005 8.99 6.276-.001 3.039-2.423 5.031-6.041 5.031z"/></svg>{{ data.personal.name }} {{ data.personal.surname }}</a>
              <a title="Telegram" href="tg://resolve?domain=DShreyder"><svg class="contact_icons" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/></svg>{{ data.personal.telegram }}</a>
              <a title="WhatsApp" href="whatsapp://send?phone=+436504200204"><svg class="contact_icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>{{ data.personal.whatsApp }}</a>
              <a href="mailto:schreyders@gmail.com" target="_blank"><svg class="contact_icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>{{ data.personal.email }}</a>
              <a href="tel:+436504200204"><svg class="contact_icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z"/></svg>{{ data.personal.mobile_phone }}</a><br>
            </span>
          </div>
      </div>
        <div class="cover_letter">
          <p class="section-title_1">{{ data.personal.pitch_title }}:</p>
          <p>{{ data.personal.pitch_text }}</p>
        </div>

        <div class="icons">
          <div class="icons__social">
            <p class="section-title_1">{{ data.personal.social }}</p>
            <a class="a0" href="https://www.instagram.com/dmitriyshreyder/" target="_blank">
              <i class="icon-instagram" title="instagram"></i>
            </a>
            <a class="a0" href="https://www.facebook.com/dmitriy.shreyder" target="_blank">
              <i class="icon-facebook" title="facebook"></i>
            </a>
          </div>
          <div class="icons__hobbies">
            <p class="section-title_1">{{ data.personal.hobby_title }}</p>
            <i class="icon-barbell" title="fitness"></i>
            <i class="icon-mountains" title="hiking"></i>
            <i class="icon-language" title="learn languagies"></i>
          </div>
        </div>
      </div>
    </div>
    <Error :error="error" />
</template>

<script>
import { ref } from 'vue'
import Error from '@/components/Error'

export default {
  name: 'Skills',
  components: { Error },
  props: [ 'data', 'error' ],
  setup() {
    //Get my Full years
    let birthDay = new Date("01 / 02 / 1988");
    let currentYear = new Date();
    let fullYear = ref(Math.floor(
      (currentYear.getTime() - birthDay.getTime())/(1000 * 60 * 60 * 24 * 365)
    ));
    //let fullYear = currentYear.getFullYear() - 1988;
    // document.querySelector("#full-year").innerHTML = fullYear;

    return { fullYear }
  },
  data() {
    return {
      contacts: 'Contacts:'
    }
  }
}
</script>

<style lang="css" scoped>

</style>
