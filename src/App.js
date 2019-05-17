import React from 'react';
import Classroom from './components/admin/Classroom';
import StatusButton from './components/student/StatusButton';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div>
              <Route exact path='/' render={() => <StatusButton />} />
              <Route path='/admin' render={() => <Classroom />} />
            </div>
        </BrowserRouter>
    );
}

export default App;
