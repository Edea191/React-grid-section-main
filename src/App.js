import React from 'react';
import ReactDOM from 'react-dom';
import GridSection from './GridSection';

const App = () =>{

return(
    <div className='container'>
        <GridSection/>
    </div>
);

};

ReactDOM.render(<App/>, document.getElementById("root"));