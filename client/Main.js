import React from 'react'
import NameCard from './NameCard'
import SidePanel from './SidePanel'
import SettingsBox from './SettingsBox'
import Welcome from './Welcome'
import Playing from './Playing'

const dummyData = [
  'Jenny',
  'Ben',
  'Jay',
  'Leo',
  'Mindy',
  'Steve',
  'Stanley',
  'Sharon',
  'Nicole',
  'Andrew',
  'Sarah'
]

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'welcome'
    }
    this.submitSettings = this.submitSettings.bind(this);
    this.clickWelcome = this.clickWelcome.bind(this);
  }

  submitSettings(){
    this.setState({
      status: 'playing'
    })
  }

  clickWelcome(){
    this.setState({
      status: 'settings'
    })
  }

  render () {
    return (
      <div id='main'>
        <div id='main-container'>
        {this.state.status === 'welcome' ?
            <Welcome clickHandler={this.clickWelcome}/> :
        (this.state.status === 'settings' ?
            <SettingsBox submitHandler={this.submitSettings}/> :
            <Playing names={dummyData}/> )}
        </div>
      </div>
    )
  }
}