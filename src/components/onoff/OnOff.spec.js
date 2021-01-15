import { shallowMount } from '@vue/test-utils'
import OnOff from './OnOff.vue'

describe('OnOff.vue', () => {
	it('should display "On" when the component is mounted', () => {
		const expected = 'On'

		const wrapper = shallowMount(OnOff)
		const actual = wrapper.text()

		expect(actual).toBe(expected)
		// toMatch fungerar också
	})

	it('should display "Off" when it is clicked and text was "On"', async () => {
		const expected = 'Off'

		const wrapper = shallowMount(OnOff)
		await wrapper.trigger('click')

		const actual = wrapper.text()
		expect(actual).toBe(expected)
	})

	it('should display "On" when it is clicked and text was "Off"', async () => {
		const expected = 'On'

		const wrapper = shallowMount(OnOff)
		await wrapper.trigger('click')  // från on till off
		await wrapper.trigger('click')  // från off till on

		const actual = wrapper.text()
		expect(actual).toBe(expected)
	})
})
