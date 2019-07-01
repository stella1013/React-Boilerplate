import * as React from 'react';

interface LocalState {
	showInput: boolean;
}
class InputFieldContainer extends React.Component<any, LocalState> {
	constructor(props: any) {
		super(props);

		this.state = {
			showInput: false
		};
	}

	inputVisibleToggle = (e: React.MouseEvent) => {
		if (this.state.showInput === false) {
			this.setState({ showInput: true });
		}
	}

	render() {
		return (
			<div className="inputWrapper">
				{this.state.showInput ? (
					<input
						className="input-element"
						{...this.props.elementConfig}
						value={this.props.value}
						onChange={this.props.changed}
						id={this.props.id}
					/>
				) : (
					<div
						className="current-location"
						onClick={(e: React.MouseEvent) => this.inputVisibleToggle(e)}
					>
						Current Location
					</div>
				)}
			</div>
		);
	}
}

export default InputFieldContainer;
