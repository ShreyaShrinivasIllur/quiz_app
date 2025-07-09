import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
import '../styles/Main.css'

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const [showNameEntry, setShowNameEntry] = useState(false)


    function startQuiz(){
        if(inputRef.current?.value && inputRef.current.value.trim().length > 0){
            dispatch(setUserId(inputRef.current?.value.trim()))
        } else {
            alert('Please enter your name before starting the quiz! 🙋‍♂️')
            inputRef.current?.focus()
        }
    }

    function proceedToNameEntry() {
        setShowNameEntry(true)
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>🚀 Ultimate Quiz Challenge</h1>
        
        {!showNameEntry ? (
            // Rules and Guidelines Section
            <>
                <div className="welcome-section">
                    <div className="welcome-text">
                        <h2 className="subtitle">Test Your Knowledge & Win Big! 🏆</h2>
                        <p className="description">
                            Ready to challenge yourself? This isn't just any quiz - it's your chance to prove your skills and knowledge!
                        </p>
                    </div>
                </div>

                <div className="rules-container">
                    <h3 className="rules-title">📋 Quiz Rules & Guidelines</h3>
                    <ol>
                        <li>🎯 You will face <strong>10 challenging questions</strong> one by one</li>
                        <li>💎 Each correct answer earns you <strong>10 points</strong></li>
                        <li>🔘 Every question has <strong>three options</strong> - choose wisely!</li>
                        <li>✏️ You can <strong>review and change</strong> your answers anytime</li>
                        <li>🏁 Your final results will be revealed at the end</li>
                    </ol>
                </div>

                <div className="fun-facts">
                    <div className="fact-item">
                        <span className="fact-emoji">⚡</span>
                        <span className="fact-text">Average completion time: 5 minutes</span>
                    </div>
                    <div className="fact-item">
                        <span className="fact-emoji">🎯</span>
                        <span className="fact-text">Pass with 50% or higher!</span>
                    </div>
                    <div className="fact-item">
                        <span className="fact-emoji">🏆</span>
                        <span className="fact-text">Join the hall of champions!</span>
                    </div>
                </div>

                <div className='start'>
                    <button className='btn start-btn' onClick={proceedToNameEntry}>
                        🎮 Continue to Start Quiz
                    </button>
                </div>
            </>
        ) : (
            // Name Entry Section
            <>
                <div className="welcome-section">
                    <div className="welcome-text">
                        <h2 className="subtitle">Almost Ready! 🎯</h2>
                        <p className="description">
                            Just enter your name and let's begin your quiz adventure!
                        </p>
                    </div>
                </div>

                <form id="form" className="username-form">
                    <div className="input-container">
                        <label htmlFor="username" className="input-label">Enter Your Name</label>
                        <input 
                            ref={inputRef} 
                            className="userid" 
                            type="text" 
                            placeholder="What should we call you? 🙋‍♂️" 
                            id="username"
                            maxLength="20"
                            required
                            autoFocus
                        />
                        <div className="input-hint">This will appear on the leaderboard!</div>
                    </div>
                </form>

                <div className='start'>
                    <Link className='btn start-btn' to={'/quiz'} onClick={startQuiz}>
                        🚀 Start Quiz Now
                    </Link>
                </div>

                <div className="back-section">
                    <button className='btn back-btn' onClick={() => setShowNameEntry(false)}>
                        ⬅️ Back to Rules
                    </button>
                </div>
            </>
        )}
    </div>
  )
}