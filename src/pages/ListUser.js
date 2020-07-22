import React, {useContext, useState} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Modal, Grid, Icon, Input} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const ListUser = () => {
	const {userList} = useContext(GlobalContext);

	const [userData, setUserData] = useState(userList);
	const [isModal, setModal] = useState(false);
	const [modalData, setModalData] = useState([]);
	const [startDate, setStartDate] = useState(new Date());
	const [modalId, setModalId] = useState('');
	const [modalName, setModalName] = useState('');
	const [text, setText] = useState('');

	const handleClick = data => {
		let activePeriod = [];

		userData.map(user => {
			if (data.id === user.id) {
				user.activity_periods.map(item => {
					if (moment(item.start_time).format('DD/MM/YYYY') === moment(startDate).format('DD/MM/YYYY')) {
						activePeriod.push(item);
					}
				});
			}
		});
		setModalId(data.id);
		setModalName(data.real_name);
		setModalData(activePeriod);
		setModal(true);
	};

	const handleDateChange = date => {
		let activePeriod = [];

		setStartDate(date);
		userData.map(user => {
			if (modalId === user.id) {
				user.activity_periods.map(item => {
					console.log('jahgdjhad', moment(date).format('DD/MM/YYYY'));
					if (moment(item.start_time).format('DD/MM/YYYY') === moment(date).format('DD/MM/YYYY')) {
						activePeriod.push(item);
					}
				});
			}
		});
		setModalData(activePeriod);
	};

	const handleChangeText = e => {
		setText(e.target.value);
		const searchText = e.target.value;
		const prevModalData = userList.filter(item =>
			Object.keys(item.real_name).some(k => item.real_name.toLowerCase().includes(searchText.toLowerCase()))
		);

		setUserData(prevModalData);

		// console.log('ajhgdjhad', prevModalData);
	};

	return (
		<div>
			<Grid style={{margin: '10px 0px 20px 0px'}} container>
				<Input
					style={{width: '100%'}}
					type="text"
					placeholder="Search..."
					value={text}
					onChange={e => {
						handleChangeText(e);
					}}
					autofocus
				/>
			</Grid>
			<Grid stackable container>
				{userData.map(user => (
					<Grid.Column
						key={user.id}
						onClick={() => handleClick(user)}
						width={5}
						style={{border: '1px solid #fff', margin: '10px', cursor: 'pointer'}}
					>
						<h1>{user.real_name}</h1>
						<h3>{user.tz}</h3>
					</Grid.Column>
				))}
			</Grid>

			<Modal style={{color: '#13331c'}} size="small" open={isModal}>
				<Grid container style={{marginTop: 10, marginBottom: 10}}>
					<Grid.Column width={14}>
						<h1 style={{width: '90%'}}>{modalName}'s Activities</h1>
					</Grid.Column>
					<Grid.Column width={2}>
						<Icon
							onClick={() => {
								setStartDate(new Date());
								setModalData([]);
								setModalId('');
								setModalName('');
								setModal(false);
							}}
							style={{width: '10%', fontSize: '25px', marginTop: '7px', cursor: 'pointer'}}
							name="close"
						/>
					</Grid.Column>
				</Grid>
				<hr />
				<Grid container style={{textAlign: 'center', marginTop: 20, marginBottom: 20}}>
					<Grid.Column style={{textAlign: 'right', marginTop: 5}} width={7}>
						<h3>Select Date:</h3>
					</Grid.Column>
					<Grid.Column className="ui form" style={{textAlign: 'left'}} width={9}>
						<DatePicker
							dateFormat="dd/MM/yyyy"
							selected={startDate}
							onChange={date => handleDateChange(date)}
						/>
					</Grid.Column>
					{modalData.length !== 0 ? (
						<Grid.Column width={16}>
							<Grid container>
								<Grid.Column style={{border: '1px solid #13331c'}} width={8}>
									<h2>Start Date</h2>
								</Grid.Column>
								<Grid.Column style={{border: '1px solid #13331c'}} width={8}>
									<h2>End Date</h2>
								</Grid.Column>
							</Grid>
						</Grid.Column>
					) : (
						<Grid.Column width={16}>
							<h2>No Active Sessions</h2>
						</Grid.Column>
					)}
					{modalData.length !== 0 &&
						modalData.map((item, index) => (
							<Grid.Column width={16}>
								<Grid container>
									<Grid.Column style={{border: '1px solid #13331c'}} width={8}>
										<h3>{item.start_time}</h3>
									</Grid.Column>
									<Grid.Column style={{border: '1px solid #13331c'}} width={8}>
										<h3>{item.end_time}</h3>
									</Grid.Column>
								</Grid>
							</Grid.Column>
						))}
				</Grid>
			</Modal>
		</div>
	);
};

export default ListUser;
