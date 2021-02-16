import React from 'react';
import purify from 'dompurify';

const sanitizer = purify.sanitize

type props = {
  value: string;
}

const HTMLParse: React.FC<props> = ({ value }) => {
	return (
		<div 
			dangerouslySetInnerHTML={{ __html: sanitizer(`<p>${value}</p>`) }} // to get &quot; to display correctly
		/>
	)
}

export default HTMLParse;