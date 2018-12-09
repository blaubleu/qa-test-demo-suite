# <h4>Automated testing using Cypress IO</h4>
<h5>Demo for DDDC</h5>
The complete suite can be found in this <a href="https://github.com/moanableu/qa-test/tree/master/cypress/integration/demo-test">folder</a><p>
<strong>About this suite</strong>
Developed using Cypress IO
<br>To run the suite install Cypress as per this <a href="https://docs.cypress.io/guides/getting-started/installing-cypress.html#Installing">instructions</a>
<br>Make sure that package.json contains the following script<br>
	```JavaScript
	"cypress:open": "cypress open"
	```
<br>Open Cypress with:<br>
	```JavaScript
	npm run cypress:open
	```
<br>The suite has been organized by events logic, you can run each file in the order they have been provided
<p><strong>Notes:</strong><br>The scope of this project is basic, mostly checking functionality.
<br>The suite does not go into form submissions nor logging-in actions
<br>Efforts to extend wait times where made, however on occasion time-outs fail these tests