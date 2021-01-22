import { shallowMount } from '@vue/test-utils'
import Chuck from './Chuck.vue'


describe('Chuck.vue', () => {
	it('should display the button and the correct description when mounted', () => {
		const wrapper = shallowMount(Chuck);
		const expectedDescription = 'Click the button to get a new joke';

		const buttonExists = wrapper.find('button').exists();
		const paragraphExists = wrapper.find('p').exists();
		const actualDescription = wrapper.find('p').text();

		expect(buttonExists).toBeTruthy();
		expect(paragraphExists).toBeTruthy();
		// const descriptionContainsExpectedText =
		// 	actualDescription.includes(expectedDescription);
		// expect(descriptionContainsExpectedText).toBeTruthy();
		expect(actualDescription).toMatch(expectedDescription);
	})
	
	// it should send a request to the correct url when button clicked
	// it should display data from API correctly
})

// https://api.chucknorris.io/jokes/random

//
// <section>
// 	<button> Be entertained </button>
// 	<p>
// 		Click the button to get a new joke!
// 	</p>
// </section>
