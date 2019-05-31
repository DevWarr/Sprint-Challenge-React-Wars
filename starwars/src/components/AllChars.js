import React from 'react';
import EachChar from './EachChar';
import './StarWars.css';


/**Take IN props.charslist
 * <EachChar /> should be using {props.info}
 */


const AllChars = (props) => {
    return (
        <div className='container'>
            {props.charsList.map((character, i) => {
                return <EachChar info={character} key={i}/>
            })}
        </div>
    );
}

export default AllChars;