function Heading(props) {
    // props  ==>  properties  ==>  {children:""}
    const CHILDREN = props.children ? props.children : "Text is missing...!!!"

    // JSX syntax => {...}
    const STYLE = {
        color: props.color,
        backgroundColor: props.bg,
        padding: '10px'
    }
    return (
        <h1 style={STYLE}>
            {CHILDREN}
        </h1>
    )
}

export default Heading