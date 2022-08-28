import React from 'react';
import '../../index.css';
import Logo from '../../assets/durbans-logo-edited.png'
function Header() {
  return (
    <div className='header'>
			<div className='logoHolder'>
      {/* <h1>DurbanPoisonPew</h1> */}
			<img src={Logo} alt="logo" class="logo" style={{'max-height': '200px'}}/>
		</div>
		</div>
  );
}

export default Header;
