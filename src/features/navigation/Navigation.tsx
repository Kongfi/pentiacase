import styles from "./Navigation.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export function Navigation() {
	return (
		<div>
			<header>
				<nav className={styles.nav}>
					<Logo fill="white" className={styles.logo} />
					<div className={styles.navBurger}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</nav>
			</header>
		</div>
	);
}
