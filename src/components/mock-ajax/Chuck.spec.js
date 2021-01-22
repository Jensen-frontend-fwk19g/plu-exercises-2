import { shallowMount } from '@vue/test-utils'
import { enableFetchMocks } from  'jest-fetch-mock'
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
		// includes: finns sträng i sträng?
		// expect(descriptionContainsExpectedText).toBeTruthy();
		expect(actualDescription).toMatch(expectedDescription);
	})

	it('should send a request to the correct url when button clicked and save the results', async () => {
		const wrapper = shallowMount(Chuck);
		const button = wrapper.find('button');
		enableFetchMocks();
		const fakeData = {
			icon_url: 'https://example',
			value: 'Example joke.'
		};
		fetch.mockResponseOnce(JSON.stringify(fakeData));
		const expectedUrl = 'https://api.chucknorris.io/jokes/random';

		await button.trigger('click');
		const numberOfCalls = fetch.mock.calls.length;
		const actualUrl = fetch.mock.calls[0][0];

		await wrapper.vm.$nextTick();  // vänta på att Vue ska uppdatera jokeText
		await wrapper.vm.$nextTick();
		const actualJokeText = wrapper.vm.jokeText;
		// console.log('test jokeText 5', wrapper.vm.jokeText);
		// console.log('Detta är calls:', fetch.mock.calls);

		expect(numberOfCalls).toBe(1);
		expect(actualUrl).toBe(expectedUrl);
		expect(actualJokeText).toBe(fakeData.value);
	})



	it('should display data from API correctly', async () => {
		const wrapper = shallowMount(Chuck);
		const fakeData = {
			icon_url: 'https://example',
			value: 'Example joke.'
		};

		await wrapper.setData({
			jokeText: fakeData.value
		});

		const jokeText = wrapper.find('p').text();
		expect(jokeText).toBe(fakeData.value);
	})
})

// https://api.chucknorris.io/jokes/random

//
// <section>
// 	<button> Be entertained </button>
// 	<p>
// 		Click the button to get a new joke!
// 	</p>
// </section>
