import Vue from 'vue'
import App from './App'
require('expose?$!expose?jQuery!jquery')
require('bootstrap-webpack')

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
