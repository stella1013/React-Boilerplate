import * as React from 'react';

interface LocalState {
	menuState: string;
	menuShadow: string;
	optionSelected: { value: string; displayValue: string };
}
class SelectFieldContainer extends React.Component<any, LocalState> {
	constructor(props: any) {
		super(props);

		this.state = {
			menuState: 'menuOpen',
			menuShadow: 'menuShadowOff',
			optionSelected: {
				value: this.props.value,
				displayValue: this.props.displayValue
			}
		};
	}
	componentDidUpdate(prevProps:any) {
		if(prevProps.displayValue !== this.props.displayValue) {
			this.setState({
				optionSelected: {
				value: this.props.value,
				displayValue: this.props.displayValue
			}
		});

		}
	}

	selectHandler(e: any, obje: { value: any; displayValue: string }) {
		// e.preventDefault();

		const newValue = obje;
		// console.log(this.props);
		// console.log(newValue);
		this.setState({
			optionSelected: newValue
		});
		const { onChange } = this.props;
		onChange(e, this.props.id, newValue);

	}
	handleChange = (e: any) => {
		const { onChange } = this.props;
		onChange(e, this.props.ident, this.state.optionSelected);
	}
	selectToggle = () => {
		if (this.state.menuState === 'menuClosed') {
			this.setState({ menuState: 'menuOpen', menuShadow: 'menuShadowOn' });
		} else {
			this.setState({ menuState: 'menuClosed', menuShadow: 'menuShadowOff' });
		}
	}

	render() {
		let MenuStatusClassArray = ['sub-menu', 'menuOpen'];
		let postLabel:string = this.props.postLabel !== '' ? this.props.postLabel : '';

		if (this.state.menuState === 'menuOpen') {
			MenuStatusClassArray[MenuStatusClassArray.indexOf('menuOpen')] =
				'menuClosed';
		} else {
			MenuStatusClassArray[MenuStatusClassArray.indexOf('menuClosed')] =
				'menuOpen';
		}
		let menuStatusClass = MenuStatusClassArray.join(' ');
		return (
			<div className="menu-wrap">
				<nav className="menu">
					<ul className="clearfix">
						<li onClick={this.selectToggle}>
							<a>
								{this.state.optionSelected.displayValue} <span className="post-label">{postLabel}</span>
								<div className="arrow">
								<div>&#x25B2;</div>
								<div>&#x25BC;</div>
								</div>
							</a>
							<ul>
								<li className="submenubox menuShadowOff">
									<ul className={menuStatusClass}>
										{this.props.options.map((option: any, index: any) => (
											<li
												className="specialtyborder"
												key={index}
												value={option.displayValue}
											>
												<a
													onClick={event => {
														this.selectHandler(event, option);
													}}
													onChange={this.props.change}
												>
													{option.displayValue} <span className="post-label">{postLabel}</span>
												</a>
											</li>
										))}
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default SelectFieldContainer;
