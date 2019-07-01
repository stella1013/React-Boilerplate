import * as React from 'react';
import SelectFieldContainer from './SelectFieldContainer';
import InputFieldContainer from './InputFieldContainer';

const CustomInput = (props: any) => {
	let inputElement = null;

	switch (props.elementType) {
		case 'input':
			inputElement = (
				<InputFieldContainer
					className="input-element"
					{...props.elementConfig}
					value={props.value}
					changed={props.changed}
					id={props.id}
				/>
			);
			break;
		case 'select':
			inputElement = (
				<SelectFieldContainer
					value={props.value}
					displayValue={props.displayValue}
					options={props.elementConfig.options}
					onChange={props.changed}
					id={props.id}
					postLabel={props.postLabel}					
				/>
			);
			break;
		default:
			inputElement = (
				<input
					className="input-element"
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
					id={props.id}
				/>
			);
	}

	return (
		<div className={props.size}>
			<div className="input">
				<label className="label">{props.label}</label>
				{inputElement}
			</div>
		</div>
	);
};

export default CustomInput;
