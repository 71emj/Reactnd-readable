import React from "react";
import { Form } from "semantic-ui-react";

const categories = [
  { key: "1", "text": "hello", "value": "hello" },
  { key: "2", "text": "hello", "value": "hello" }
]

const CustomForm = props => {
  return (
    <Form onSubmit={props.submit} loading={props.submitting} >
      <Form.Group widths="equal">
        <Form.Input fluid label="Title" placeholder="Title" />
        <Form.Input fluid label="Author" placeholder="Author" />
        <Form.Select fluid label="Category" defaultValue="hello"
          options={categories} placeholder="Category" />
      </Form.Group>
      <Form.TextArea style={{ minHeight: "10rem" }}
        label={props.type.name} placeholder={props.type.placeholder} />
      <Form.Button>Submit</Form.Button>
    </Form>
  );
};

export default CustomForm;
