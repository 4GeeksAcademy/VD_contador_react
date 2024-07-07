import React from "react";

import Counter from "./counter";

//create your first component
// cuando paso las props, los debo colocar en un solo objeto!
const Home = ({contador_1,contador_2,contador_3,contador_4,contador_5,contador_6}) => {
	return (
		// genero el contenedor principal para almacenar cada uno de los contenedores
		<div className="container-fluid d-flex justify-content-between gap-3 bg-black p-3">
				{/* inserto cada uno de los componentes que van a contener los numeros */}
				<Counter elemento_contador={"🕑"}/>
				<Counter elemento_contador={contador_6}/>
				<Counter elemento_contador={contador_5}/>
				<Counter elemento_contador={contador_4}/>
				<Counter elemento_contador={contador_3}/>
				<Counter elemento_contador={contador_2}/>
				<Counter elemento_contador={contador_1}/>
		</div>
	);
};

export default Home;
