<template>
	<div class="row">
		<div class="col s6 offset-s3">
			<h1>Create task</h1>
			<form @submit.prevent="createTask">
				<div class="input-field">
					<input type="text" name="title" id="title" class="validate" required v-model="title">
					<label for="title">Title</label>
          <span class="helper-text" data-error="Title is required"></span>
				</div>
				<div class="input-field">
					<div class="chips" ref="chips"></div>
				</div>
				<div class="input-field">
					<textarea id="description" class="materialize-textarea"  data-length="2048" height="400" v-model="description"></textarea>
					<label for="description">Description</label>
				</div>
				<div class="input-field">
					<input type="text" id="deadline" ref="datepicker">
					<label for="description">Deadline</label>
				</div>
				<button class="waves-effect waves-light btn" type="submit">Create Task</button>
			</form>
		</div>
	</div>
</template>
 
<script>
import M from 'materialize-css'
import { v4 as uuidv4 } from 'uuid';
export default {
	name: 'Create',
	data() {
		return {
			description: '',
			title: '',
			cheaps: null,
			date: null
		}
	},
	components: {},
	mounted() {

		const textNeedCount = document.querySelector('#description')
		textNeedCount.style.height = '150px'
		new M.CharacterCounter(textNeedCount)

		this.chips = M.Chips.init(this.$refs.chips, {
			placeholder: 'Task tags'
		});

		this.date = M.Datepicker.init(this.$refs.datepicker, {
			format: 'dd.mm.yyyy',
			defaultDate: new Date(),
			setDefaultDate: true
		})
	},
	methods: {
		createTask() {
			const task = {
				title: this.title,
				description: this.description,
				id: uuidv4(),
				status: 'active',
				tags: this.chips.chipsData,
				date: this.date.date
			}
			this.$store.dispatch('createTask', task)
			this.$router.push('/list')
		}
	},
	destroyed() {
		if (this.date && this.date.destroy) {
			this.date.destroy()
		}
		if (this.chips && this.chips.destroy) {
			this.chips.destroy()
		}
	}
}
</script>

<style scoped></style>