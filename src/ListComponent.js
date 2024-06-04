import { useState } from "react";

const ListComponent = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    const updatedElement = [...item, input];
    setItem(updatedElement);
    setInput("");
    setCount(count + 1);
  };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handlKeyPress = (e) => {
    if (e.key === "Enter") {
      const updatedElement = [...item, input];
      setItem(updatedElement);
      setInput("");
      setCount(count + 1);
    }
  };

  return (
    <>
      <input
        onChange={onChangeHandler}
        onKeyDown={handlKeyPress}
        value={input}
      />
      <p>{count}</p>
      <ul>
        {item.map((element) => (
          <li key={"${element}"}>{element}</li>
        ))}
      </ul>
      <button onClick={onClickHandler}>Add To Do</button>
    </>
  );
};

export default ListComponent;
