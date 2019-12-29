import React from 'react';

class Clock extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { 
            date: new Date()
        };
    }

    componentDidMount() 
    {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() 
    {
        clearInterval(this.timerID);
    }

    tick() 
    {
        this.setState(
            {
                date: new Date()
            }
        );
    }

    render()
    {
        return(
            <div>
                <span>{this.props.name != null ? 'Hi there, ' + this.props.name : ''} It is {this.state.date.toLocaleTimeString()}.</span>
                
            </div>
        )
    }
}

export default Clock;