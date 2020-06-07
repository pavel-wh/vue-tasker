<template>
	<div>
		<h1>Tasks List</h1>
		<hr>
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
				<tr v-for="(task, index) of tasks" :key="index">
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

export default {
	computed: {
		...mapGetters(['tasks'])
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