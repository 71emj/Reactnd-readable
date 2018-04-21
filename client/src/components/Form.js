import React from "react";
import { Form, Input, Select, Button } from "semantic-ui-react";
import { Helpers } from "../util";

const presets = {
  "default": {
    meta: [],
    selectOptions: []
  },
  "comment": {
    meta: [{
      name: "author",
      type: "text"
    }],
    selectOptions: []
  },
  "post": {
    meta: [{
      name: "title",
      type: "text"
    }, {
      name: "author",
      type: "text"
    }, {
      name: "category",
      type: "select"
    }],
    selectOptions: [
      { key: "1", "text": "hello", "value": "hello" },
      { key: "2", "text": "hello", "value": "hello" }
    ]
  }
};

const style = {
  marginTop: "1.25rem",
  padding: "0.5rem 0.25rem",
};

const fetchPresets = props => {
  const { purpose } = props;
  return presets[purpose] || presets["default"];
}

const CustomForm = props => {
  const formCreator = fetchPresets(props);
  const { meta, selectOptions } = formCreator;
  return (
    <Form onSubmit={props.submit} >
      <Form.Group children={meta.map((field, i) =>
          <Form.Field key={i} width="four">
            <label>{Helpers.toTitleCase(field.name)}</label>
            <Input name={field.name} type={field.type} placeholder="User name" />
          </Form.Field>
      )}/>
      <Form.TextArea name="body" style={{ minHeight: "10rem" }}
        label={props.type.name} placeholder={props.type.placeholder} />
      <Form.Field align="right" style={style}>
        <Button circular loading={props.submitting} color="violet">Submit</Button>
      </Form.Field>
    </Form>
  );
}

export default CustomForm;
