import { Divider, Typography } from "antd";
import Filters from "../../component/Filter";
import TodoList from "../../component/TodoList";

const { Title } = Typography;

function Home() {
  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "80vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default Home;
