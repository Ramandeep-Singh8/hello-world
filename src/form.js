import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Formpage() {
	const [fullName, setFullName] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [age,setAge] = React.useState('')
return (
	<div style={{ display: 'block',
				width: 700,
				padding: 30,
		marginLeft: '30%',
		marginTop: '10%',
	backgroundColor:'#7CD1B8'}}>
	<h4>Fill Your Details</h4>
	<Form>
	<Form.Group>
		<Form.Label>Enter your full name:</Form.Label>
		<Form.Control type="text"
						placeholder="Enter your full name" onChange={e =>setFullName(e.target.value)} />
		</Form.Group>
		<Form.Group>
		<Form.Label>Enter your email address:</Form.Label>
		<Form.Control type="email"
						placeholder="Enter your your email address" onChange={e =>setEmail(e.target.value)}/>
		</Form.Group>
		<Form.Group>
		<Form.Label>Enter your age:</Form.Label>
		<Form.Control type="number" placeholder="Enter your age" onChange={e =>setAge(e.target.value)}/>
		</Form.Group>
            <div style={{paddingTop:'2%'}}>
		<Button style={{backgroundColor:'#FABB51',borderColor:'#FABB51'}} type="submit">
		Click here to submit form
		</Button>
				<div style={{ backgroundColor: '#FAEDC6', marginTop: '2%' }}>Full Name: {fullName}</div>
				<div style={{ backgroundColor: '#FAEDC6', marginTop: '2%' }}>Email:     {email}</div>
				<div style={{backgroundColor:'#FAEDC6',marginTop:'2%'}}>Age: 	        {age}</div>
        </div>
	</Form>
	</div>
);
}
export default Formpage
