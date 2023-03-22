import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

// Data Manipulation
let data = [
  {
    id: 1,
    name: "John Doe",
    status: 1,
  },
  {
    id: 2,
    name: "Jane Doe",
    status: 2,
  },
  {
    id: 3,
    name: "Adam Rocket",
    status: 2,
  },
  {
    id: 4,
    name: "Luis Rocket",
    status: 1,
  },
];

const transformData = (data) => {
  let result = {};

  data.forEach((item) => {
    let key = "status-" + item.status;
    if (result[key] !== undefined) {
      result[key].push(item);
    } else {
      result[key] = [item];
    }
  });

  return result;
};

console.log(transformData(data));

function App() {
  return (
    <div className="d-flex flex-column container w-50">
      <Counter headerText={"🙄"} />
      <TodoList />
    </div>
  );
}

export default App;
