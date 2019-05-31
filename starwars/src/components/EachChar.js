import React from 'react';
import CharVehicle from './CharVehicle';


/**For each character, display:
 * - name
 * - gender
 * - height (cm)
 * - weight (kg)
 * 
 */


const EachChar = (props) => {
    console.log(props.info.vehicles[0] ? props.info.vehicles : 'nothing here');
    /**Some characters have unknown heights and/or weights.
     * To counteract this, we have a check:
     */
    const vehicleExists = props.info.vehicles[0];
    const height = props.info.height === 'unknown' ? 'unknown' : `${props.info.height}cm`;
    const mass = props.info.mass === 'unknown' ? 'unknown' : `${props.info.mass}kg`;

    return (
        <div className='character'>
            <h3 className='characterName'>{props.info.name}</h3>
            <div className='info half'>
                <h4 className='subtitle'>Personal info:</h4>
                <ul>
                    <li><span>Gender: </span><span>{props.info.gender}</span></li>
                    <li><span>Height: </span><span>{height}</span></li>
                    <li><span>Weight: </span><span>{mass}</span></li>
                </ul>
            </div>
            <div className='vehicles half'>
                <h4 className='subtitle'>Vehicles:</h4>
                <ul>
                    {/* If the vehicles array exists,
                        map it out into our Vehicles component.
                        Otherwise, display "NO VEHICLES"
                     */}
                    {vehicleExists ? 
                        props.info.vehicles.map(vehicle => {
                        return <CharVehicle vehicle={vehicle}/>
                        }) :
                        <p className="noVehicles">NO<br/>VEHICLES</p>
                    }
                </ul>
            </div>
        </div>
    );
}

export default EachChar;