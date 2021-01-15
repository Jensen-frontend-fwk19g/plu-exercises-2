import { shallowMount } from '@vue/test-utils'
import Counter from './Counter.vue'


describe('Counter.vue', () => {
    it('should display "1" when mounted', () => {
        const expected = '1'

        const componentWrapper = shallowMount(Counter)
        const spanWrapper = componentWrapper.find('.result')
        const actual = spanWrapper.text()

        expect(actual).toBe(expected)
    })

    it('should increase displayed value by 1 when increase button clicked', async () => {
        const expected = (1 + 1) + ''  // '2'

        const wrapper = shallowMount(Counter)
        const increaseButton = wrapper.find('button')
        await increaseButton.trigger('click')

        const span = wrapper.find('.result')
        const actual = span.text()
        expect(actual).toBe(expected)
    })
    
    // it should decrease displayed value by 1 when decrease button clicked
    // TODO: kanske testa att klicka flera gånger på knapparna
})

// 4a Skriv test för, och implementera, en komponent som har en button och visar en siffra. När man klickar på knappen ska värdet som visas öka med 1.
// Tips: använd trigger för att skapa ett klick.
// Exempel HTML:
// <div>
//     <button> Öka </button>
//     <span class="result"> 1 </span>
// </div>
//
// 4b Lägg till en knapp med texten "Minska" som minskar värdet med 1 när man klickar. Du får lov att ändra i template om det behövs.
