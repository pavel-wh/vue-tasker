<template>
	<div>
		<h1>Tasks List</h1>
		<hr>
		<br>
		<div class="row">
			<div class="col s6">
				<select ref="select" v-model="filter">
					<option value="" disabled selected>Filter tasks</option>
					<option value="all">All</option>
					<option value="outdated">Outdated</option>
					<option value="active">Active</option>
					<option value="completed">Completed</option>
				</select>
				<label>Filter tasks</label>
			</div>
		</div>
		<table>
			<thead>
				<th>#</th>
				<th>Title</th>
				<th>Date</th>
				<th>Description</th>
				<th>Status</th>
				<th>Open</th>
			</thead>
			<tbody>
				<tr v-for="(task, index) of displayTasks" :key="index">
					<td>{{index + 1}}</td>
					<td>{{task.title}}</td>
					<td>{{new Date(task.date).toDateString()}}</td>
					<td class="description">{{task.description}}</td>
					<td>{{task.status}}</td>
					<td>
						<router-link tag="button" class="btn btn-small" :to="`/list/${task.id}`">Open</router-link>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import M from 'materialize-css'

export default {
	data() {
		return {
			filter: null
		}
	},
	computed: {
		...mapGetters(['tasks']),
		displayTasks() {
			return this.tasks.filter(task => {
				if (!this.filter || this.filter === "all") {
					return true
				}
				return task.status === this.filter
			})
		}
	},
	mounted() {
		M.FormSelect.init(this.$refs.select)
	}
}
</script>

<style scoped>
.description {
	max-width: 400px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
</style>