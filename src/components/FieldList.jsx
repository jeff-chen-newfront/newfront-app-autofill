import React from 'react'
import { ListGroup } from 'react-bootstrap';

function FieldList(props) {
    const { fields } = props;

    return (
        <ListGroup>
             { fields.map((field) => {
                return (
                    <ListGroup.Item>{field}</ListGroup.Item>
                )
             })}
        </ListGroup>
    )
}

export { FieldList };