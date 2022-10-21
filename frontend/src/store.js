import { createStore } from 'vuex'

const getters = {
	questions(state) {
		return state.questions
	},
	testResults(state) {
		return {
			intro: state.introscore,
			ambi: state.ambiscore,
			extro: state.extroscore,
		}
	},
}
const actions = {
	addIntro(context, payload) {
		context.commit('addIntro', payload)
	},
	addExtro(context, payload) {
		context.commit('addExtro', payload)
	},
	addAmbi(context, payload) {
		context.commit('addAmbi', payload)
	},
	refreshScores(context, payload) {
		payload = 0
		context.commit('refreshScores', payload)
	},

	async setQuestions(context) {
		const response = await fetch(
			'https://vue-demo-92e6c-default-rtdb.firebaseio.com/questions.json'
		)
		const responseData = await response.json()

		const questions = []
		for (const key in responseData) {
			const question = {
				question: responseData[key].question,
				intro: responseData[key].int,
				ambi: responseData[key].ambi,
				extro: responseData[key].extr,
			}
			questions.push(question)
		}

		context.commit('setQuestions', questions)
	},
}
const mutations = {
	addIntro(state, payload) {
		state.introscore += payload
	},
	addExtro(state, payload) {
		state.extroscore += payload
	},
	addAmbi(state, payload) {
		state.ambiscore += payload
	},
	refreshScores(state, payload) {
		state.ambiscore = payload
		state.introscore = payload
		state.extroscore = payload
	},
	setQuestions(state, payload) {
		state.questions = payload
	},
}

const store = createStore({
	state() {
		return {
			questions: [],
			introscore: 0,
			extroscore: 0,
			ambiscore: 0,
		}
	},
	getters,
	actions,
	mutations,
})

export default store
