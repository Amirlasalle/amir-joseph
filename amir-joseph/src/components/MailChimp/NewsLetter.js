import { React, useState, useEffect } from 'react'
import { Col, Row, Alert } from 'react-bootstrap'

const NewsLetter = ({ subscribe, status, message }) => {
    const [email, setEmail] = useState('')

    const clearFields = () => {
        setEmail('');
    };

    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status]);


    const handleSubmit = () => {
        e.preventDefault();
        email &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email
            })
    }


    return (
        <Col lg={12}>
            <div className='newsletter-box'>
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to my Newsletter</h3>
                        <h6>dont worry I'm a One MAN TEAM, there will be no spams 😎</h6>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant='danger'>{message}</Alert>}
                        {status === 'success' && <Alert variant='success'>{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className='new-email-box'>
                                <input
                                    value={email}
                                    type='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Email Address'
                                />
                                <Button type='submit' className=' btn-block btn8 btn-bg px-1 py-1'>
                                    <span>Submit</span>
                                </Button>
                            </div>
                        </form>
                    </Col>
                </Row>

            </div>
        </Col>

    )
}

export default NewsLetter