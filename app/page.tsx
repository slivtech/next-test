import Image from "next/image";
import styles from "./page.module.css";
import { getBranchContext } from "@/data/branchContext";

export default async function Home() {
	const context = await getBranchContext();
	console.log("Som na stranke HOME",context);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
			BranchID: {context.branchId}
        </p>
		<p>
			Profile: {context.profile}
		</p>
      </div>
    </main>
  );
}
