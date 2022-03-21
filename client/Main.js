import React from 'react'
import SettingsBox from './SettingsBox'
import Welcome from './Welcome'
import Playing from './Playing'

const dummyData = [
  {id: 1, name: 'Jenny'},
  {id: 2, name: 'Ben'},
  {id: 3, name: 'Jay'},
  {id: 4, name: 'Leo'},
  {id: 5, name: 'Stanley'},
  {id: 6, name: 'Sharon'},
  {id: 7, name: 'Mindy'},
  {id: 8, name: 'Steven'},
  {id: 9, name: 'Andrew'},
  {id: 10, name: 'Nicole'},
  {id: 11, name: 'Sarah'},
  {id: 12, name: 'Valerie'},
  {id: 13, name: 'Leonard'},
]

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'welcome',
      choices: [],
      favorites: [],
      year: 1985,
      gender: 'anyone',
      popularity: 10
    }
    this.selectYear = this.selectYear.bind(this);
    this.selectGender = this.selectGender.bind(this);
    this.selectPopularity = this.selectPopularity.bind(this);
    this.submitSettings = this.submitSettings.bind(this);
    this.clickWelcome = this.clickWelcome.bind(this);
    this.updateCards = this.updateCards.bind(this);
  }

  componentDidMount() {
    this.setState({
      choices: this.getRandomNameIdxs()
    })
  }

  clickWelcome(){
    this.setState({
      status: 'settings'
    })
  }

  selectYear(event) {
    this.setState({year: event.target.value});
  }

  selectGender(event) {
    this.setState({gender: event.target.value});
  }

  selectPopularity(event) {
    this.setState({popularity: event.target.value});
  }

  submitSettings(){
    console.log('year:',this.state.year)
    console.log('gender:',this.state.gender)
    console.log('popularity:',this.state.popularity)
    // query database for names based on settings
    this.setState({
      status: 'playing'
    })
  }

  getRandomNameIdxs(){
    const idx1 = Math.floor(Math.random()*dummyData.length);
    let idx2 = Math.floor(Math.random()*dummyData.length);
    while (idx1 === idx2) {
      idx2 = Math.floor(Math.random()*dummyData.length);
    }
    return [dummyData[idx1],dummyData[idx2]]
  }

  updateCards(better){
    let worse;
    this.state.choices[0] === better ? worse = this.state.choices[1] : worse = this.state.choices[0];
    let betterIdx = this.state.favorites.indexOf(better);
    let worseIdx = this.state.favorites.indexOf(worse);
    let newFavs = [...this.state.favorites];

    // neither in list yet, add both to end
    if (betterIdx < 0 && worseIdx < 0) {
      newFavs.push(better,worse);
    }
    // better in list but not worse, add worse to end
    else if (worseIdx < 0) {
      newFavs.push(worse);
    }
    // better ranked behind worse, remove from list and place in front of worse
    else if (betterIdx > worseIdx) {
      newFavs.splice(betterIdx,1);
      newFavs.splice(worseIdx,0,better);
    }
    // better not yet in list, place in front of worse
    else if (betterIdx < 0) {
      newFavs.splice(worseIdx,0,better);
    }

    this.setState({
      choices: this.getRandomNameIdxs(),
      favorites: newFavs
    })
  }

  render () {
    return (
      <div id='main'>
        <div id='main-container'>
        {this.state.status === 'welcome' ?
            <Welcome clickHandler={this.clickWelcome}/> :
        (this.state.status === 'settings' ?
            <SettingsBox submitHandler={this.submitSettings} handleSelect={this.selectGender} handleYearChange={this.selectYear} handlePopChange={this.selectPopularity} pop={this.state.popularity} year={this.state.year}/> :
            <Playing clickHandler={this.updateCards} favorites={this.state.favorites.slice(0,10)} choices={this.state.choices}/> )}
        </div>
      </div>
    )
  }
}