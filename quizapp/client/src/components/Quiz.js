import React, { useEffect } from 'react'
import Questions from './Questions';

/** redux store import */
import { useSelector } from 'react-redux'

const Quiz = () => {

    const state = useSelector(state => state)

    useEffect(() => {
        console.log(state);
    })

    /**next button event handler */
    function onNext() {
        console.log('On next click');
    }

    /**prev button event handler */
    function onPrev() {
        console.log('On prev click');
    }


    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>

            {/* display questions*/}
            <Questions />

            <div className='grid'>
                <button className='btn prev' onClick={onPrev}>Previous</button>
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}

export default Quiz