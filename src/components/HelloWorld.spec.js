import { mount } from "cypress/vue";
import HelloWorld from "@/components/HelloWorld.vue";

describe('Hello Word', () => {
	beforeEach(() => {
		// Visit the Vue app URL where your component will be mounted
		// cy.visit('/');
	});

	it('displays the component with mock props', () => {
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
		mount(HelloWorld, {
			props: {
				msg: "Mock Message"
			},
			...mountOptions, // Merge global options
		});
/*

		// Assert that the component with mock data is displayed correctly
		cy.get('h1').should('contain', 'Mock Title');
		cy.get('p').should('contain', 'Mock Message');

		// Assert that the b-table component is displayed and contains data
		cy.get('table').should('be.visible');
		cy.get('tbody tr').should('have.length', 3); // Assuming 3 mock items
		cy.get('tbody tr:first-child td:first-child').should('contain', 'Mock Item 1');
		cy.get('tbody tr:last-child td:last-child').should('contain', '30');
*/
	});
});
