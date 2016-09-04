<template></template>
<script>
	export default {
		route: {
			data (context) {
				return new Promise( (resolve, reject) {
					resolve({ bar: 'BAR' });
				});
			}
		}
	};
</script>