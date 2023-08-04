import { useState } from 'react'
import React from 'react'

import './App.css'
import memory from './Assets/memory.svg'
import visual from './Assets/visual.svg'
import verbal from './Assets/verbal.svg'
import reaction from './Assets/eaction.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body'>
        <div className="container">
          <div className="left">
            <span className='grey'>Result</span>
            
              <div className="scorecircle">
                <span className="scorebigtext">76</span>
                <span className="scoresmalltext">of 100</span>
              </div>
            
            <div className="lefttext">
              <h2>Great</h2>
              <p className='grey'>You scored higher than 95% of people who have taken this test</p>
            </div>
          </div>

          <div className="right">
            <h3>Summary</h3>
            <div className="reactioncontainer">
              <div className="scores">
              <img src={reaction} alt=''></img>
              <span>Reaction</span>
              </div>
              <span className="summarytext">
                <span>80</span>/<span>100</span>
              </span>
              
            </div>
            <div className="memorycontainer">
              <div className="scores">
              <img src={memory} alt=''></img>
              <span>Memory</span>
              </div>
              <span className="summarytext">
                <span>80</span>/<span>100</span>
              </span>
              
            </div>
            <div className="verbalcontainer">
              <div className="scores">
              <img src={verbal} alt=''></img>
              <span>Verbal</span>
              </div>
              <span className="summarytext">
                <span className='boldd'>80</span>/<span>100</span>
              </span>
              
            </div>
            <div className="visualcontainer">
              <div className="scores">
              <img src={visual} alt=''></img>
              <span>Visual</span>
              </div>
              <span className="summarytext">
                <span>80</span>/<span>100</span>
              </span>
              
            </div>
            <div className="button">Continue</div>
          </div>
        </div>
 
      </div>
      
    </>
  )
}

export default App
