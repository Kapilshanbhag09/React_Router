import React from 'react'

function Dynamic({match}) {
    return (
        <div>
            <a href="/dynamic/09">Route to dynamic/09</a>
            <h1>dynamic link routed to</h1>
            <h1>{match.params.id}</h1>
        </div>
    )
}

export default Dynamic
