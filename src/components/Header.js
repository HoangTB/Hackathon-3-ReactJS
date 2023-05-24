function Header (props){
  let number = props.number;
  let totalPoints = props.totalPoints;
  // console.log(11,number);
    return(
        <div className='content-h1'>
            <div className='' style={{position:"absolute", left:"50px"}}>
              <label style={{color:"white"}}>Player: <span>{number}</span></label><br/>
              <label style={{color:"white"}}>Total Points: <span>{totalPoints}</span></label>
            </div>
            <h3 className=''>Bảng Điểm</h3>
          </div>
    )
}
export default Header;