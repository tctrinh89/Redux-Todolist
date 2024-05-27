import { Typography } from "antd";

const { Title } = Typography;

function New() {
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
      <Title style={{ textAlign: "center" }}>News page</Title>
    </div>
  );
}

export default New;
