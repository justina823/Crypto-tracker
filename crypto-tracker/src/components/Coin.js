import React from 'react'
import "./Coin.css"


const Coin = (props) => {
  return (
    <div className='coin-row'>
    <table className='coin-table'>
        <tr>
        <td>
        
            </td>
            <td><img src={props.image}/></td>
            <td>{props.name}<br></br>{props.symbol}</td>
            <td>
                {props.market_cap_change_percentage_24h >0?
                <p className='Cap-green'>{props.market_cap_change_percentage_24h.toFixed(2)}%</p>:(<p className='Cap-red'>{props.market_cap_change_percentage_24h.toFixed(2)}%<br/></p>)
            }
                    
            </td>
            <td>
                AUD${props.current_price}
            </td>
        </tr>
    </table>
    

</div>
  )
}

export default Coin

