import Expo, { Permissions, Notifications } from 'expo';
import { 
	setNotificationId, 
	checkNotification,
	removeNotification
 } from '../api';
 import {AsyncStorage } from 'react-native';

const localNotification  = {
	title: 'Udacicards!',
	body: '🤓 do not forget study today!',
	ios: {
		sound: true
	},
	android: {
		sound: true,
		priority: 'high',
		sticky: false,
		vibrate: true
	}
};

function schedulingOptions() {
	const time = new Date();
	time.setDate(time.getDate() + 1);
	time.setHours(8);
	time.setMinutes(0);
	time.setSeconds(0);
	return {
		time: time,
		repeat: 'day'
	};
}

function scheduleNotification() {
	Notifications.scheduleLocalNotificationAsync( localNotification, schedulingOptions())
		.then( localNotificationId => {
			setNotificationId(localNotificationId);
		});
}

export function setNotifications() {
	checkNotification()
		.then( result => {
			if(!result) {
				Permissions.askAsync(Permissions.NOTIFICATIONS)
					.then(({ status }) => {
						if (status === 'granted') {
							scheduleNotification();
						} else {
							alert('🤗 Plese turn on the notifications');
						}
					});
			}
	});
}

export function clearNotificationForToday() {
	removeNotification()
		.then(() => {
			Notifications.cancelAllScheduledNotificationsAsync();
			scheduleNotification();
		});
}