import { shallowMount } from '@vue/test-utils'
import Options from './Options.vue'


describe('Options.vue', () => {
	it('should display 5 element when it is mounted', () => {
		const wrapper = shallowMount(Options)
		const expected = 5;

		// räkna antalet element i wrapper
		const actual = wrapper.findAll('.option').length

		expect(actual).toBe(expected)
	})

	it('should have 0 elements selected when it is mounted', () => {
		const wrapper = shallowMount(Options)
		const expected = 0

		// räkna antalet valda element
		const actual = wrapper.findAll('.option.selected').length

		expect(actual).toBe(expected)
	})


	// it should, when clicked and no elements are selected, select the element
	// it should, when clicked and one other element is selected, select the element
	// it should remove a selection when a selected element is clicked
})

// CSS repetition:
// .x, .y   -> alla element som har antingen x eller y
// .x .y    -> alla y som är barn (descendants) till x
// .x > .y  -> alla y som är barn (direkt) till x
// .x.y     -> alla element som har både x och y
// .x + .y  -> alla y som kommer direkt efter x

// när komponenten renderas första gången ska den visa fem element
// när komponenten renderas första gången ska inga element vara markerade
// när man klickar på ett element och inga redan är markerade ska det bli markerat
// när man klickar på ett element och ett annat är markerat ska det bli markerat
// när man klickar på ett element som är markerat ska man ta bort markeringen
// (man bör kunna markera flera element)


/* 5a Skriv testfall för, och implementera, en komponent Options som ska låta användaren välja ett av flera alternativ. Börja med två alternativ. Exempel HTML:
<div>
    <div class="option"> First </div>
	<div class="option"> Second </div>
	<div class="option selected"> Third </div>
	<div class="option"> Fourth </div>
	<div class="option"> Fifth </div>
</div>
*/
