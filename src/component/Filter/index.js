import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  searchFilterText,
  searchFilterRadio,
  searchFilterPrioty,
} from "../../stores/features/filterSlice";

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [searchRadio, setSearchRadio] = useState("All");
  const [prioriry, setPriority] = useState([]);
  const handleOnChangeSearchText = (e) => {
    setSearchText(e.target.value);
    dispatch(searchFilterText(e.target.value));
  };
  const handleOnChangeSearchRadio = (e) => {
    setSearchRadio(e.target.value);
    dispatch(searchFilterRadio(e.target.value));
  };
  const handleSelect = (value) => {
    setPriority(value);
    dispatch(searchFilterPrioty(value));
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={handleOnChangeSearchText}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={searchRadio} onChange={handleOnChangeSearchRadio}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={prioriry}
          onChange={handleSelect}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
