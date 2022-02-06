import React from 'react';

function JumbotronText(props) {
    return (
        <>
            <div className="text-area">
                <h1>{props.title}</h1>
                <p className="pt-3">{props.text}</p>
            </div>

        </>
    );
}

export default JumbotronText;