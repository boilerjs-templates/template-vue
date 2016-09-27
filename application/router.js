export default function(router) {
	router.map({
		'/': {
			component: require('views/commons/home.vue')
		},

		'*': {
			component: require('views/commons/notFound.vue')
		}
	});
}