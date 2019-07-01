import * as React from 'react';

interface ScrollingProps {
	destination: any;
	duration: number;
	easing: string;
	callback: object;
}
class ScrollingHandler extends React.Component<ScrollingProps, {}> {
	easings = () => {
		//  linear(t) {return t;}
	};
	start = () => window.pageYOffset;
	startTime = () =>
		'now' in window.performance ? performance.now() : new Date().getTime();

	documentHeight = (): number => {
		return Math.max(
			document.body.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.clientHeight,
			document.documentElement.scrollHeight,
			document.documentElement.offsetHeight
		);
	};

	windowHeight = () => {
		return (window.innerHeight ||
			document.documentElement.clientHeight ||
			document.getElementsByTagName('body')[0].clientHeight) as number;
	};

	destinationOffset = (): number => {
		return typeof this.props.destination === 'number'
			? this.props.destination
			: this.props.destination.offsetTop;
	};
	destinationOffsetToScroll = (): number => {
		return Math.round(
			((this.documentHeight as unknown) as number) -
				((this.destinationOffset as unknown) as number) <
				((this.windowHeight as unknown) as number)
				? ((this.documentHeight as unknown) as number) -
						((this.windowHeight as unknown) as number)
				: ((this.destinationOffset as unknown) as number)
		);
	};
	render() {
		return {};
	}
}
export default ScrollingHandler;
