import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // useEffect : use code when i want. use codes when state change.
  // dependancy state is nothing : only run once.
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  // dependancy state on keyword : run when keyword changes.
  useEffect(() => {
      console.log("I run when 'keyword' changes.");
  },[keyword]);
  useEffect(() =>{
    console.log("I run when 'counter' changes.");
  },[counter]);
  // dependancy state on keyword & counter : run when keyword or counter change.
  useEffect(() =>{
    console.log("I run when keyword & counter change.");
  },[keyword,counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

function Hola(){
  useEffect(() => {
    console.log("create :)");
    return () => console.log("destroyed :("); // cleanUp function.
                                              // useEffect(()=>something(), [dependancy])에서 dependancy이 변경될 때마다 실행됨. 
                                              // dependancy이 변경되면, 원래의 값을 가지고 return 함수가 실행됨.
                                              // 메모리 누수를 막기 위해 메모리를 정리 할 때 사용.
  }, []);
  return <h1>Hola</h1>;
}

function App1(){
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return(
    <div>
      {showing ? <Hola />: null}
      <button onClick={onClick}>
        {showing ? "Hide" : "Show"}
        </button>
    </div>
  );
}

export default App1;
