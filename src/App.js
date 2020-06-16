import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import Button from './Button';
import ButtonArea from './ButtonArea';
import CalcButton from './CalcButton';
import DelButton from './DelButton';

class App extends Component {
	static defaultProps = {
		buttonSign: [
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'0',
			'+',
			'-',
			'*',
			'/',
		],
		buttonRes: ['=', 'del'],
	};

	state = {
		display: '',
	};

	clickInput = (index) => {
		const clickNum = this.props.buttonSign[index];
		if (typeof this.state.display == 'string') {
			let display = this.state.display.slice();
			display += clickNum;
			this.setState({
				display: display,
			});
		}
	};

	delDisp = () => {
		if (typeof this.state.display == 'string') {
			let newDisp = this.state.display.slice(0, this.state.display.length - 1);
			this.setState({
				display: newDisp,
			});
		} else {
			this.setState({
				display: '',
			});
		}
	};

	calculation = () => {
		let display = null;
		const addIndex = this.state.display.indexOf('+');
		const subsIndex = this.state.display.indexOf('-');
		const multiIndex = this.state.display.indexOf('*');
		const divIndex = this.state.display.indexOf('/');
		if (addIndex !== -1) {
			let arr = this.state.display.split('+');
			let newArr = arr.map((val) => parseInt(val));
			newArr.reduce((a, b) => (display = a + b));
			this.setState({
				display: display,
			});
		} else if (subsIndex !== -1) {
			let arr = this.state.display.split('-');
			let newArr = arr.map((val) => parseInt(val));
			newArr.reduce((a, b) => (display = a - b));
			this.setState({
				display: display,
			});
		} else if (multiIndex !== -1) {
			let arr = this.state.display.split('*');
			let newArr = arr.map((val) => parseInt(val));
			newArr.reduce((a, b) => (display = a * b));
			this.setState({
				display: display,
			});
		} else if (divIndex !== -1) {
			let arr = this.state.display.split('/');
			let newArr = arr.map((val) => parseInt(val));
			newArr.reduce((a, b) => (display = a / b));
			this.setState({
				display: display.toFixed(2),
			});
		}
	};

	render() {
		const buttonContent = this.props.buttonSign.map((val, index) => {
			return (
				<Button
					key={index}
					content={val}
					click={() => this.clickInput(index)}
				/>
			);
		});

		return (
			<div className='App'>
				<Display display={this.state.display} />{' '}
				<ButtonArea a={buttonContent}>
					<CalcButton add={this.calculation} but={this.props.buttonRes[0]} />{' '}
					<DelButton del={this.delDisp} but={this.props.buttonRes[1]} />{' '}
				</ButtonArea>{' '}
			</div>
		);
	}
}

export default App;
