import FruitsCounter from './components/FruitsCounter'

import './App.css'

const imgUrls = {
  imgUrl1: 'https://assets.ccbp.in/frontend/react-js/mango-img.png',
  imgUrl2: 'https://assets.ccbp.in/frontend/react-js/banana-img.png ',
}
const App = () => <FruitsCounter imgUrls={imgUrls} />

export default App
