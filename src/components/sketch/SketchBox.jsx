import React from 'react';
import { Image, Modal, Icon } from 'semantic-ui-react';


function SketchBox(props) {
	return(
		<Modal basic open={props.designModal} >
			<div className='design-modal'>
				<a href='javascript:;'>
					<Icon name='remove' onClick={props.handleDesignModal}/>
				</a>
				<Image
					src={props.designModal}
					size='massive'
					className='design-big'
				/>
			</div>
		</Modal>
	)
}
export default SketchBox;