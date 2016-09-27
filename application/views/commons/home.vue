<template>
	<div class="well text-center">
		<h2 class="text-center">Hello, {{name}}!</h2>
		<h3 class="text-center">Using Vue template</h3>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: '<%= appName %>'
			}
		}
	}
</script>