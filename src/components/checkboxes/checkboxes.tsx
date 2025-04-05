import React from 'react';
import { Checkbox } from '../checkbox/checkbox';

type Props = {
	values: Record<string, boolean>;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkboxes: React.FC<Props> = ({ values, onChange }) => {
	const checkboxList = [
		{
			name: 'enabled',
			label: 'Enabled',
			disabled: false,
		},
		{
			name: 'autoRefresh',
			label: 'Auto-refresh every 5 seconds',
			disabled: !values.enabled,
		},
	];

	return (
		<>
			{checkboxList.map(({ name, label, disabled }) => (
				<Checkbox
					key={name}
					id={name}
					name={name}
					label={label}
					checked={values[name]}
					disabled={disabled}
					handleCheckboxChange={onChange}
				/>
			))}
		</>
	);
};
