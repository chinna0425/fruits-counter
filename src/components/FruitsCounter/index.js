import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  eatMango = () => {
    this.setState(prevstate => ({count1: prevstate.count1 + 1}))
  }

  eatBanana = () => {
    this.setState(prevstate => ({count2: prevstate.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    const {imgUrls} = this.props
    const {imgUrl1, imgUrl2} = imgUrls
    return (
      <div className="background-container">
        <div className="inner-container">
          <h1 className="heading1">
            Bob ate <span className="style">{count1}</span> mangoes{' '}
            <span className="style">{count2}</span> bananas
          </h1>
          <div className="card-containers">
            <div className="card1">
              <img src={imgUrl1} alt="mango" className="imageset" />
              <button className="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="card1">
              <img src={imgUrl2} alt="banana" className="imageset" />
              <button className="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
