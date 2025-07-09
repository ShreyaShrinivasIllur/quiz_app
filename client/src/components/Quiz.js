import React, { useEffect, useState } from 'react'
import Questions from './Questions'

import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';

/** redux store import */
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function Quiz() {

    const [check, setChecked] = useState(undefined)

    const result = useSelector(state => state.result.result);
    const { queue, trace } = useSelector(state => state.questions);
    const selectedCategory = useSelector(state => state.result.category);
    const dispatch = useDispatch()

    /** next button event handler */
    function onNext(){
        if(trace < queue.length){
            /** increase the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());

            /** insert a new result in the array.  */
            if(result.length <= trace){
                dispatch(PushAnswer(check))
            }
        }
     
        /** reset the value of the checked variable */
        setChecked(undefined)
    }

    /** Prev button event handler */
    function onPrev(){
        if(trace > 0){
            /** decrease the trace value by one using MovePrevQuestion */
            dispatch(MovePrevQuestion());
        }
    }

    function onChecked(check){
        setChecked(check)
    }

    /** finished exam after the last question */
    if(result.length && result.length >= queue.length){
        return <Navigate to={'/result'} replace={true}></Navigate>
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>🎯 {selectedCategory.name}</h1>
        
        {/* Category Badge */}
        <div className="category-badge">
            <span className="badge-text">Category: {selectedCategory.name}</span>
        </div>
        
        {/* Progress Bar */}
        <div className="progress-container">
            <div className="progress-info">
                <span className="progress-text">
                    Question {trace + 1} of {queue.length}
                </span>
                <span className="progress-percentage">
                    {Math.round(((trace + 1) / queue.length) * 100)}% Complete
                </span>
            </div>
            <div className="progress-bar">
                <div 
                    className="progress-fill" 
                    style={{width: `${((trace + 1) / queue.length) * 100}%`}}
                ></div>
            </div>
        </div>

        {/* display questions */}
        <Questions onChecked={onChecked} />

        <div className='grid'>
            { trace > 0 ? <button className='btn prev' onClick={onPrev}>← Previous</button> : <div></div>}
            <button className='btn next' onClick={onNext}>
                {trace === queue.length - 1 ? 'Finish Quiz →' : 'Next →'}
            </button>
        </div>
    </div>
  )
}