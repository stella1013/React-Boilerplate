import * as React from 'react';

const Loading = (props: any) => {
	return props.error ? (
		<div>
			Error! <button onClick={props.retry}>Retry</button>
		</div>
	) : (
		<div className="loading">
			<p className="subheader-txt">Loading...</p>
			<div className="lds-default">
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	);
};
export default Loading;
