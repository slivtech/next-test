import { getBranchContext } from "@/data/branchContext";
import { revalidateTag } from "next/cache";
import Image from "next/image";


export default async function Home() {
	//revalidateTag('branchContext');
	const context = await getBranchContext();
	console.log("Som na stranke test", context);
  return (
    <>
	<h1>Test</h1>
	<p>
		{context.branchId}
	</p>
	</>
  );
}
