import "./style.css"

function Heading(props) {
    // props  ==>  properties  ==>  {children:null}
    const CHILDREN = props.children ? props.children : "Text is missing...!!!"

    // JSX syntax => {...}
    const STYLE = {
        color: props.color,
        backgroundColor: props.bg
    }
    return (
        <h1 className="heading-wrapper" style={STYLE}>
            {CHILDREN}
        </h1>
    )
}

export default Heading