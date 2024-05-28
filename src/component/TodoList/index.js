import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo } from "../../stores/features/todoSlice";
import { returnTodoList } from "../../stores/selecter";

import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(returnTodoList);

  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleChangeInputTodoName = (e) => {
    setTodoName(e.target.value);
  };

  const handleSelectPriority = (value) => {
    setPriority(value);
  };
  const handleButtonAddTodoList = () => {
    dispatch(
      addNewTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    // dispatch(
    //   addTodos({
    //     id: uuidv4(),
    //     name: todoName,
    //     priority: priority,
    //     completed: false,
    //   })
    // );
    setTodoName("");
    setPriority("Medium");
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList?.map((todo) => {
          return (
            <Todo
              key={todo.id}
              name={todo.name}
              priority={todo.priority}
              completed={todo.completed}
              id={todo.id}
            />
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleChangeInputTodoName} />
          {/* <InputNumber /> */}
          <Select
            style={{ width: "200px" }}
            defaultValue="Medium"
            value={priority}
            onChange={handleSelectPriority}
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
          <Button type="primary" onClick={handleButtonAddTodoList}>
            {" "}
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
