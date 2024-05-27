import { Typography } from "antd";
import { Count } from "../../component/Count";
const { Title } = Typography;

function CountPage() {
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
      <Title style={{ textAlign: "center" }}>Count page</Title>
      <Count />
    </div>
  );
}

export default CountPage;
