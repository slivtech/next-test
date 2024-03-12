export async function getBranchContext() {
	const res = await fetch('https://defdde84-0bd2-4057-8c47-18d0ebb1a330.mock.pstmn.io/branch-context/123', { next: { tags: ['branchContext'], revalidate: 60 } })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}