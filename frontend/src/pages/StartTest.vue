<template>
	<base-card>
		<p class="text-center text-lg font-semi-bold">
			{{ `${currentQuiz + 1} / ${showQuestions.length}` }}
		</p>
		<h2 class="text-3xl m-0 p-4 text-center">
			{{ currentQuestion.question }}
		</h2>
		<ul class="list-none">
			<question-list
				:int="currentQuestion.int"
				:extr="currentQuestion.extr"
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
	created() {
		this.loadQuestion()
	},

	computed: {
		showQuestions() {
			return this.$store.getters['questions']
		},
	},

	methods: {
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
			currentQuestion: {},
			currentQuiz: 0,
		}
	},
}
</script>
