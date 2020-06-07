<template>
	<div class="row">
		<div class="task col s8 offset-s2" v-if="task">
			<h1 v-if="task.status !== 'completed'">Edit task</h1>
			<h1 v-else>Completed!</h1>
			<form @submit.prevent="updateTask">
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
					<input type="text" id="deadline" ref="datepicker" v-model="date">
					<label for="description">Deadline</label>
				</div>
				<button v-if="task.status !== 'completed'" class="waves-effect waves-light btn" type="submit">Update Task</button>
				<button v-if="task.status !== 'completed'" class="waves-effect waves-light btn green mr-1" type="button" @click.prevent="completeTask">Complete Task</button>
			</form>
		</div>
		<p class="task col s8 offset-s2" v-else>This task not found...</p>
	</div>
</template>
<script>
import M from 'materialize-css'
import {mapGetters} from 'vuex'

export default {
	name: 'Detail',
	data() {
		return {
			title: '',
			description: '',
			cheaps: null,
			date: null
		}
	},
	mounted() {
		this.title = this.task.title
		const textNeedCount = document.querySelector('#description')
		textNeedCount.style.height = '150px'
		new M.CharacterCounter(textNeedCount)
		this.description = this.task.description

		this.chips = M.Chips.init(this.$refs.chips, {
			placeholder: 'Task tags',
			data: this.task.tags
		});

		this.date = M.Datepicker.init(this.$refs.datepicker, {
			format: 'dd.mm.yyyy',
			defaultDate: new Date(this.task.date),
			setDefaultDate: true
		})

		setTimeout(() => {
			M.updateTextFields()
		}, 0)
	},
	methods: {
		updateTask() {
			const task = {
				title: this.title,
				id: this.task.id,
				description: this.description,
				tags: this.chips.chipsData,
				date: this.date.date
			}
			this.$store.dispatch('updateTask', task)
			this.$router.push('/list')
		},
		completeTask() {
			this.$store.dispatch('completeTask', this.task.id)
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
	},
	computed: {
		...mapGetters(['taskByID']),
		task() {
			return this.taskByID(this.$route.params.id)
		}
	}
}
</script>

<style scoped>
.btn ~ .btn {
	margin-left: 1rem;
}
</style>