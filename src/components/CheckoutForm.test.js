import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render (<CheckoutForm />)
});

test("shows success message on submit with form details", () => {
  render (<CheckoutForm />)

  const firstNameInput = screen.getByLabelText(/First Name:/i);
  const lastNameInput = screen.getByLabelText(/Last Name:/i);
  const addressInput = screen.getByLabelText(/Address:/i);
  const cityInput = screen.getByLabelText(/City:/i);
  const stateInput = screen.getByLabelText(/State:/i);
  const zipInput = screen.getByLabelText(/Zip:/i);

  userEvent.type(firstNameInput,"Chris");
  userEvent.type(lastNameInput, "Ramirez");
  userEvent.type(addressInput, "the court");
  userEvent.type(cityInput, "Madison");
  userEvent.type(stateInput, "NJ");
  userEvent.type(zipInput, "07940");

  const button = screen.getByRole("button");
  userEvent.click(button);

  const successField = screen.getByTestId("successMessage");

  expect(successField).toContainHTML("You have ordered some plants! Woo-hoo!");
  expect(successField).toContainHTML("Chris Ramirez");
  expect(successField).toContainHTML("the court");
  expect(successField).toContainHTML("Madison, NJ 07940");

});
