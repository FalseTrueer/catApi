import React from 'react';
import styles from './Button.module.scss';

type Props = {
	onClick: () => void;
	children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ onClick, children }) => {
	return (
		<button onClick={onClick} className={styles.btn}>
			{children}
		</button>
	);
};
