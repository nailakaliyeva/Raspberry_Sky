const getState = ({ getStore, setStore }) => {
	return {
		store: {
			token: null,
			sessions: [
				{
					pitch: 2,
					roll: 2,
					yaw: 2,
					date: "12 / 15 / 19",
					time: "ttt",
					x_axis: 456,
					y_axis: 4567,
					z_axis: 44556,
					temperature: 456,
					atmospherePressure: 456
				},
				{
					pitch: 2,
					roll: 2,
					yaw: 2,
					date: "12 / 15 / 19",
					time: "time",
					magneticField: 123,
					speed: 9876,
					temperature: 123,
					atmospherePressure: 4567
				},
				{
					pitch: 2,
					roll: 2,
					yaw: 2,
					date: "12 / 15 / 19",
					time: "time",
					magneticField: 444,
					speed: 446,
					temperature: 55,
					atmospherePressure: 777
				}
			],
			users: [],
			currentUser: null,
			token: null
		},
		actions: {
			addUser: (obj, props) => {
				// let store = getStore();
				// setStore({ users: store.users.concat(obj) });
				fetch("https://3000-e5f0e93b-8751-423f-b4d5-c61f23dd7bb9.ws-us0.gitpod.io/user", {
					method: "post",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(obj)
				});
				props.history.push("/login");
			},
			login: (username, password, props) => {
				fetch("https://3000-e5f0e93b-8751-423f-b4d5-c61f23dd7bb9.ws-us0.gitpod.io/login", {
					method: "post",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: username,
						password: password
					})
				})
					.then(response => {
						if (!response.ok) throw Error();
						return response.json();
					})

					.then(token => {
						console.log(token);
						setStore({ token: token.jwt, currentUser: true });
						props.history.push("/profile");
					})
					.catch(err => console.log(err));
				// let store = getStore();
				// let loggedUser = store.users.find(item => item.email === email);
				// console.log("$$$", loggedUser);
				// setStore({ currentUser: loggedUser });
			},
			logout: () => {
				setStore({ currentUser: null });
			}
		}
	};
};

export default getState;
