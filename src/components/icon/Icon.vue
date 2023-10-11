<template>
	<i class="ic" :class="iconClass"></i>
</template>
<script>
export default {
	props: {
		name : {
			type: [String, Array, Object],
			required: true,
		}
	},
	computed : {
		iconClass() {
			return `${this.name}`;
		}
	}
}
</script>
<style lang="scss" scoped>
.ic {
	display: block;
	width: 64px;
	height: 64px;
	margin: 0 auto;
	background-image: url('./sprite.png');
	background-size: 512px;
}

.ic-logo {
	width: 192px;
	margin-left: 0;
	background-position: 0 -64px;
}

.ic-allMenu {
	background-position: -256px 0;
}

.ic-favoriteOff {
	background-position: -64px 0;
}

.ic-favoriteOn {
	background-position: -128px 0;
}

.ic-fullscreen {
	background-position: -384px 0;
}

.ic-noti {
	background-position: 0 0;
}

.ic-close {
	background-position: -64px -128px;
}
</style>
  