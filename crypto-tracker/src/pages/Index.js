
import '../App.css';
import {useEffect, useState} from 'react'
import Axios from 'axios';
import Coin from '../components/Coin';





function Index() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("")
  
  const filteredCoins = listOfCoins.filter((coin) =>{
    return coin.name.toLowerCase().includes(searchWord.toLowerCase())
  })
  useEffect(()=>{
    Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&page=1&sparkline=false").then((Response)=>{
      setListOfCoins(Response.data)
      console.log(Response.data)
    })
  },[]);
  return (
    <div className='AppHeader'>
      <div className='SearchBar'>
        <input type="text" placeholder="Search a Crypto Currency..." onChange={(event)=> {
          setSearchWord(event.target.value)
        }}/>

  
      </div>
      <div className='content'>
      <div className='heading'>
           
            <table className="heading-table">
              <tr>
                <td>
                  Coin
                </td>
                <td>
                   Mkt Cap
                </td>
                
                <td>Price</td> 
              </tr>

            
              
            </table>      
           
            </div>
        {filteredCoins.map((coin)=>{
        return (
          <Coin 
          
          
            symbol={coin.symbol} 
            name={coin.name} 
            current_price={coin.current_price} 
            image={coin.image} 
            market_cap_change_percentage_24h = {coin.market_cap_change_percentage_24h}
            
          />
          
          
          
        )
           
          
          

        })}
      </div>
      
    </div>
  );
  
}  

export default Index;
