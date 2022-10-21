<template>
	<form class="w-full" @submit.prevent="submitForm">
		<li class="list-item">
			<input
				:id="int"
				type="radio"
				:value="introvert"
				v-model="value"
				name="answer"
				class="radio"
			/>
			<label :for="int" class="label">{{ int }}</label>
		</li>
		<li class="list-item">
			<input
				:id="ambi"
				type="radio"
				:value="ambivert"
				v-model="value"
				name="answer"
				class="radio"
			/>
			<label :for="ambi" class="label">{{ ambi }}</label>
		</li>
		<li class="list-item">
			<input
				:id="extr"
				type="radio"
				:value="extrovert"
				v-model="value"
				name="answer"
				class="radio"
			/>
			<label :for="extr" class="label">{{ extr }}</label>
		</li>
		<p v-if="error" class="text-sm font-thin text-red-500">
			Please select one option
		</p>
		<base-button class="w-full mt-4">Submit</base-button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			introvert: 'i',
			ambivert: 'a',
			extrovert: 'e',
			error: false,
			value: null,
		}
	},
	props: ['int', 'extr', 'ambi'],
	methods: {
		submitForm() {
			if (this.value === null) {
				this.error = true
			} else {
				this.error = false
				this.$emit('submitted-form', this.value)
			}
			this.value = null
		},
	},
}
</script>
