import React from 'react';
import { Image, Modal, Icon } from 'semantic-ui-react';


function SketchBox(props) {
	return(
		<Modal basic open={props.sketchModal} >
			<div className='sketch-modal'>
				<a href='javascript:;'>
					<Icon name='remove' onClick={props.handlesketchModal}/>
				</a>
				<Image
					src={props.sketchModal}
					size='massive'
					className='sketch-big'
				/>
			</div>
		</Modal>
	)
}
export default SketchBox;