const getState = ({ getStore, setStore }) => {
	return {
		store: {
			token: null,
			platinum: [],
			products: [
				{
					id: 1,
					plan_name: "Platinum",
					price: 99
				},
				{
					id: 2,
					plan_name: "Silver",
					price: 49
				},
				{
					id: 3,
					plan_name: "Gold",
					price: 79
				}
			],
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
				// const url = "https://3000-e5f0e93b-8751-423f-b4d5-c61f23dd7bb9.ws-us0.gitpod.io/user";
				const url = "http://127.0.0.1:3000/user";
				fetch(url, {
					method: "post",
					headers: {
						"Content-Type": "application/json",
						mode: "no-cors"
					},
					body: JSON.stringify(obj)
				});
				// props.history.push("/login");
			},
			// retrieveData: () => {
			// 	fetch("https://api.github.com/users/plucodev")
			// 		.then(response => response.json())

			// 		.then(data => setStore({ platinum: data }));
			// },
			data: () => {
				console.log("data");
				fetch("http://127.0.0.1:3000/data")
					.then(response => response.json())
					.then(data => {
						setStore({ sessions: data });
					});
			},
			login: (username, password, props) => {
				fetch("http://127.0.0.1:3000/login", {
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
						setStore({ token: token.jwt, currentUser: token.id });
						props.history.push("/profile");
					})
					.catch(err => console.log(err));
				// let store = getStore();
				// let loggedUser = store.users.find(item => item.email === email);
				// console.log("$$$", loggedUser);
				// setStore({ currentUser: loggedUser });
			},
			logout: () => {
				setStore({ currentUser: null, token: null });
			}
		}
	};
};

export default getState;
