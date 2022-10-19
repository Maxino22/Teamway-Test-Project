<template>
	<base-card v-for="question in quizdata" :key="question">
		<p class="text-center text-lg font-semi-bold">1/4</p>
		<h2 class="text-3xl m-0 p-4 text-center">
			{{ question.question }}
		</h2>
		<ul class="list-none">
			<question-list
				:int="question.int"
				:extr="question.extr"
				:ambi="question.ambi"
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
	methods: {
		loadQuiz() {
			const currentQuizdata = this.questions[this.currentQuiz]
			this.quizdata.push(currentQuizdata)
		},
		submitQuestion(value) {
			if (value === 'i') {
				this.introscore++
			}
			if (value === 'a') {
				this.ambiScore++
			}
			if (value === 'e') {
				this.extroscore++
			}
			console.log('should now show next')
			this.currentQuiz++
			if (this.currentQuiz < this.questions.length) {
				this.loadQuiz()
			} else {
				this.$router.push('/result')
			}
		},
	},

	created() {
		this.loadQuiz()
	},

	data() {
		return {
			currentQuiz: 0,
			introscore: 0,
			extroscore: 0,
			ambiScore: 0,
			quizdata: [],
			questions: [
				{
					question: 'Which language runs in a web browser?',

					int: 'Java',
					extr: 'C',
					ambi: 'Python',
				},
				{
					question: 'Second Question runs in a web browser?',

					int: 'Java',
					extr: 'C',
					ambi: 'Python',
				},
			],
		}
	},
}
</script>
