import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
	},
	getters: {
		tasks(state) {
			return state.tasks
		},
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
	},
	actions: {
		createTask({ commit }, task) {
			commit('createTask', task)
		},
	},
	modules: {},
})
