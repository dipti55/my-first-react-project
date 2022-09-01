import "./UserCard.css"
// const UserCard = (props)=>{
const UserCard = ({name,number,email,address,age})=>{

    return(
        <div id="userCard">
            {/* <h1>{props.name}</h1>
            <p>{props.number}</p>
            <p>{props.email}</p>
            <p>{props.address}</p>
            <p>{props.profile}</p>
            <p>{props.age}</p> */}
            {/* <p>{props.obj?.name}</p> */}
            {/* <h1>Common</h1> */}
            <h1>{name}</h1>
            <p>{number}</p>
            <p>{email}</p>
            <p>{address}</p>
            <p>{age}</p>
            <p>India</p>
        </div>
    )
}

export default UserCard;