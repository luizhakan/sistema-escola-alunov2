import { doc, getFirestore, updateDoc } from "firebase/firestore/lite";
import appFirebase from "../../db/firebase";

const db = getFirestore(appFirebase);

/**
 * Atualiza as informações do aluno no banco de dados.
 *
 * @param {string} id - O ID do aluno a ser atualizado
 * @param {string} cpf - O CPF do aluno
 * @param {string} nome - O nome do aluno
 * @param {string} dataNascimento - A data de nascimento do aluno
 * @return {Promise<void>} Uma Promise que é resolvida quando as informações do aluno são atualizadas
 */
async function updateAluno(id: string, cpf: string, nome: string, dataNascimento: string) {
	const docRef = doc(db, "aluno", id);
	await updateDoc(docRef, {
		cpf,
		nome,
		dataNascimento,
	});
}

export default updateAluno;
