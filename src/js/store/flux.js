
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			charactersKey: [],
			charactersDetails: {},
			planets: [],
			starships: []
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: ()=> {
				fetch('https://www.swapi.tech/api/people')
				.then((response)=> {
					if(response.ok){
						console.log("exito")
					}
					return response.json()
				})
				.then((data)=>{
					setStore({characters: data.results})
				
				})
				.catch(err=>{console.log(err)})
			},
			/* getDetailsCharacters: ()=> {
				fetch('https://www.swapi.tech/api/people')
				.then((response)=>{
					if(response.ok){
						console.log('detalles traidos con exito')
					}
					return response.json()
				})
				.then((data)=>{
					setStore({charactersDetails: data.results})
					console.log(data.results)
				})
				.catch((err)=>{console.log(err)})
			}, */
			
			getPlanets: ()=> {
				fetch('https://www.swapi.tech/api/planets')
				.then((response)=>{
					if(response.ok) {
						console.log('planetas traidos con exito')
					}
					return response.json()
				})
				.then((data)=>{
					setStore({planets: data.results})

				})
				.catch((err)=>{console.log(err)})
			},
			getStarships: ()=>{
				fetch('https://www.swapi.tech/api/starships')
				.then((response)=>{
					if(response.ok){
						console.log('starships traidos con exito')
					}
					return response.json()
				})
				.then((data)=>{
					setStore({starships: data.results})
				})

			}
		}
	};
};

export default getState;
