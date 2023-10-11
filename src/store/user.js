import { createStore } from 'vuex';

const sample_url = "https://jsonplaceholder.typicode.com/users/";

export default createStore({
	state: {
		isLoggedIn: false,
		user: null,
	},
	mutations: {
		login(state, user) {
			state.isLoggedIn = true;
			state.user = user;
		},
		logout(state) {
			state.isLoggedIn = false;
			state.user = null;
		},
	},
	actions: {
		async loginUser({ commit }, credentials) {
			try {
				// Axios를 사용하여 서버로부터 데이터를 받아옵니다.
				const response = await axios.post(sample_url, credentials);

				// 성공적으로 로그인되면 상태를 업데이트합니다.
				commit('login', response.data.user);
			} catch (error) {
				console.error(error);
				// 실패 시에 대한 처리를 추가할 수 있습니다.
			}
		},
		logoutUser({ commit }) {
			commit('logout');
		},
	},
	modules: {},
});