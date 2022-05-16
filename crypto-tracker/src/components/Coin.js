import React from 'react'
import "./Coin.css"
import { AiOutlineStar, AiTwotoneStar} from "react-icons/ai";
import SwappingIcons from './SwappingIcons';


function Coin({name,current_price,image,symbol,market_cap_change_percentage_24h}) {
  return (
    <div className='coin-row'>
        <table className='coin-table'>
            <tr>
            <td>
            <SwappingIcons />
</td>
                <td><img src={image}/></td>
                <td>{name}<br></br>{symbol}</td>
                <td>
                    {market_cap_change_percentage_24h >0?
                    <p className='Cap-green'>{market_cap_change_percentage_24h.toFixed(2)}%</p>:(<p className='Cap-red'>{market_cap_change_percentage_24h.toFixed(2)}%<br/></p>)
                }
                        
                </td>

                
                <td>
                    AUD${current_price}
                </td>
            </tr>
        </table>
        
        
       
        
        

        
        


    
    </div>
  )
}

export default Coin