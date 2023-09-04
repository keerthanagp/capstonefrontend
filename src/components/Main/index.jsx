import ReactMark from "../ReactMarkdown/ReactMark";
import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<>		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>React- markdown</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
		<ReactMark/>
		</>

	);
};

export default Main;
