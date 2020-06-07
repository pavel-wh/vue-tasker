import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
	},
	getters: {
		tasks: (state) => state.tasks,
		taskByID: (store) => (id) => store.tasks.find((task) => task.id === id),
	},
	mutations: {
		initialStore(state) {
			if (localStorage.getItem('tasks')) {
				// Replace the state object with the stored item
				state.tasks = JSON.parse(localStorage.getItem('tasks'))
			}
		},
		createTask(state, task) {
			state.tasks.push(task)

			localStorage.setItem('tasks', JSON.stringify(state.tasks))
		},
		updateTask(state, updateTask) {
			const tasks = state.tasks.concat()

			const index = tasks.findIndex((t) => t.id === updateTask.id)

			const task = tasks[index]

			const status =
				new Date(updateTask.date) > new Date() ? 'active' : 'outdated'

			tasks[index] = { ...updateTask, ...task, status }

			state.tasks = tasks

			localStorage.setItem('tasks', JSON.stringify(state.tasks))
		},
		completeTask(state, id) {
			const index = state.tasks.findIndex((task) => task.id === id)
			state.tasks[index].status = 'completed'
		},
	},
	actions: {
		createTask({ commit }, task) {
			commit('createTask', task)
		},
		updateTask({ commit }, task) {
			commit('updateTask', task)
		},
		completeTask({ commit }, id) {
			commit('completeTask', id)
		},
	},
	modules: {},
})
