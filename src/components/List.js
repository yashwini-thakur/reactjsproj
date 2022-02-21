const List = (props) => {
  return (
    <>
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
