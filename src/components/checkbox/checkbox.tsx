import React from 'react';
import styles from './checkbox.module.scss';

type Props = {
	id: string;
	name: string;
	label: string;
	checked: boolean;
	disabled?: boolean;
	handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox: React.FC<Props> = ({
	id,
	name,
	label,
	checked,
	disabled,
	handleCheckboxChange,
}) => {
	return (
		<div className={styles.wrapper_checkbox}>
			<input
				type="checkbox"
				id={id}
				name={name}
				checked={checked}
				onChange={handleCheckboxChange}
				className={styles.checkbox}
				disabled={disabled}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	);
};
