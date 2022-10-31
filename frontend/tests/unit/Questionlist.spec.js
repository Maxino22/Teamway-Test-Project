import QuestionList from '../../src/components/layout/QuestionList.vue'
import { mount, shallowMount } from '@vue/test-utils'

describe('QuestionList', () => {
	it('question radios render on  mount', () => {
		const wrapper = mount(QuestionList, {
			props: {
				int: 'some introvert value',
				extr: 'some extrovert value',
				ambi: 'some ambivert value',
			},
		})

		expect(wrapper.find('.radio').exists()).toBe(true)

		console.log(wrapper.html())
	})

	it('Error message shows when no radio selected', async () => {
		const wrapper = shallowMount(QuestionList)
		await wrapper.setData({
			error: true,
		})
		expect(wrapper.find('p').exists()).toBe(true)
		console.log(wrapper.html())
	})
	it('Error message hidden when radio selected', async () => {
		const wrapper = shallowMount(QuestionList)
		await wrapper.setData({
			error: false,
		})
		expect(wrapper.find('p').exists()).toBe(false)
		console.log(wrapper.html())
	})
})
