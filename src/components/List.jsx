import React from 'react';
import configs from '../configs';
import { Button, Accordion, Card } from 'react-bootstrap';
import { autofill } from '../utils/autofill';

function List() {
    return (
        <Accordion>
            {
                configs.map(({ name, fields }, index) => {
                    console.log(fields);
                    return (
                        <Card key={name}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                                    {name}
                                </Accordion.Toggle>
                                <Button key={name}
                                    onClick={(e) => {
                                        autofill(fields);
                                    }} 
                                    variant="primary" 
                                    size="sm"
                                >
                                    Apply
                                </Button>
                            </Card.Header>
                            <Accordion.Collapse eventKey={index}>
                                <Card.Body></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                })
            }
        </Accordion>
    )
}

export { List };