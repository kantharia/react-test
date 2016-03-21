import React from 'react';
import Todo from '../../Todo';

import TestUtils from 'react-addons-test-utils';

import test from 'tape';

function shallowRenderTodo(todo) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Todo todo={todo} />);
  return renderer.getRenderOutput();
}

test('Todo component', (t) => {
  t.test('rendering a todo', (t) => {
    const todo1 = { id: 1, name: 'Buy Milk', done: true};
    const todo2 = { id: 1, name: 'Buy Milk', done: false};
    const result1 = shallowRenderTodo(todo1);
    const result2 = shallowRenderTodo(todo2);

    t.test('It renders the text of the todo', (t) => {
      t.plan(1);
      t.equal(result1.props.children[0].props.children, 'Buy Milk');
    });

    t.test('The todo does not have the done class', (t) => {
      t.plan(1);
      t.equal(result2.props.className.indexOf('done-todo'),-1)
    });

    t.test('The todo does have the done class', (t) => {
      t.plan(1);
      t.ok(result1.props.className.indexOf('done-todo') > -1);
    })
  });
});