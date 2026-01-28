function welcomeMassage({ name }){
    return <h1> welcome, {name}! </h1>;
}

export default welcomeMassage;


function welcomeMassage( {name} ){ // the {name} being passed in as a prop
    // props is an object that gets passed into React components
    return <h1> welcome, {name}! </h1>; // <h1> element renders in the browser as HTML  
}

export default welcomeMassage;

import welcomeMessage from './WelcomeMessage';

function App(){
    return (
        <div>

            <WelcomeMessage name="Brad" />
            <welcomeMessage name="Alice" />
        </div>
    );
}


