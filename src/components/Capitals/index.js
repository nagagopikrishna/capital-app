import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {countryId: countryAndCapitalsList[0].id}

  onChangeCapitalText = event => {
    this.setState({countryId: event.target.value})
  }

  getCountry = countryId => {
    const activeCountry = countryAndCapitalsList.find(
      each => each.id === countryId,
    )

    return activeCountry.country
  }

  render() {
    const {countryId} = this.state
    const country = this.getCountry(countryId)
    console.log(country)

    return (
      <div className="app-container">
        <div className="capital-section-card">
          <h1 className="heading"> Countries And Capitals </h1>
          <div className="capital-container">
            <select
              className="select-element"
              onChange={this.onChangeCapitalText}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option value={eachCountry.id} key={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description"> is capital of which country?</p>
          </div>
          <h1 className="country"> {country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
