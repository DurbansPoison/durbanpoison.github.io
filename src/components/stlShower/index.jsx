import React from 'react';
import '@justinribeiro/stl-part-viewer';
import Cypher from '../../assets/Durbans-Cypher-chassis.stl';



function StlShower() {
  return (
    <div>
      <stl-part-viewer
				 src={Cypher}
				 modelColor='rgb(51,51,51)'
				 backgroundColor='rgb(241,122,91)'


			 />
    </div>
  );
}

export default StlShower;
