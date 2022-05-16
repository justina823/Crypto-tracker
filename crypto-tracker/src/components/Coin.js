import React from 'react'
import "./Coin.css"

function Coin({name,current_price,image,symbol,market_cap_change_percentage_24h}) {
  return (
    <div className='coin-row'>
        <table className='coin-table'>
            <tr>
                <td><img src={image}/></td>
                <td>{name}<br></br>{symbol}</td>
                <td>
                    <p>{market_cap_change_percentage_24h.toFixed(2)}%<br/></p>
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