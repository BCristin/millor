export const NotFound = () => {
	const styles = {
		notFoundContainer: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			height: '15vh',
			textAlign: 'center',
			color: '#333',
		},
		notFoundTitle: {
			fontSize: '2em',
			marginBottom: '20px',
		},
		notFoundText: {
			fontSize: '1.2em',
		},
	};

	return (
		<div style={styles.notFoundContainer}>
			<h1 style={styles.notFoundTitle}>404 - Pagina nu a fost găsită</h1>
			<p style={styles.notFoundText}>Ne pare rău, dar pagina pe care o căutați nu există.</p>
		</div>
	);
};
