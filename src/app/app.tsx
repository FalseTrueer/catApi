import React, { useEffect, useState } from 'react';
import styles from './app.module.scss';
import { fetchCat } from '../api/fetchCat';
import { Checkboxes, Button, Image } from '../components';

type CheckboxState = {
	enabled: boolean;
	autoRefresh: boolean;
};

export const App = () => {
	const [catImg, setCatImg] = useState<string>('');
	const [checkboxes, setCheckboxes] = useState<CheckboxState>({
		enabled: false,
		autoRefresh: false,
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, checked } = event.target;

		setCheckboxes((prev) => ({
			...prev,
			[name]: checked,
		}));
	};

	async function getCat(): Promise<void> {
		setIsLoading(true);
		try {
			const url = await fetchCat();
			setCatImg(url);
		} catch (err) {
			alert(err instanceof Error ? err.message : 'Ошибка');
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		let intervalId: NodeJS.Timeout;

		if (checkboxes.enabled && checkboxes.autoRefresh) {
			getCat();
			intervalId = setInterval(() => {
				getCat();
			}, 5000);
		}

		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	}, [checkboxes.autoRefresh, checkboxes.enabled]);

	return (
		<div className={styles.container}>
			<Checkboxes values={checkboxes} onChange={handleCheckboxChange} />

			{checkboxes.enabled && (
				<>
					{!checkboxes.autoRefresh && <Button onClick={getCat}>Get cat</Button>}

					{isLoading ? (
						<div className={styles.loader} />
					) : catImg ? (
						<Image src={catImg} alt={'Cat image'} />
					) : null}
				</>
			)}
		</div>
	);
};
