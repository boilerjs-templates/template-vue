<template>
	<!-- header -->
	<v-header></v-header>

	<!-- main -->
	<main class="container">
		<router-view></router-view>
	</main>

	<!-- footer -->
	<v-footer></v-footer>
</template>

<script>
	import VHeader from 'components/commons/header.vue';
	import VFooter from 'components/commons/footer.vue';

	export default {
		components: { VHeader, VFooter }
	}
</script>

<style scoped>
	main {
		min-height: calc(100% - 102px);
		padding: 15px 0;
	}
</style>