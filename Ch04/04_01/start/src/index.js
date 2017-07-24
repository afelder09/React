import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'

window.React = React

render(
	<SkiDayList days={
		[
			{
				resort: 'Squaw Valley',
				date: new Date('1/2/2017'),
				powder: true,
				backcountry: false
			},
			{
				resort: 'Heavenly',
				date: new Date('2/2/2017'),
				powder: true,
				backcountry: true
			},
			{
				resort: 'Squaw Valley',
				date: new Date('1/2/2017'),
				powder: true,
				backcountry: false
			}
		]
	}/>,
	document.getElementById('react-container')
)
