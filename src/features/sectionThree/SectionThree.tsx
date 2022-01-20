import styles from "./SectionThree.module.scss";
import { ReactComponent as Trophy } from "../../assets/prize.svg";

function handleSubmit() {
	alert("Tak for din henvendelse. Vi kontakter dig hurtigst muligt.");
}

export function SectionThree() {
	return (
		<div className={styles.bg}>
			<section className={styles.wrapper}>
				<h2 className={styles.bodyH2}>
					Få 10 gode råd om digital transformation
				</h2>

				<h4 className={styles.bodyH4}>
					Ja tak, jeg vil gerne høre mere om digital transformation
				</h4>

				<form onSubmit={handleSubmit}>
					<div className={styles.formDiv}>
						<div className={styles.inputContainer}>
							<input type="text" />
							<label>Navn</label>
						</div>
						<div className={styles.inputContainer}>
							<input type="tel" />
							<label>Mobil</label>
						</div>
						<div className={styles.inputContainer}>
							<input type="email" />
							<label>e-mail</label>
						</div>
						<div className={styles.inputContainer}>
							<input type="number" />
							<label>Postnr.</label>
						</div>
						<div className={styles.inputContainer}>
							<input type="text" />
							<label>By</label>
						</div>
					</div>
					<input className={styles.button} type="submit" value="Ring mig op" />
				</form>
				<section className={styles.articleSection}></section>

				<Trophy className={styles.trophy} />

				<h4 className={styles.bodyH4}>
					Pentia vinder prisen for digital innovation 2017
				</h4>
			</section>
		</div>
	);
}
