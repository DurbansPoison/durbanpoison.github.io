// @ts-nocheck
import React from 'react';
import Button from 'react-bootstrap/Button';
import './index.css';
import onlyFansLogo from '../../assets/onlyfanslogo.png';
import DefCadLogo from '../../assets/defcad.png';
import InstagramLogo from '../../assets/instagramLogo.png';
import OdyseeLogo from '../../assets/odyseelogo.png';
import TwitterLogo from '../../assets/twitterlogo.png';
function OnlyFans(props) {
	return (
		<a href='https://defcad.com/users/durbanpoisonpew/' className='link'>
			<img src={onlyFansLogo} alt='onlyfans' className='onlyFans' />
		</a>
	);
}
function DefCad(props) {
	return (
		<a href='https://defcad.com/users/durbanpoisonpew/' className='link'>
			<img src={DefCadLogo} alt='defcad' className='defCad' />
		</a>
	);
}
function Instagram(props) {
	return (
		<a href='https://instagram.com/durbanpoisonpew' className='link'>
			<img src={InstagramLogo} alt='instagram' className='instagram' />
		</a>
	)
}

function Odysee(props) {
	return (
		<a href='https://odysee.com/@DurbanPoisonPew:9'className='link'>
			<img src={OdyseeLogo} alt='odysee' className='odysee' />
		</a>
	)
}

function Twitter(props) {
	return (
		<a href='https://twitter.com/DurbanPoison19' className='link'>
			<img src={TwitterLogo} alt='twitter' className='twitter' />
		</a>
	)
}

function Links() {
	return (
		<div>
			<div className="row">
			<ul className='col'>
				<ul>
					<Button>
						<OnlyFans />
					</Button>
				</ul>
				<ul>
				<Button>
					<DefCad />
				</Button>
				</ul>
				<ul>
					<Button>
						<Instagram />
					</Button>
				</ul>
				<ul>
					<Button>
						<Odysee />
					</Button>
				</ul>
				<ul>
					<Button>
						<Twitter />
					</Button>
				</ul>
			</ul>
		</div>
		</div>
	);
}

export default Links;
