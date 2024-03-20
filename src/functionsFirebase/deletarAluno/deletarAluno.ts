import { doc, deleteDoc } from "firebase/firestore/lite";


/**
 * Deleta um registro de aluno do banco de dados.
*
* @param {any} db - A referência do banco de dados.
* @param {string} id - O ID do aluno a ser deletado.
* @return {Promise<void>} Uma promessa que é resolvida quando o registro do aluno é deletado com sucesso.
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function deletarAluno(db: any, id: string) {
	const docRef = doc(db, "aluno", id);
	await deleteDoc(docRef);
}

export default deletarAluno;
