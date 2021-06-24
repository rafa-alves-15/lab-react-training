function Random(props) {
  return (
    <div>
      <span>
        Random value between {props.min} and {props.max} {'=> '}
        {Math.floor(Math.random() * (props.max - props.min))}
      </span>
    </div>
  );
}
export default Random;
