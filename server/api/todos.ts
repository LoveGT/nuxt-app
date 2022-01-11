const todos = [
  { id: 1, title: "nuxt3", completed: true, foo: 'bar' },
  { id: 2, title: "vue3", completed: true, foo: 'bar2' }
];

export default () => {
  return JSON.parse(JSON.stringify(todos))
} 