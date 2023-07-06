import {
  loginAndLogout,
  waitToload,
  loginInvalidCredentials,
  contactFormValidation,
  registerAndDeleteAccount,
  productByCategoryAndDeleteCart,
  subscriptionAndRegisterBeforeCheckout,
  productByBrandsAndReview,
  productBySearchAndOrderFlow,
} from "../support/util";

import * as selectors from "../fixtures/selectors";

//E2E flow for Automation Exercise

describe("Login", () => {
  let isComment = false;
  const base_url = Cypress.env("BASE_URL");

  // Visit the base url before each it block

  beforeEach(() => {
    cy.visit(`${base_url}`);
  });

  it("Login with correct credentials and logout ", () => {
    const waittime = 2000;
    waitToload(waittime);
    loginAndLogout(waittime);
  });

  it("Login with incorrect credentials ", () => {
    const InvaldLoginValidation = "Your email or password is incorrect!";
    loginInvalidCredentials(InvaldLoginValidation);
  });

  it("Contact Us Form ", () => {
    const contactFormSubmissionMessage =
      "Success! Your details have been submitted successfully.";
    contactFormValidation(contactFormSubmissionMessage);
  });

  it("Product Functionality by Category,assert the quantity and delete cart", () => {
    productByCategoryAndDeleteCart();
  });

  it("Product Functionality by Brands and review message ", () => {
    const reviewSubmission = "Thank you for your review.";
    productByBrandsAndReview(reviewSubmission);
  });

  it("Product Functionality by Search Product and order flow", () => {
    const waittime = 2000;
    const orderConfirmationMessage =
      "Congratulations! Your order has been confirmed!";

    productBySearchAndOrderFlow(waittime, orderConfirmationMessage);
  });

  it("Registration Flow Remove cart and delete account", () => {
    const DeleteCartValidation = "Cart is empty! Click here to buy products.";
    const AccountCreateMessage = "Account Created!";
    const createAccountValidationMessage1 =
      "Congratulations! Your new account has been successfully created!";
    const createAccountValidationMessage2 =
      "You can now take advantage of member privileges to enhance your online shopping experience with us.";
    const deleteAccountValidationMessage =
      "Your account has been permanently deleted!";
    const deleteAccountValidationMessage2 =
      "You can create a new account to take advantage of member privileges to enhance your online shopping experience with us.";

    registerAndDeleteAccount(
      DeleteCartValidation,
      AccountCreateMessage,
      createAccountValidationMessage1,
      createAccountValidationMessage2,
      deleteAccountValidationMessage,
      deleteAccountValidationMessage2
    );
  });

  it("Subscription Flow and Register before checkout", () => {
    const subscribeValidationMessage = "You have been successfully subscribed!";
    const cartexpectedProduct = "Half Sleeves Top Schiffli Detailing - Pink";

    subscriptionAndRegisterBeforeCheckout(
      subscribeValidationMessage,
      cartexpectedProduct
    );
  });
});
