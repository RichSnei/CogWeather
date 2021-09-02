// import logo from './logo.svg';
import './App.css';
import TopInput from './TopInput'
/*
<!--
•	Build form control with the following. Label : “Enter City”, Input form field, Submit Button. Button should be custom built and re-usable.
•	Build weather details component. It should show the current Date, City Name, Current time & temperature details. “Begin with Static Data and later bind with JSON dynamic data”
•	Retrieve weather data from JSON service (API). Use Redux Store for the Data management. Parse the content to respective UI components.
•	Weather Details should be updated based on the City name entered in the form control.
•	Build “5 Day Weather” Button by re-using the button component which was created earlier.
•	Implement new page which shows 5 day weather Details. Create an event to “5 Day Weather” button to take to 5 Day weather details page.
•	Enhance Weather details UI component. Component should be divided into 3 small re-usable components. Date Display, City & current time, Temperature. Show the Visual screen to the candidate 
•	5 Day Weather details page should contain a data grid which shows the 5 day weather info. Temperature component should be reused and rendered in each cell. Show the visual design to the candidate.
-->
*/
export	const data = {
	"States": {
		"IL": {
			"currentdate": "04/05/2019",
			"time": "02:59 PM",
			"cities": [{
					"name": "Chicago",
					"forecast": [{
							"Date": "04/05/2019",
							"Time": "2.59pm",
							"temprature": 47,
							"feels": 40
						},
						{
							"Date": "04/06/2019",
							"Time": "2.59pm",
							"temprature": 57,
							"feels": 55
						},
						{
							"Date": "04/07/2019",
							"Time": "2.59pm",
							"temprature": 45,
							"feels": 44
						},
						{
							"Date": "04/08/2019",
							"Time": "2.59pm",
							"temprature": 61,
							"feels": 50
						},
						{
							"Date": "04/09/2019",
							"Time": "2.59pm",
							"temprature": 68,
							"feels": 65
						}
					]
				},
				{
					"name": "Naperville",
					"forecast": [{
							"Date": "04/05/2019",
							"Time": "2.59pm",
							"temprature": 47,
							"feels": 40
						},
						{
							"Date": "04/06/2019",
							"Time": "2.59pm",
							"temprature": 59,
							"feels": 54
						},
						{
							"Date": "04/07/2019",
							"Time": "2.59pm",
							"temprature": 47,
							"feels": 46
						},
						{
							"Date": "04/08/2019",
							"Time": "2.59pm",
							"temprature": 63,
							"feels": 62
						},
						{
							"Date": "04/09/2019",
							"Time": "2.59pm",
							"temprature": 70,
							"feels": 68
						}
					]
				}
			]
		},
		"NY": {
			"currentdate": "04/05/2019",
			"time": "02:59 PM",
			"cities": [{
					"name": "New York",
					"forecast": [{
							"Date": "04/05/2019",
							"Time": "2.59pm",
							"temprature": 57,
							"feels": 50
						},
						{
							"Date": "04/06/2019",
							"Time": "2.59pm",
							"temprature": 67,
							"feels": 65
						},
						{
							"Date": "04/07/2019",
							"Time": "2.59pm",
							"temprature": 55,
							"feels": 54
						},
						{
							"Date": "04/08/2019",
							"Time": "2.59pm",
							"temprature": 71,
							"feels": 60
						},
						{
							"Date": "04/09/2019",
							"Time": "2.59pm",
							"temprature": 78,
							"feels": 75
						}
					]
				},
				{
					"name": "Buffalo",
					"forecast": [{
							"Date": "04/05/2019",
							"Time": "2.59pm",
							"temprature": 58,
							"feels": 40
						},
						{
							"Date": "04/06/2019",
							"Time": "2.59pm",
							"temprature": 68,
							"feels": 64
						},
						{
							"Date": "04/07/2019",
							"Time": "2.59pm",
							"temprature": 57,
							"feels": 46
						},
						{
							"Date": "04/08/2019",
							"Time": "2.59pm",
							"temprature": 63,
							"feels": 62
						},
						{
							"Date": "04/09/2019",
							"Time": "2.59pm",
							"temprature": 40,
							"feels": 48
						}
					]
				}
			]
		},
		"CA": {
			"currentdate": "04/05/2019",
			"time": "02:59 PM",
			"cities": [{
					"name": "Los Angeles",
					"forecast": [{
							"Date": "04/05/2019",
							"Time": "2.59pm",
							"temprature": 67,
							"feels": 50
						},
						{
							"Date": "04/06/2019",
							"Time": "2.59pm",
							"temprature": 77,
							"feels": 65
						},
						{
							"Date": "04/07/2019",
							"Time": "2.59pm",
							"temprature": 65,
							"feels": 54
						},
						{
							"Date": "04/08/2019",
							"Time": "2.59pm",
							"temprature": 71,
							"feels": 60
						},
						{
							"Date": "04/09/2019",
							"Time": "2.59pm",
							"temprature": 78,
							"feels": 75
						}
					]
				},
				{
					"name": "San francisco",
					"forecast": [{
							"Date": "04/05/2019",
							"Time": "2.59pm",
							"temprature": 68,
							"feels": 50
						},
						{
							"Date": "04/06/2019",
							"Time": "2.59pm",
							"temprature": 78,
							"feels": 64
						},
						{
							"Date": "04/07/2019",
							"Time": "2.59pm",
							"temprature": 67,
							"feels": 66
						},
						{
							"Date": "04/08/2019",
							"Time": "2.59pm",
							"temprature": 73,
							"feels": 72
						},
						{
							"Date": "04/09/2019",
							"Time": "2.59pm",
							"temprature": 70,
							"feels": 68
						}
					]
				}
			]
		}
	}
}

function App() {
  return (
    <div className="App">
      <TopInput />
        </div>

  );
}

export default App;
