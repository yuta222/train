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
          return "三鷹駅"
          break
        case '02':
          return "吉祥寺駅"
          break
        case '03':
          return "西荻窪駅"
          break
        case '04':
          return "荻窪駅"
          break
        case '05':
          return "阿佐ケ谷駅"
          break
        case '06':
          return "高円寺駅"
          break
        case '07':
          return "中野駅"
          break
        case '08':
          return "東中野駅"
          break
        case '09':
          return "大久保駅"
          break
        case '10':
          return "新宿駅"
          break
        case '11':
          return "代々木駅"
          break
        case '12':
          return "千駄ケ谷駅"
          break
        case '13':
          return "信濃町駅"
          break
        case '14':
          return "四ツ谷駅"
          break
        case '15':
          return "市ケ谷駅"
          break
        case '16':
          return "飯田橋駅"
          break
        case '17':
          return "水道橋駅"
          break
        case '18':
          return "御茶ノ水駅"
          break
        case '19':
          return "秋葉原駅"
          break
        case '20':
          return "浅草橋駅"
          break
        case '21':
          return "両国駅"
          break
        case '22':
          return "錦糸町駅"
          break
        case '23':
          return "亀戸駅"
          break
        case '24':
          return "平井駅"
          break
        case '25':
          return "新小岩駅"
          break
        case '26':
          return "小岩駅"
          break
        case '27':
          return "市川駅"
          break
        case '28':
          return "本八幡駅"
          break
        case '29':
          return "下総中山駅"
          break
        case '30':
          return "西船橋駅"
          break
          case '31':
            return "船橋駅"
            break
          case '32':
            return "東船橋駅"
            break
          case '33':
            return "津田沼駅"
            break
          case '34':
            return "幕張本郷駅"
            break
          case '35':
            return "幕張駅"
            break
          case '36':
            return "新検見川駅"
            break
          case '37':
            return "稲毛駅"
            break
          case '38':
            return "西千葉駅"
            break
          case '39':
            return "千葉駅"
            break
          return this.message
      }
    },
  },
}).mount('#app')
