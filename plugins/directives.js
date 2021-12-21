import Vue from 'vue'
import { VueMaskDirective } from 'v-mask'

export default ({ app }) => {
  Vue.directive('mask', VueMaskDirective)
}
