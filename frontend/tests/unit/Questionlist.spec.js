import QuestionList from '../../src/components/layout/QuestionList.vue'
import { mount } from '@vue/test-utils'

describe('QuestionList', () => {
	test('emits an event with value in data payload', () => {
		const wrapper = mount(QuestionList)
		const input = wrapper.find('input[type="radio"]')
		input.setValue('introvert')
		wrapper.trigger('submit')

		const formSubmittedCalls = wrapper.emitted('formSubmitted')
		expect(formSubmittedCalls).toHaveLength(1)

		const expectedPayload = { data: 'introvert' }
		expect(wrapper.emitted('formSubmitted'))[0][0].toMatchObject(
			expectedPayload
		)
	})
})
