Vue.createApp({
  data: function () {
    return {
      message: '',
    }
  },
  computed: {
    message2: function () {
      switch (this.message) {
        case '1':
          return "椿"
          break
        case '2':
          return "梅"
          break
        case '3':
          return "タンポポ"
          break
        case '4':
          return "桜"
          break
        case '5':
          return "菖蒲"
          break
        case '6':
          return "あじさい"
          break
        case '7':
          return "朝顔"
          break
        case '8':
          return "ひまわり"
          break
        case '9':
          return "野菊"
          break
        case '10':
          return "ススキ"
          break
        case '11':
          return "銀杏"
          break
        case '12':
          return "シクラメン"
          break
          return this.message
      }
    },
  },
}).mount('#app')
