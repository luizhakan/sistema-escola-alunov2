import { getFirestore } from "firebase/firestore/lite";
import appFirebase from "../db/firebase";
import { getAlunoPorCpf, getAlunos } from "../functionsFirebase/getAluno/getAluno";
import postAluno from "../functionsFirebase/postAluno/postAluno";
import updateAluno from "../functionsFirebase/updateAluno/updateAluno";

const db = getFirestore(appFirebase);


/**
 * Uma função que lida com o endpoint aluno, recuperando e retornando uma lista de alunos do banco de dados.
 *
 * @param {any} req - o objeto de requisição
 * @param {any} res - o objeto de resposta
 * @return {Promise<void>} uma Promise que resolve com a resposta JSON contendo a lista de alunos
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function aluno (req: any, res: any) {
	const alunos = await getAlunos(db);
	res.json(alunos);
}

/**
 * Recupera o CPF de um aluno consultando o banco de dados com o CPF fornecido.
*
* @param {any} req - O objeto de requisição contendo o parâmetro de consulta CPF.
* @param {any} res - O objeto de resposta para enviar o CPF do aluno.
* @return {Promise<void>} Uma Promise que é resolvida com o CPF do aluno.
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function alunocpf (req: any, res: any) {
	const { cpf } = req.query;
	const aluno = await getAlunoPorCpf(db, cpf as string);

	// localhost:3000/alunocpf?cpf=12345678901
	res.json(aluno?.cpf);
}

/**
 * Função assíncrona para adicionar um novo aluno.
*
* @param {any} req - dados da requisição
* @param {any} res - dados da resposta
* @return {Promise<void>} Promessa vazia
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function addAluno (req: any, res: any) {
	const { cpf, nome, dataNascimento } = req.body;
	const id = await postAluno(cpf, nome, dataNascimento);
	res.json({ cpf, nome, dataNascimento, id });
}

/**
 * Deleta um aluno com base no ID fornecido.
*
* @param {any} req - o objeto de requisição
* @param {any} res - o objeto de resposta
* @return {Promise<void>} Promessa que é resolvida após a exclusão do aluno
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function deleteAluno  (req: any, res: any) {
	const { id } = req.params;
	await deleteAluno(db, id);
	res.json({ id });
}

/**
 * Atualiza as informações de um aluno com o ID fornecido.
*
* @param {any} req - o objeto de requisição contendo parâmetros e corpo
* @param {any} res - o objeto de resposta a ser enviado de volta
* @return {Promise<void>} 
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function changeDateAluno (req: any, res: any) {
	const { id } = req.params;
	const { cpf, nome, dataNascimento } = req.body;

	await updateAluno(id, cpf, nome, dataNascimento);

	res.json({ cpf, nome, dataNascimento });
}