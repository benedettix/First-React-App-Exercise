function Person({ data, colorChanger }) {
  let dataList = data.map((data, index) => {
    return (
      <div
        onClick={colorChanger}
        className={(data.color ? "red" : "yellow") + " card"}
        key={data.id}
        data-key={index}
      >
        <p>{index}</p>
        <h3>{data.username}</h3>
        <p>{data.email}</p>
      </div>
    );
  });

  return <div className="fluid-container">{dataList}</div>;
}

export default Person;
