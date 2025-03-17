function Heading(props) {
    // JSX   =>   {}
    const style = {
        color: 'red',
        backgroundColor: '#333',
        padding: '20px'
    }

    return (
        <>
            <h1 style={style}>{ props.children }</h1>
        </>
    )
}

export default Heading;