import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    //var{currency} = useContext(AppContext);
    //const {setName} = useState('');
    const {dispatch} = useContext(AppContext);

    const changeCurrency = (currency)=>{
        //let currency=value;
        let action = {
            type: 'CHG_CURRENCY',
            payload: currency
            }
           
            dispatch(action);
    
        }
            
        return (
            <div className='alert alert-primary' style={{ color: '#ffffff', backgroundColor: '#8CDFAF', accentcolor:'#8CDFAF' }}> Currency {
          <select name="Currency" id="Currency" onChange={event=> changeCurrency(event.target.value)}>
           <option defaultValue value="£">£ Pound</option>
            <option value="$">$ Dollar</option>           
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
          </select>	
          }	
        </div>
        );
    
};

export default Currency;