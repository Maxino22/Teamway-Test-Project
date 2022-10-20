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
}

const store = createStore({
	state() {
		return {
			questions: [
				{
					question: 'To prepare for a night out...',

					int: 'Prepare? My friends have to drag me out most nights.',
					extr: 'I buy the latest outfit, tell my friends, then dance the night away.',
					ambi: 'Call a few of my closest friends to see if they will be there..',
				},
				{
					question: 'Second Question runs in a web browser?',

					int: 'Java',
					extr: 'C',
					ambi: 'Python',
				},
			],
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
