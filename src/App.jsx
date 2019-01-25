import React from 'react';
import Clock from './Components/Clock.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';

/*
    This is a demonstration app for starting a React project.
    
    App.jsx shows a basic import structure.
    Clock.jsx shows a live-updating React component / state use.
    Footer shows some prop use.
    Header just shows some Bootstrap integration.
*/

class App extends React.Component
{
    render()
    {
        return (
        <div>
            <Header/>
            <Content/>
            <Clock/>
            <Footer text="Here is an example text prop."/>            
        </div>
        );
    }
}

class Content extends React.Component
{
    render()
    {
        return(
            <div>
                <h2>And here is the content.</h2>
                <p>Something about fish goes here...</p>
            </div>
        );
    }
}


export default App;