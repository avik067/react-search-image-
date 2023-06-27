import {Component} from 'react'

import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchIn: ''}

  search = event => {
    const normal = event.target.value
    const toLower = normal.toLowerCase()

    this.setState({searchIn: toLower})
  }

  render() {
    const {destinationsList} = this.props
    const {searchIn} = this.state
    const newNewSearchDestinationList = destinationsList.filter(each => {
      const name = each.name.toLowerCase()
      console.log(name)
      return name.includes(searchIn)
    })

    return (
      <div className="backgroud">
        <div className="card">
          <h1>Destination Search</h1>

          <input className="input" type="search" onChange={this.search} />

          <ul className="flex-container">
            {newNewSearchDestinationList.map(each => (
              <DestinationItem item={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
