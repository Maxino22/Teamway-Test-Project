const questions = [
	{
		question: 'To prepare for a night out...',

		int: 'Prepare? My friends have to drag me out most nights.',
		extr: 'I buy the latest outfit, tell my friends, then dance the night away.',
		ambi: 'Call a few of my closest friends to see if they will be there..',
	},
	{
		question: ' Being around people makes me feel...?',

		int: 'A bit exhausted. Being around others can be draining.',
		extr: " Like I'm alive!",
		ambi: "Inspired. I feed off of others' energy but there are times when I'd rather be alone.",
	},
	{
		question:
			' On the topic of public speaking...eing around people makes me feel...?',

		int: "I get super nervous. I'd rather write 5 research papers first.",
		extr: ' I enjoy it. All eyes on me!',
		ambi: "It's not my strongest suit but I'll do it if I have to.",
	},
	{
		question: ' I enjoy meeting new people.',

		int: "It's very hard to meet new people.",
		extr: ' Yes, I can make a friend at the super market.',
		ambi: 'Sometimes, but I have to be in the right mood.',
	},
	{
		question: 'How to do you prefer to communicate?',

		int: "Can't you just text or email me? Who calls people these days?",
		extr: 'In person. Tell me to my face.',
		ambi: "Call me first then we'll meet up if you need to elaborate.",
	},
]

for (const question of questions) {
	fetch('https://vue-demo-92e6c-default-rtdb.firebaseio.com/questions.json', {
		method: 'post',
		body: JSON.stringify(question),
	}).then((response) => {
		if (response.ok) {
			console.log('Data is sent')
		} else {
			console.log(response.status)
		}
	})
}
