<template>
	<the-home-container>
		<router-view></router-view>
	</the-home-container>
</template>

<script>
import TheHomeContainer from './components/layout/TheHomeContainer.vue'
export default {
	components: {
		TheHomeContainer,
	},
}
</script>
