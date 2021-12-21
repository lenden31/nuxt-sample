const mixin = {
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    formatMoney(val) {
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
  }
}

export default mixin
