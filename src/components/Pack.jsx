import '../styles/pack.css'

export const Pack = (props) => {
    const {id, packName, packImage, packYear} = props.data;
  return (
    
    <div className="pack_container">
      <img src={packImage} alt="" />
      <div className='button_container'>
       <button className="buyPack">Buy</button>
        <button className="PackInfo">Info</button>
      </div>
    </div>
  )
}
