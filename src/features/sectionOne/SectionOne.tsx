import styles from "./SectionOne.module.scss";
import { ReactComponent as Zeppeliner } from "../../assets/zeppeliner-cropped.svg";

export function SectionOne() {
	return (
		<div className={styles.bg}>
			<section className={styles.wrapper}>
				<p className={styles.floatText}>Lorem Ipsum</p>
				<Zeppeliner className={styles.zeppeliner} />
				<h1 className={styles.bodyH1}>Digital transformation</h1>
				<h4 className={styles.bodyH4}>
					Rådgivning. Implementering. Resultater
				</h4>
				<p className={styles.bodyP}>
					Hvordan bliver din virksomhed til en digital vinder i fremtiden?
				</p>
				<p className={styles.bodyP}>
					Hvilke tiltag skal der til strategisk og taktisk for at dreje
					forretningen i den rigtige retning? Hvilke elementer indeholder en
					succesfuld digital transformation? Vi har svarene. Pentia kan hjælpe
					dig på hele rejsen fra strategisk rådgivning til implementering.
				</p>
			</section>
			<p className={styles.bottomText}>Start din rejse her</p>
			<div className={styles.dots}>
				<span className={styles.dot1}></span>
				<span className={styles.dot2}></span>
				<span className={styles.dot3}></span>
			</div>
		</div>
	);
}
