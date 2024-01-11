const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.location}</p>
    </div>
  );
};
export default User;
