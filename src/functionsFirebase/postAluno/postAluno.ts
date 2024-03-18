import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import appFirebase from "../../db/firebase";

const db = getFirestore(appFirebase);

/**
 * Cria um novo registro de aluno no banco de dados.
 *
 * @param {string} cpf - O CPF do aluno.
 * @param {string} nome - O nome do aluno.
 * @param {string} dataNascimento - A data de nascimento do aluno.
 * @return {Promise<string>} O ID do novo registro de aluno criado.
 */
async function postAluno(cpf: string, nome: string, dataNascimento: string) {
	const docRef = await addDoc(collection(db, "aluno"), {
		cpf,
		nome,
		dataNascimento,
	});
	return docRef.id;
}

export default postAluno;
