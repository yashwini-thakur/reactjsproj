const List = (props) => {
  return (
    <>
      <h1>This is list component!</h1>
      {props.users.map((user, i) => (
        <div key={i} onClick={() => props.getUserIndex(i)}>
          <h1>{user}</h1>
          <br />
        </div>
      ))}
    </>
  );
};

export default List;
