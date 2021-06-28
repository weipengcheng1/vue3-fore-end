<template>
		<div class="container">
				<img class="bg_img" src="../assets/images/bg.png" alt="">
				<div class="login_box">
						<div class="login-title__box">
								<span>小榔头后台管理系统</span>
						</div>
						<div class="login-form__box">
								<el-form>
										<el-form-item>
												<el-input prefix-icon="el-icon-user"></el-input>
										</el-form-item>
										<el-form-item>
												<el-input prefix-icon="el-icon-lock"></el-input>
										</el-form-item>
								</el-form>
						</div>
				</div>
		</div>
</template>

<script>
export default {
		name: "Login"
}
</script>

<style lang="scss" scoped>
.container {
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		position: relative;

		.bg_img {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				z-index: -1;
		}
}

.login_box {
		width: 36.4375rem;
		position: absolute;
		top: 11rem;
		left: 7.25rem;

		.login-title__box {
				width: 100%;
				text-align: center;
				font-size: 38px;
				color: #0760A4;
				font-weight: 400;
				margin-bottom: 33px;
		}
}
</style>