import {PropTypes} from 'prop-types'

export default  function CounterButton({by,incrementMethod,decrementMethod}){

    return (
        <div className="Counter">
            <div>
                <button className ="counterButton" 
                        onClick={()=> incrementMethod(by)}
                >+{by}</button>
                <button className ="counterButton" 
                        onClick={()=> decrementMethod(by)}
                >-{by}</button>
            </div>
        </div>    
    )
}

// This defines the datatype of the 'by' property in the Counter insatnce in the App.js.
// If a String is passed in by as value then it throws an error in Browser console of inspect element.

CounterButton.propTypes = {
    by: PropTypes.number
}

// Incase a Ciunter component is created in the App.js, then the default by value should be taken as 5
CounterButton.defaultProps={
    by:5
}