import TableComponent from "./Table-component.vue";
import { mount } from "cypress/vue";

describe('Table Component', () => {
	beforeEach(() => {
		// Visit the Vue app URL where your component will be mounted
		// cy.visit('/');
	});

	it('displays the component with mock data', () => {
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
		mount(TableComponent, {
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

		// Assert that the b-table component is displayed and contains data
		cy.get('table').should('be.visible');
		cy.get('tbody tr').should('have.length', 3); // Assuming 3 mock items
		cy.get('tbody tr:first-child td:first-child').should('contain', '1');
		cy.get('tbody tr:last-child td:last-child').should('contain', '30');

		["Item 1", "Item 2", "Item 3"].forEach((testCase) => {
			cy.get("#client-reports").should("contain.text", testCase);
		});
	});
});
