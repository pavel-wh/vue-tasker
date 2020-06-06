<template>
	<div class="row">
		<div class="col s6 offset-s3">
			<h1>Create task</h1>
			<form action="">
				<div class="input-field">
					<input type="text" name="title" id="title" class="validate" required placeholder="Title">
					<label for="title"></label>
				</div>
				<div class="chips" ref="chips"></div>
			</form>
		</div>
	</div>
</template>
 
<script>
import M from 'materialize-css'
export default {
	name: 'Create',
	components: {},
	mounted() {
		M.AutoInit()
		M.Chips.init(this.$refs.chips, {
			placeholder: 'Task tags'
		});
	}
}
</script>

<style scoped></style>