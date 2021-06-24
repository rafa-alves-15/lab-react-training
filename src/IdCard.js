function IdCard(props) {
  return (
    <div className="container">
      <img src={props.picture} alt="" />
      <br/>
      <strong>First Name: </strong>{props.firstName}
      <br/>
      <strong>Last Name: </strong>{props.lastName}
      <br/>
      <strong>Gender: </strong>{props.gender}
      <br/>
      <strong>Height:</strong> {props.height}
      <br/>
      <strong>Birth: </strong>{props.birth}
    </div>
  );
}

export default IdCard;
