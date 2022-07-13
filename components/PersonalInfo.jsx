const PersonalInfo = (props) => {
    return (
        <div class = "personal-info">
        <h1>personal info</h1>
        <h2>Name : {props.name}</h2>
        <p>mobile : {props.mobile}</p>
        <p>email : {props.email}</p>
      </div>
    )
}

export default PersonalInfo