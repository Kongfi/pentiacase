import styles from "./SectionTwo.module.scss";
import graph from "../../assets/illustration1.svg";
import board from "../../assets/illustration2.svg";

export function SectionTwo() {
	return (
		<div className={styles.bg}>
			<section className={styles.wrapper}>
				<h2 className={styles.bodyH2}>
					Vi kan hjælpe dig med digital transformation på to fronter
				</h2>
				<section className={styles.articleSection}>
					<article className={styles.articleLeft}>
						<img src={graph} alt="Graph" className={styles.img} />
						<h6 className={styles.bodyH6}>
							Strategisk rådgivning om digital transformation
						</h6>
						<p className={styles.bodyP}>
							Udnytter din virksomhed sit digitale potentiale? Hvilke
							forretningsmuligheder er der, og hvad betyder det på et strategisk
							plan?
						</p>
					</article>
					<article className={styles.articleRight}>
						<img src={board} alt="Board" className={styles.img} />
						<h6 className={styles.bodyH6}>
							Eksekvering af digital transformation
						</h6>
						<p className={styles.bodyP}>
							I ved, hvad I vil, men I har brug for hjælp til at rulle
							strategien ud i forhold til organisationen og det digitale
							fundament bl.a. på Sitecore. Det handler om mennesker og
							resultater.
						</p>
					</article>
				</section>
			</section>
		</div>
	);
}
