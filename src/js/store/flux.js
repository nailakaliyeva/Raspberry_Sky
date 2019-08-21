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
					mag_x: 456,
					mag_y: 4567,
					mag_z: 44556,
					speed: 456,
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
				let store = getStore();
				setStore({ users: store.users.concat(obj) });

				// fetch("https://3000-c542c7ed-cb4c-48ff-bae0-2b34be1eb370.ws-us0.gitpod.io/user", {
				// 	method: "post",
				// 	headers: {
				// 		"Content-Type": "application/json"
				// 	},
				// 	body: JSON.stringify(obj)
				// });
				props.history.push("/login");
			},
			login: (email, password, props) => {
				fetch("https://3000-acdb7774-faec-45ef-9a08-2fced242f170.ws-us0.gitpod.io/login", {
					method: "post",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				})
					.then(response => {
						if (!response.ok) throw Error();
						response.json();
					})
					.then(token => {
						setStore({ token: token.jwt });
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
