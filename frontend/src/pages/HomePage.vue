<template>
	<section>
		<h1 class="text-4xl capitalize font-semibold text-center">
			are you an introvert or Extrovert?
		</h1>
		<base-card>
			<div class="flex flex-col items-center space-y-4 justify-center">
				<h4 class="text-center text-3xl caapitalize">Start Test to find out</h4>
				<base-button @click="startTest">Start Assesment</base-button>
			</div>
		</base-card>
	</section>
</template>

<script>
export default {
	methods: {
		startTest() {
			this.$router.push('/test')
		},
	},
}
</script>
