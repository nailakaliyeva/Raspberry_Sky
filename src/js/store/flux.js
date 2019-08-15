const getState = ({ getStore, setStore }) => {
	return {
		store: {
			sessions: [
				{
					id: 1,
					date: "12 / 15 / 19",
					time: 4567,
					magneticField: 456,
					speed: 456,
					temperature: 456,
					atmospherePressure: 456
				},
				{
					id: 2,
					date: "12 / 15 / 19",
					time: 44567,
					magneticField: 123,
					speed: 9876,
					temperature: 123,
					atmospherePressure: 4567
				},
				{
					id: 3,
					date: "12 / 15 / 19",
					time: 45367,
					magneticField: 444,
					speed: 446,
					temperature: 55,
					atmospherePressure: 777
				}
			]
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire sessions array to look for the respective index
				//and change its color
				const session = store.sessions.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ sessions: sessions });
			}
		}
	};
};

export default getState;
