Vue.createApp({
  data: function () {
    return {
      message: '',
    }
  },
  computed: {
    message2: function(){
      switch(this.message){
        case '01':
          return "大船駅"
          break
          case '02':
            return "本郷台駅"
          break
          case '03':
            return "港南台駅"
          break
          case '04':
            return "洋光台駅"
          break
          case '05':
            return "新杉田駅"
          break
          case '06':
            return "磯子駅"
          break
          case '07':
            return "根岸駅"
          break
          case '08':
            return "山手駅"
          break
          case '09':
            return "石川町駅"
            break
            case '10':
              return "関内駅"
            break
            case '11':
              return "桜木町駅"
            break
            case '12':
              return "横浜駅"
            break
            case '13':
              return "東神奈川駅"
            break
            case '14':
              return "新子安駅"
            break
            case '15':
              return "鶴見駅"
            break
            case '16':
              return "川崎駅"
            break
            case '17':
              return "蒲田駅"
              break
              case '18':
                return "大森駅"
              break
              case '19':
                return "大井町駅"
              break
              case '20':
                return "品川駅"
              break
              case '21':
                return "高輪ゲートウェイ駅"
              break
              case '22':
                return "田町駅"
              break
              case '23':
                return "浜松町駅"
              break
              case '24':
                return "新橋駅"
              break
              case '25':
                return "有楽町駅"
              break
              case '26':
                return "東京駅"
                break
                case '27':
                  return "神田駅"
                break
                case '28':
                  return "秋葉原駅"
                break
                case '29':
                  return "御徒町駅"
                break
                case '30':
                  return "上野駅"
                break
                case '31':
                  return "鶯谷駅"
                break
                case '32':
                  return "日暮里駅"
                break
                case '33':
                  return "西日暮里駅"
                  break
                  case '34':
                    return "田端駅"
                    break
                    case '35':
                      return "上中里駅"
                    break
                    case '36':
                      return "王子駅"
                    break
                    case '37':
                      return "東十条駅"
                    break
                    case '38':
                      return "赤羽駅"
                    break
                    case '39':
                      return "川口駅"
                    break
                    case '40':
                      return "西川口駅"
                    break
                    case '41':
                      return "	蕨駅"
                    break
                    case '42':
                      return "南浦和駅"
                    break
                    case '43':
                      return "浦和駅"
                      break
                      case '44':
                        return "北浦和駅"
                      break
                      case '45':
                        return "与野駅"
                      break
                      case '46':
                        return "さいたま新都心駅"
                      break
                      case '47':
                        return "大宮駅"
                      break
        return this.message
      }
    },
  },
}).mount('#app')
