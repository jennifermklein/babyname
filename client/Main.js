import React from 'react'
import NameCard from './NameCard'
import SidePanel from './SidePanel'
import SettingsBox from './SettingsBox'
import Welcome from './Welcome'

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
          {this.state.status === 'welcome' ? <Welcome clickHandler={this.clickWelcome}/> :
          (this.state.status === 'settings' ?
          <>
            <div id='main-container'>
            <SettingsBox submitHandler={this.submitSettings}/> 
            </div>
          </>
          : <>
            <div id='main-container'>
              <NameCard name={dummyData[0]}/>
              <NameCard name={dummyData[1]}/>
            </div>
            <SidePanel names={dummyData}/>
          </>
          )}
      </div>
    )
  }
}