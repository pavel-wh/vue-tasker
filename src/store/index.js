import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
	},
	mutations: {
		createTask(state, task) {
			state.tasks.push(task)

			localStorage.setItem('task', JSON.stringify(state.tasks))
		}
	},
	actions: {
		createTask({commit}, task) {
			commit('createTask', task)
		}
	},
	modules: {},
})
