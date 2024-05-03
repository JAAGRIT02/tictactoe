// eslint-disable-next-line react/prop-types
const Foursides = ({ value ,children })=>{
    console.log(children);
    return <div>{value}

    <h5>children will be rendered below</h5>
    <div>{children}</div>
    </div>
}

export default Foursides