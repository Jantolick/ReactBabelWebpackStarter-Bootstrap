import React from 'react';

class Footer extends React.Component
{
    render()
    {
        return (
            <footer className="font-small blue pt-4 row">
                <div className="col-4">
                    <span>{this.props.text}</span>
                </div>            
                <div className="col-4">
                    <span>{this.props.text}</span>
                </div>            
                <div className="col-4">
                    <span>{this.props.text}</span>
                </div>            
            </footer>
        );
    }
}

export default Footer;