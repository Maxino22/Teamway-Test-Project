<template>
	<base-card>
		<p class="text-center text-lg font-semi-bold">
			{{ `${currentQuiz + 1} / ${showQuestions.length}` }}
		</p>
		<h2 class="text-3xl m-0 p-4 text-center">
			{{ currentQuestion.question }}
		</h2>
		<base-spinner v-if="isLoading"></base-spinner>
		<ul class="list-none">
			<question-list
				:int="currentQuestion.intro"
				:extr="currentQuestion.extro"
				:ambi="currentQuestion.ambi"
				@submitted-form="submitQuestion"
			></question-list>
		</ul>
	</base-card>
</template>

<script>
import QuestionList from '../components/layout/QuestionList.vue'

export default {
	components: {
		QuestionList,
	},
	// computed:{
	//   valueText(){
	//     if()
	//   }
	// },
	async created() {
		await this.fetchQuestions()
		this.loadQuestion()
	},

	// mounted() {

	// },

	computed: {
		showQuestions() {
			return this.$store.getters['questions']
		},
	},

	methods: {
		async fetchQuestions() {
			this.isLoading = true
			try {
				await this.$store.dispatch('setQuestions')
			} catch (error) {
				this.error = 'Something went wrong'
			}
			this.isLoading = false
		},
		loadQuestion() {
			this.currentQuestion = this.showQuestions[this.currentQuiz]
		},

		addIntroPoint() {
			this.$store.dispatch('addIntro', 1)
		},
		addExtroPoint() {
			this.$store.dispatch('addExtro', 1)
		},
		addAmbiPoint() {
			this.$store.dispatch('addAmbi', 1)
		},

		submitQuestion(value) {
			if (value === 'i') {
				this.addIntroPoint()
			}
			if (value === 'a') {
				this.addAmbiPoint()
			}
			if (value === 'e') {
				this.addExtroPoint()
			}
			this.currentQuiz++

			if (this.currentQuiz < this.showQuestions.length) {
				this.loadQuestion()
			} else {
				this.$router.push('/result')
			}
		},
	},

	data() {
		return {
			error: '',
			isLoading: false,
			currentQuestion: {},
			currentQuiz: 0,
		}
	},
}
</script>
