// Write your tests here
import React from 'react';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import AppClass from './AppClass';
import AppFunctional from './AppFunctional';

test('The appClass renders', () => {
render(<AppClass />)
})

test('The appFunctional renders', () => {
  render(<AppFunctional />)
})

test('The Email Submission works', () => {
  render(<AppClass />)


  const submitBtn = screen.findByTestId('submit');
  const leftBtn = screen.findByTestId('left');
  const emailInput = screen.findByTestId('email');
  const winsMessage = screen.findByText('kalebglundquist')

  userEvent.click(leftBtn);
  userEvent.type(emailInput, 'kalebglundquist@gmail.com');
  userEvent.click(submitBtn);

  expect(winsMessage).toBeInTheDocument;
})

test('You can click the up button', async () => {
  render(<AppFunctional />)

  const upBtn = screen.queryByTestId('up');
  const coordinates = screen.queryByText('(2, 1)');

  userEvent.click(upBtn);

  expect(coordinates).toBeInTheDocument;
})

test('Times moved is correct', async () => {
  render(<AppClass />)

  const upBtn = screen.queryByTestId('up');
  const leftBtn = screen.queryByTestId('left');
  const rightBtn = screen.queryByTestId('right');

  const timesMoved = screen.queryByText('You moved 3 times');

  userEvent.click(upBtn);
  userEvent.click(leftBtn);
  userEvent.click(rightBtn);

  expect(timesMoved).toBeInTheDocument;
})