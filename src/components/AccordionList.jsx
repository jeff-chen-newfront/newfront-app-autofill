import React, { useState } from 'react';
import configs from '../configs';
import { Button, Accordion, Card } from 'react-bootstrap';
import { autofill } from '../utils/autofill';
import { FieldList } from './FieldList.jsx';

function AccordionList() {
    return (
        <Accordion>
            {
                configs.map(({ name, fields }, index) => {
                    console.log(fields);
                    return (
                        <AccordionListItem key={name} name={name} fields={fields} index={index}/>
                    )
                })
            }
        </Accordion>
    )
}

function AccordionListItem(props) {
    const {name, fields, index} = props;
    const [isLoading, setLoading] = useState(false);

    const handleOnClick = (e) => {
        setLoading(true);
        autofill(fields, () => {
            setLoading(false);
        });
    }

    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                    {name}
                </Accordion.Toggle>
                <Button key={name}
                    onClick={handleOnClick} 
                    variant="primary" 
                    size="sm"
                >
                    {isLoading ? "Loading..." : "Apply" }
                </Button>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
                <Card.Body>
                    {
                        fields ? <FieldList fields={Object.keys(fields)}/> : null
                    }
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export { AccordionList };