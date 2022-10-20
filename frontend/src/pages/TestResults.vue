<template>
	<base-card class="items-center justify-center">
		<h2 class="text-3xl font-bold p-3 text-center">
			You are an {{ winnerText }}
		</h2>
		<img
			class="w-40 h-40"
			v-if="introWins"
			src="../assets/Introvert.png"
			alt=""
		/>
		<img
			class="w-40 h-40"
			v-if="extrowins"
			src="../assets/Extrovert.png"
			alt=""
		/>
		<img
			class="w-40 h-40"
			v-if="ambiwins"
			src="../assets/Ambivert.png"
			alt=""
		/>
		<base-button @click="reTake" class="w-full">Re-take Test</base-button>
	</base-card>
</template>

<script>
export default {
	data() {
		return {
			introWins: false,
			ambiwins: false,
			extrowins: false,
		}
	},
	computed: {
		testScore() {
			return this.$store.getters['testResults']
		},
		imageCon() {
			if (this.introWins) {
				return 'introvert.png'
			}
			if (this.extrowins) {
				return 'Extrovert.png'
			}
			if (this.ambiwins) {
				return 'Ambivert.png'
			}
		},
		winnerText() {
			if (this.introWins) {
				return 'Introvert'
			}
			if (this.extrowins) {
				return 'Extrovert'
			}
			if (this.ambiwins) {
				return 'Ambivert'
			}
		},
	},
	mounted() {
		this.addWinner()
	},
	methods: {
		addWinner() {
			let list = this.testScore
			const sortResults = Object.keys(list).sort(function (a, b) {
				return list[b] - list[a]
			})
			const winner = sortResults
			if (winner[0] === 'intro') {
				this.introWins = true
			}
			if (winner[0] === 'extro') {
				this.extrowins = true
			}
			if (winner[0] === 'ambi') {
				this.ambiwins = true
			}
		},
		refreshScores() {
			this.$store.dispatch('refreshScores')
		},
		reTake() {
			this.refreshScores()
			this.$router.push('/')
		},
	},
}
</script>
