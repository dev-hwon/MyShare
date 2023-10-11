<template>
	<div 
		v-if="isActive"
		class="sheet_overlay" 
		@click="$emit('sheetLayerOnOff', false)" 
	></div>
	<div class="sheet_layer" :class="{active : isActive}">
		<button type="button" @click="$emit('sheetLayerOnOff', false)" class="btn_close"><Icons name="ic-close"></Icons></button>
		<div class="layer_inner_wrap">
			<div class="layer_tit">Gui</div>
			<div class="guides">
				<ul>
					<li><router-link to="/">Get start!!</router-link></li>
					<li><router-link to="/grid">Grid</router-link></li>
					<li><router-link to="/loading">Loading</router-link></li>
					<li><router-link to="/css">Css</router-link>
						<ul>
							<li><router-link to="/css/flex">flex</router-link></li>
							<li><router-link to="/css/float">float</router-link></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import Icons from '../../components/icon'

export default {
	props : {
		isActive : {
			type: Boolean
		},
		sheetLayerOnOff : {
			type: Function,
		}
	},
	components : {
		Icons
	},	
	created () {
	},
	methods : {

	},
}
</script>
<style lang="scss" scoped>
$sheetleftwidth : 280px;

@keyframes fadeInSheetOverlay {
	from {background-color: rgba(0,0,0,0);}
	to {background-color: rgba(0,0,0,.24);}
}
.sheet_overlay {
	position:fixed;
	inset:0;
	z-index: 9999;
	animation: fadeInSheetOverlay .4s forwards;
}
.sheet_layer {
	position:fixed;
	top:0;
	left:0;
	width: $sheetleftwidth;
	background-color: #333;
	color:#fff;
	height: 100%;
	border-radius: 0 8px 8px 0;
	transform: translateX(-1 * $sheetleftwidth);
	transition: all .4s;
	z-index: 10000;
	
	.btn_close {
		position: absolute;
		top:0;
		right:0;
		z-index: 10;
	}
	&.active {
		transform: translateX(0);
	}
}
.layer_inner_wrap {
	position:relative;
	text-align: left;
}

.layer_tit {
	font-size: 28px;
	font-weight: 600;
	padding:20px 16px; 
}

.guides {
	> ul {
		> li {
			> a {
				display: block;
				padding:10px 16px;
			}
			> ul {
				> li {
					> a {
						display: block;
						padding:10px 16px 10px 32px;
						color:#999;
					}
				}
			}
		}
	}
}
</style>