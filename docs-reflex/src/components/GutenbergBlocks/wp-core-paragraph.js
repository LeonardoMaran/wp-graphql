import React from 'react'

const WpCoreParagraph = props => {
    return(<pre>{JSON.stringify(props, null, 2)}</pre>);
};

export default WpCoreParagraph;