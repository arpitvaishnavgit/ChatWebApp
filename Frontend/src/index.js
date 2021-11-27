import React from 'react';
import ReactDOM from 'react-dom';
import Ren from './mainindex';
import ApiProvider from './contextapi';



function Mainfun() {
    return (
        <div>
        <ApiProvider>
            <Ren/>
        </ApiProvider>
        </div>
        );
}

ReactDOM.render(<Mainfun />,document.getElementById('root'));
