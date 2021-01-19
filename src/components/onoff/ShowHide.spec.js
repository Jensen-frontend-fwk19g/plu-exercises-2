import { shallowMount } from '@vue/test-utils'
import ShowHide from './ShowHide.vue'

describe('ShowHide.vue', () => {

	it('should show the button with a specific text when mounted', () => {
		const expectedText = "Visa/dölj alternativ";

		const wrapper = shallowMount(ShowHide);
		const button = wrapper.find('button')
		const buttonExists = button.exists();
		const buttonHtmlElement = button.element;
		const buttonIsVisible = buttonHtmlElement.style.display !== 'none';
		const actualText = button.text();

		expect(buttonExists).toBe(true);
		expect(buttonIsVisible).toBe(true);
		expect(actualText).toBe(expectedText);
	})

	it('should show the other element when mounted', () => {
		const wrapper = shallowMount(ShowHide);
		const content = wrapper.find('.content');

		expect( content.exists() ).toBe(true);
		expect( content.element.style.display ).not.toBe('none');
	})

	it('should hide the element when button is clicked', async () => {
		const wrapper = shallowMount(ShowHide);
		const button = wrapper.find('button');

		await button.trigger('click');

		const content = wrapper.find('.content');
		expect( content.exists() ).toBe(true);
		expect( content.element.style.display ).toBe('none');
	})


	// it should show the element when button is clicked and it is invisible
})

/* 1a Skapa en komponent med ett button-element och ett annat synligt element. Button ska ha texten: "Visa/dölj alternativ". När man klickar på knappen ska elementet växla mellan att vara synligt och osynligt.
*/
