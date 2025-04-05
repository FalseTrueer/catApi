import React from 'react';
import styles from './img.module.scss';

type Props = {
	src: string;
	alt?: string;
	className?: string;
};

export const Image: React.FC<Props> = ({ src, alt = 'Image', className }) => {
	return <img src={src} alt={alt} className={className || styles.img} />;
};
