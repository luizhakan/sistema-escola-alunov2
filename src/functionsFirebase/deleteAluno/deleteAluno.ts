import { doc, deleteDoc } from "firebase/firestore/lite";

/**
 * Deleta um documento de aluno do banco de dados.
*
* @param {any} db - A referência do banco de dados
* @param {string} id - O ID do documento do aluno a ser deletado
* @return {Promise<void>} Uma promessa que é resolvida quando o documento é deletado com sucesso
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function deleteAluno(db: any, id: string) {
	const docRef = doc(db, "aluno", id); // Reference the specific student document
  
	await deleteDoc(docRef); // Delete the document
}

export default deleteAluno;
