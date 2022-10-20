<template>
	<form class="w-full" @submit.prevent="submitForm">
		<li
			class="flex items-center pl-4 rounded border border-gray-200 hover:bg-green-500"
		>
			<input
				:id="int"
				type="radio"
				:value="introvert"
				v-model="value"
				name="answer"
				class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
			/>
			<label
				:for="int"
				class="py-4 ml-2 w-full text-sm font-medium text-gray-900"
				>{{ int }}</label
			>
		</li>
		<li
			class="flex items-center pl-4 rounded border border-gray-200 hover:bg-green-500"
		>
			<input
				:id="ambi"
				type="radio"
				:value="ambivert"
				v-model="value"
				name="answer"
				class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
			/>
			<label
				:for="ambi"
				class="py-4 ml-2 w-full text-sm font-medium text-gray-900"
				>{{ ambi }}</label
			>
		</li>
		<li
			class="flex items-center pl-4 rounded border border-gray-200 hover:bg-green-500"
		>
			<input
				:id="extr"
				type="radio"
				:value="extrovert"
				v-model="value"
				name="answer"
				class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
			/>
			<label
				:for="extr"
				class="py-4 ml-2 w-full text-sm font-medium text-gray-900"
				>{{ extr }}</label
			>
		</li>
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
		}
	},
	props: ['int', 'extr', 'value', 'ambi'],
	methods: {
		submitForm() {
			this.$emit('submitted-form', this.value)
		},
	},
}
</script>
