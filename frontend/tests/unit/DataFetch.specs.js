import QuestionList from '../../src/components/layout/QuestionList.vue'
import { mount } from '@vue/test-utils'
import setQuestions from '../../src/store/setQuestions'

vitest.mock('../../src/store/setQuestions')

describe('QuestionList', () => {
	it('Calls firebase and check Question and choices', async () => {
		setQuestions.mockResolved
		const wrapper = mount(QuestionList)
	})
})
