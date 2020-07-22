import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial State
const initState = {
	userList: [
		{
			id: 'W012A3CDE',
			real_name: 'Egon Spengler',
			tz: 'America/Los_Angeles',
			activity_periods: [
				{
					start_time: 'July 20 2020 13:33',
					end_time: 'July 20 2020 13:54'
				},
				{
					start_time: 'July 21 2020 11:11',
					end_time: 'July 21 2020 14:00'
				},
				{
					start_time: 'July 22 2020 17:33',
					end_time: 'July 22 2020 20:02'
				},
				{
					start_time: 'July 23 2020 13:33',
					end_time: 'July 23 2020 13:54'
				}
				// {
				// 	start_time: 'July 24 2020 11:11',
				// 	end_time: 'July 24 2020 14:00'
				// },
				// {
				// 	start_time: 'July 25 2020 17:33',
				// 	end_time: 'July 25 2020 20:02'
				// }
			]
		},
		{
			id: 'W07QCRPA4',
			real_name: 'Glinda Southgood',
			tz: 'Asia/Kolkata',
			activity_periods: [
				{
					start_time: 'July 15 2020 13:33',
					end_time: 'July 15 2020 13:54'
				},
				{
					start_time: 'July 16 2020 11:11',
					end_time: 'July 16 2020 14:00'
				},
				{
					start_time: 'July 19 2020 17:33',
					end_time: 'July 19 2020 20:02'
				},
				{
					start_time: 'July 23 2020 13:33',
					end_time: 'July 23 2020 13:54'
				}
				// {
				// 	start_time: 'July 24 2020 11:11',
				// 	end_time: 'July 24 2020 14:00'
				// },
				// {
				// 	start_time: 'July 25 2020 17:33',
				// 	end_time: 'July 25 2020 20:02'
				// }
			]
		},
		{
			id: 'W07QCRPB5',
			real_name: 'Michelle George',
			tz: 'Europe/United_Kingdom',
			activity_periods: [
				{
					start_time: 'July 19 2020 13:33',
					end_time: 'July 19 2020 13:54'
				},
				{
					start_time: 'July 22 2020 11:11',
					end_time: 'July 22 2020 14:00'
				},
				{
					start_time: 'July 23 2020 17:33',
					end_time: 'July 23 2020 20:02'
				}
			]
		},
		{
			id: 'W07QCRPC6',
			real_name: 'Adriana Silva',
			tz: 'Europe/Spain',
			activity_periods: [
				{
					start_time: 'July 19 2020 13:33',
					end_time: 'July 19 2020 13:54'
				},
				{
					start_time: 'July 22 2020 11:11',
					end_time: 'July 22 2020 14:00'
				},
				{
					start_time: 'July 23 2020 17:33',
					end_time: 'July 23 2020 20:02'
				}
			]
		},
		{
			id: 'W07QCRPD7',
			real_name: 'Olivia Taylor',
			tz: 'Oceania/Australia',
			activity_periods: [
				{
					start_time: 'July 18 2020 13:33',
					end_time: 'July 18 2020 1:54'
				},
				{
					start_time: 'July 19 2020 11:11',
					end_time: 'July 19 2020 14:00'
				},
				{
					start_time: 'July 20 2020 17:33',
					end_time: 'July 20 2020 20:02'
				}
			]
		},
		{
			id: 'W07QCRPE8',
			real_name: 'Jonas Kahnwald',
			tz: 'Europe/Germany',
			activity_periods: [
				{
					start_time: 'July 20 2020 13:33',
					end_time: 'July 20 2020 13:54'
				},
				{
					start_time: 'July 22 2020 11:11',
					end_time: 'July 22 2020 14:00'
				},
				{
					start_time: 'July 23 2020 17:33',
					end_time: 'July 23 2020 20:02'
				}
			]
		},
		{
			id: 'W012A3CLP',
			real_name: 'Ragnar Lothbrok',
			tz: 'Europe/Norway',
			activity_periods: [
				{
					start_time: 'July 20 2020 13:33',
					end_time: 'July 20 2020 13:54'
				},
				{
					start_time: 'July 21 2020 11:11',
					end_time: 'July 21 2020 14:00'
				},
				{
					start_time: 'July 22 2020 17:33',
					end_time: 'July 22 2020 20:02'
				},
				{
					start_time: 'July 23 2020 13:33',
					end_time: 'July 23 2020 13:54'
				}
				// {
				// 	start_time: 'July 24 2020 11:11',
				// 	end_time: 'July 24 2020 14:00'
				// },
				// {
				// 	start_time: 'July 25 2020 17:33',
				// 	end_time: 'July 25 2020 20:02'
				// }
			]
		},
		{
			id: 'W07QCRPKO',
			real_name: 'Hannah Baker',
			tz: 'America/United States',
			activity_periods: [
				{
					start_time: 'July 15 2020 13:33',
					end_time: 'July 15 2020 13:54'
				},
				{
					start_time: 'July 16 2020 11:11',
					end_time: 'July 16 2020 14:00'
				},
				{
					start_time: 'July 19 2020 17:33',
					end_time: 'July 19 2020 20:02'
				},
				{
					start_time: 'July 23 2020 13:33',
					end_time: 'July 23 2020 13:54'
				}
				// {
				// 	start_time: 'July 24 2020 11:11',
				// 	end_time: 'July 24 2020 14:00'
				// },
				// {
				// 	start_time: 'July 25 2020 17:33',
				// 	end_time: 'July 25 2020 20:02'
				// }
			]
		},
		{
			id: 'W07QCRPJI',
			real_name: 'Jane Hopper',
			tz: 'America/United States',
			activity_periods: [
				{
					start_time: 'July 19 2020 13:33',
					end_time: 'July 19 2020 13:54'
				},
				{
					start_time: 'July 22 2020 11:11',
					end_time: 'July 22 2020 14:00'
				},
				{
					start_time: 'July 23 2020 17:33',
					end_time: 'July 23 2020 20:02'
				}
			]
		},
		{
			id: 'W07QCRPHU',
			real_name: 'Monica Hall',
			tz: 'America/United States',
			activity_periods: [
				{
					start_time: 'July 19 2020 13:33',
					end_time: 'July 19 2020 13:54'
				},
				{
					start_time: 'July 22 2020 11:11',
					end_time: 'July 22 2020 14:00'
				},
				{
					start_time: 'July 23 2020 17:33',
					end_time: 'July 23 2020 20:02'
				}
			]
		},
		{
			id: 'W07QCRPGY',
			real_name: 'Jhon Snow',
			tz: 'Oceania/Australia',
			activity_periods: [
				{
					start_time: 'July 18 2020 13:33',
					end_time: 'July 18 2020 1:54'
				},
				{
					start_time: 'July 19 2020 11:11',
					end_time: 'July 19 2020 14:00'
				},
				{
					start_time: 'July 20 2020 17:33',
					end_time: 'July 20 2020 20:02'
				}
			]
		},
		{
			id: 'W07QCRPFT',
			real_name: 'Pablo Escobar',
			tz: 'America/Columbia',
			activity_periods: [
				{
					start_time: 'July 20 2020 13:33',
					end_time: 'July 20 2020 13:54'
				},
				{
					start_time: 'July 22 2020 11:11',
					end_time: 'July 22 2020 14:00'
				},
				{
					start_time: 'July 23 2020 17:33',
					end_time: 'July 23 2020 20:02'
				}
			]
		},
		{
			id: 'W07QCRPDR',
			real_name: 'Tommy Shelby',
			tz: 'Europe/United Kingdom',
			activity_periods: [
				{
					start_time: 'July 20 2020 13:33',
					end_time: 'July 20 2020 13:54'
				},
				{
					start_time: 'July 22 2020 11:11',
					end_time: 'July 22 2020 14:00'
				},
				{
					start_time: 'July 23 2020 17:33',
					end_time: 'July 23 2020 20:02'
				}
			]
		},
		{
			id: 'W07QCRPSE',
			real_name: 'Srikant Tiwari',
			tz: 'Asia/India',
			activity_periods: [
				{
					start_time: 'July 20 2020 13:33',
					end_time: 'July 20 2020 13:54'
				},
				{
					start_time: 'July 22 2020 11:11',
					end_time: 'July 22 2020 14:00'
				},
				{
					start_time: 'July 23 2020 17:33',
					end_time: 'July 23 2020 20:02'
				}
			]
		},
		{
			id: 'W07QCRPAW',
			real_name: 'Iris West',
			tz: 'America/United States',
			activity_periods: [
				{
					start_time: 'July 20 2020 13:33',
					end_time: 'July 20 2020 13:54'
				},
				{
					start_time: 'July 22 2020 11:11',
					end_time: 'July 22 2020 14:00'
				},
				{
					start_time: 'July 23 2020 17:33',
					end_time: 'July 23 2020 20:02'
				}
			]
		}
	]
};

//Create Gobal Context
export const GlobalContext = createContext(initState);

//Provider Component
export const GlobalProvider = ({children}) => {
	const [state, dispatch] = useReducer(AppReducer, initState);

	return <GlobalContext.Provider value={{userList: state.userList}}>{children}</GlobalContext.Provider>;
};
