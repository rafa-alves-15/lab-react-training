function IdCard(props) {
  return (
    <div className="container">
      <img src={props.picture} alt="" />
      <br/>
      <span>First Name: {props.firstName}</span>
      <br/>
      <span>Last Name: {props.lastName}</span>
      <br/>
      <span>Gender: {props.gender}</span>
      <br/>
      <span>Height: {props.height}</span>
      <br/>
      <span>Birth: {props.birth}</span>
    </div>
  );
}

export default IdCard;
