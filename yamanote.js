Vue.createApp({
  data: function () {
    return {
      message: '',
    }
  },
  computed: {
    message2: function () {
      switch (this.message) {
        case '01':
          return "東京駅"
          break
        case '02':
          return "神田駅"
          break
        case '03':
          return "秋葉原駅"
          break
        case '04':
          return "御徒町駅"
          break
        case '05':
          return "上野駅"
          break
        case '06':
          return "鶯谷駅"
          break
        case '07':
          return "日暮里駅"
          break
        case '08':
          return "西日暮里駅"
          break
        case '09':
          return "田端駅"
          break
        case '10':
          return "駒込駅"
          break
        case '11':
          return "巣鴨駅"
          break
        case '12':
          return "大塚駅"
          break
        case '13':
          return "池袋駅"
          break
        case '14':
          return "目白駅"
          break
        case '15':
          return "高田馬場駅"
          break
        case '16':
          return "新大久保駅"
          break
        case '17':
          return "新宿駅"
          break
        case '18':
          return "代々木駅"
          break
        case '19':
          return "原宿駅"
          break
        case '20':
          return "渋谷駅"
          break
        case '21':
          return "恵比寿駅"
          break
        case '22':
          return "目黒駅"
          break
        case '23':
          return "五反田駅"
          break
        case '24':
          return "大崎駅"
          break
        case '25':
          return "品川駅"
          break
        case '26':
          return "高輪ゲートウェイ駅"
          break
        case '27':
          return "田町駅"
          break
        case '28':
          return "浜松町駅"
          break
        case '29':
          return "新橋駅"
          break
        case '30':
          return "有楽町駅"
          break
          return this.message
      }
    },
  },
}).mount('#app')
