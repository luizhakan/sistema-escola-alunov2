import { DocumentData, collection, getDocs } from "firebase/firestore/lite";

/**
 * Obtém uma lista de todos os alunos do banco de dados especificado.
*
* @param {any} db - O objeto do banco de dados para recuperar os alunos.
* @return {Promise<DocumentData[]>} Uma promessa que resolve em um array de documentos de aluno.
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getAlunos(db: any): Promise<DocumentData[]> {
	const alunoCol = collection(db, "aluno");
	const alunoSnapshot = await getDocs(alunoCol);
	const alunoList = alunoSnapshot.docs.map((doc) => doc.data());

	console.log("typeof db", typeof db);
	return alunoList;
}

/**
 * Recupera de forma assíncrona um aluno pelo seu CPF no banco de dados.
 *
 * @param {any} db - A instância do banco de dados
 * @param {string} cpf - O CPF do aluno a ser recuperado
 * @return {Object} O objeto do aluno com o CPF especificado
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getAlunoPorCpf(db: any, cpf: string) {
	const alunoCol = collection(db, "aluno");
	const alunoSnapshot = await getDocs(alunoCol);
	const alunoList = alunoSnapshot.docs
		.map((doc) => doc.data())
		.filter((aluno) => aluno.cpf === cpf);
	return alunoList[0];
}

export { getAlunos, getAlunoPorCpf };
