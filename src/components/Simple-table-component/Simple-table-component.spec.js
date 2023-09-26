import SimpleTableComponent from "./Simple-table-component.vue";
import { mount } from "cypress/vue";

describe('Simple Table Component', () => {
	beforeEach(() => {
		// Visit the Vue app URL where your component will be mounted
		// cy.visit('/');
	});

	it('Loads Simple Report table', () => {
		// Define global configuration options for cy.mount
		const mountOptions = {
			global: {
				plugins: {
					// You can add global Vue plugins here if needed
				},
				components: {
					// Register any global components here if needed
				},
			},
		};

		// Mount the Vue component with mock data and global options
		mount(SimpleTableComponent, {
			data() {
				return {
					title: 'Mock Title',
					message: 'Mock Message',
					tableData: [
						{ id: 1, name: 'Mock Item 1', price: 10 },
						{ id: 2, name: 'Mock Item 2', price: 20 },
						{ id: 3, name: 'Mock Item 3', price: 30 },
					],
				};
			},
			...mountOptions, // Merge global options
		});

		// Assert that the component with mock data is displayed correctly
		cy.get('h1').should('contain', 'Mock Title');
		cy.get('p').should('contain', 'Mock Message');

		["ValY", "Val_B"].forEach((testCase) => {
			cy.get("#simple-client-reports").should("contain.text", testCase);
		});
	});
});
