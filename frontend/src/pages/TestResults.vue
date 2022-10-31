<template>
	<base-card class="items-center justify-center">
		<h2 class="text-3xl font-bold p-3 text-center">
			You are an {{ winnerText }}
		</h2>
		<img class="w-40 h-40" :src="imageCon" alt="" />
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
			isLoading: false,
		}
	},
	computed: {
		testScore() {
			return this.$store.getters['testResults']
		},
		imageCon() {
			if (this.introWins) {
				return 'https://res.cloudinary.com/maxino/image/upload/v1666420326/assets/Teamway_vue/introvert_sv9lqh.png'
			}
			if (this.extrowins) {
				return 'https://res.cloudinary.com/maxino/image/upload/v1666420326/assets/Teamway_vue/Extrovert_ch6mpk.png'
			}
			if (this.ambiwins) {
				return 'https://res.cloudinary.com/maxino/image/upload/v1666420326/assets/Teamway_vue/Ambivert_tvx5im.png'
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
			let scores = this.testScore
			// const sortResults = Object.keys(list).sort(function (a, b) {
			// 	return list[b] - list[a]
			// })

			if (scores.intro > scores.ambi && scores.intro > scores.extro) {
				this.introWins = true
			}
			if (scores.extro > scores.ambi && scores.extro > scores.intro) {
				this.extrowins = true
			}
			if (scores.ambi > scores.intro && scores.ambi > scores.extro) {
				this.ambiwins = true
			}
			if (scores.intro === scores.extro) {
				this.ambiwins = true
			}
			if (scores.ambi === scores.extro || scores.ambi === scores.intro) {
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
