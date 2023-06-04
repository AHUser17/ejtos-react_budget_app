import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

    const {dispatch} = useContext(AppContext);

    const changeCurrency = (currency)=>{
        let action = {
            type: 'CHG_CURRENCY',
            payload: currency
            }
           
            dispatch(action);
    
        }
            
        return (
            <div className='alert alert-secondary' style={{ height:'55px', width: '300px',  color: '#ffffff', backgroundColor: '#93e499' }}> Currency {
          <select style={{color: '#ffffff', backgroundColor: '#93e499', borderColor:'#93e499', width: '180px', hovercolor:'white'}} name="Currency" id="Currency" onChange={event=> changeCurrency(event.target.value)}>
           <option style={{color: '#000000', backgroundColor: '#93e499', width: '180px'}} defaultValue value="£">£ Pound</option>
            <option style={{color: '#000000', backgroundColor: '#93e499', width: '180px'}} value="$">$ Dollar</option>           
            <option style={{color: '#000000', backgroundColor: '#93e499', width: '180px'}} value="€">€ Euro</option>
            <option style={{color: '#000000', backgroundColor: '#93e499', width: '180px'}} value="₹">₹ Ruppee</option>
          </select>	
          }	
        </div>
        );
    
};

export default Currency;