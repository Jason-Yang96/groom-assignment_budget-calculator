import React from 'react';

const Notification = ({ alertMessage }) => {
	return <div className='absolute top-11'>{alertMessage}</div>;
};

export default Notification;
