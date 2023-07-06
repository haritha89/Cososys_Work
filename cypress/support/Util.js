import * as selectors from "../fixtures/selectors";

//Function for LoginAndLogout

export const loginAndLogout = (waittime) => {
  cy.get(selectors.signUpOrLogin).click();
  cy.get(selectors.loginEmail).type("scarlett37+0@ethereal.email");
  cy.get(selectors.loginPassword).type("UCrVJq29Hx4MaPSdnP");
  cy.get(selectors.loginButton).click();
  waitToload(waittime);
  cy.get('a[href="/logout"]').click();
};

//Function for Login with Invalid Credentials

export const loginInvalidCredentials = (expectedText) => {
  cy.get(selectors.signUpOrLogin).click();
  cy.get(selectors.loginEmail).type("sc!444l@testtt.com");
  cy.get(selectors.loginPassword).type("UCrVJq29Hx4MnP");
  cy.get(selectors.loginButton).click();
  cy.get(selectors.invalidLogin).should("have.text", expectedText);
};

//Function for Contact Form Submission

export const contactFormValidation = (expectedText) => {
  let assertedValue;
  cy.get(selectors.contactUsLink).click();
  cy.get(selectors.contactName).type("test0");
  cy.get(selectors.contactEmail).type("scarlett37+0@ethereal.email");
  cy.get(selectors.contactSubject).type("query");
  cy.get(selectors.contactMessage).type("message 1");
  cy.get(selectors.contactSubmit).click();
  cy.get(selectors.contactsubmitAlert)
    .should("be.visible")
    .and(($div) => {
      assertedValue = $div.text().trim();
      expect(assertedValue).to.eq(expectedText);
    });
};

// Function to search product by category, asserting the quantity and delete cart

export const productByCategoryAndDeleteCart = () => {
  cy.get('a[href="/login"] i.fa.fa-lock').click();
  cy.get('input[data-qa="login-email"]').type("scarlett37+0@ethereal.email");
  cy.get('input[data-qa="login-password"]').type("UCrVJq29Hx4MaPSdnP");
  cy.get('button[data-qa="login-button"]').click();
  cy.get('a[href="/products"]').click();
  cy.get('a[data-toggle="collapse"][href="#Women"]').click();
  cy.get('a[href^="/category_products"]').eq(1).click();
  cy.get('a[href="/product_details/7"]').eq(0).click();
  let quantityValue;

  cy.get("#quantity").then(($input) => {
    quantityValue = $input.val();
  });
};

//Function to search Product by Brand and Review the product

export const productByBrandsAndReview = (reviewSubmission) => {
  cy.get(selectors.productsLink).click();
  cy.get(selectors.categoryBrands).find("a").eq(2).click();
  cy.get(selectors.productDetailsBrand).click();
  cy.get(selectors.reviewInputname).type("test0");
  cy.get(selectors.reviewInputemail).type("scarlett37+0@ethereal.email");
  cy.get(selectors.reviewInputText).type("Review Test");
  cy.get(selectors.reviewSubmit).click();
  cy.contains("span", reviewSubmission).should("be.visible");
};

//Function to Search Product and Order flow

export const productBySearchAndOrderFlow = (
  waittime,
  orderConfirmationMessage
) => {
  cy.get(selectors.productsLink).click();
  cy.get(selectors.productSearch).type("top");
  cy.get(selectors.searchClick).click();
  cy.get(selectors.productbySearch).click();
  cy.get(selectors.productModal).click();
  cy.get(selectors.productOption).click();
  cy.get(selectors.productClickbutton).click();
  cy.get(selectors.viewCart).click({ multiple: true });
  cy.get(selectors.productConfirm).click();
  cy.get(selectors.clickContinue).click();
  cy.get(selectors.loginEmail).type("scarlett37+1@ethereal.email");
  cy.get(selectors.loginPassword).type("UCrVJq29Hx4MaPSdnP");
  cy.get(selectors.loginButton).click();
  cy.get(selectors.shopMenu).click();
  cy.contains(selectors.checkOut, "Proceed To Checkout").click();
  cy.get(selectors.checkoutName).type("comment test");
  cy.get(selectors.paymentLink).click();
  cy.get(selectors.paymentName).type("test111");
  cy.get(selectors.cardNumber).type("333333333");
  cy.get(selectors.paymentCVC).type("019");
  cy.get(selectors.expiryMonth).type("01");
  cy.get(selectors.expiryYear).type("2026");
  cy.get(selectors.payButton).click();
  cy.get(selectors.orderConfirm).should("have.text", orderConfirmationMessage);
  waitToload(waittime);

  const fs = require("fs");
  const path = require("path");

  const verifyFile = (fileName) => {
    const filePath = "cypress/downloads/" + fileName;

    fetch(filePath)
      .then((response) => {
        if (response.ok) {
          console.log("File exists");
        } else {
          console.log("File does not exist");
        }
      })
      .catch((error) => {
        console.log("An error occurred while fetching the file:", error);
      });
  };
};

// Function for Registration Flow and delete account

export const registerAndDeleteAccount = (
  DeleteCartValidation,
  AccountCreateMessage,
  createAccountValidationMessage1,
  createAccountValidationMessage2,
  deleteAccountValidationMessage,
  deleteAccountValidationMessage2
) => {
  cy.get(selectors.signUpOrLogin).click();
  cy.get(selectors.signUpName).type("test3");
  cy.get(selectors.signUpEmail).type("scarlett37+3@ethereal.email");
  cy.get(selectors.signUpButton).click();
  cy.get(selectors.inputTitle).eq(1).check();
  cy.get(selectors.inputPassword).type("test123");
  cy.get(selectors.inputDays).select("15");
  cy.get(selectors.inputMonth).select("12");
  cy.get(selectors.inputYears).select("1989");
  cy.get(selectors.inputFirstName).type("test3");
  cy.get(selectors.inputLastName).type("test3");
  cy.get(selectors.inputCompanyName).type("company1");
  cy.get(selectors.inputAddress1).type("address1");
  cy.get(selectors.inputAddress2).type("address2");
  cy.get(selectors.inputState).type("teststate");
  cy.get(selectors.inputCity).type("testcity");
  cy.get(selectors.inputZipCode).type("12222");
  cy.get(selectors.inputMobileNumber).type("1212121212");
  cy.get(selectors.createAccount).click();
  cy.contains("b", AccountCreateMessage).should("exist");
  cy.contains(
    selectors.createAccountValidation,
    createAccountValidationMessage1
  ).should("exist");
  cy.contains(
    selectors.createAccountValidation,
    createAccountValidationMessage2
  ).should("exist");
  cy.get(selectors.productsLink).click();
  cy.get(selectors.productKids).click();
  cy.get(selectors.kidsDress).eq(0).click();
  cy.get(selectors.kidsProductclick).click();
  cy.get(selectors.productClickbutton).click({ multiple: true });
  cy.get(selectors.productModal).click();
  cy.get(selectors.cartCheck)
    .as("cartLink")
    .then(($cartLink) => {
      if ($cartLink.length > 0) {
        cy.get("@cartLink").first().click();
      }
    });
  cy.get(selectors.cartDelete).eq(0).click();
  cy.get("#empty_cart")
    .invoke("text")
    .then((text) => {
      const trimmedText = text.trim();
      expect(trimmedText).to.equal(DeleteCartValidation);
    });
  cy.get(selectors.deleteAccount).click();
  cy.get(selectors.deleteAccountGrid)
    .find("b")
    .should("have.text", "Account Deleted!");
  cy.contains(
    selectors.deleteAccountValidationGrid,
    deleteAccountValidationMessage,
    deleteAccountValidationMessage2
  ).should("exist");
};

//Function for Subscription and register before checkout

export const subscriptionAndRegisterBeforeCheckout = (
  subscribeValidationMessage,
  cartexpectedProduct
) => {
  cy.get(selectors.subscriptionEmail).type("scarlett37+3@ethereal.email");
  cy.get(selectors.subscribeClick).click();
  cy.contains(selectors.subscribeAlert, subscribeValidationMessage).should(
    "be.visible"
  );
  cy.get(selectors.productsLink).click();
  cy.get(selectors.productSearch).type("shirt");
  cy.get(selectors.searchClick).click();
  cy.get(selectors.shirtProduct).click();
  cy.get(selectors.productModal).click();
  cy.get(selectors.productbySearch).click();
  cy.get(selectors.viewCart).click({ multiple: true });
  cy.get(selectors.ShirtDress).invoke("text").as("productName1");
  cy.get(selectors.productConfirm).click();
  cy.get(selectors.clickContinue).click();
  cy.get(selectors.signUpName).type("test4");
  cy.get(selectors.signUpEmail).type("scarlett37+4@ethereal.email");
  cy.get(selectors.signUpButton).click();
  cy.get(selectors.inputTitle).eq(1).check();
  cy.get(selectors.inputPassword).type("test123");
  cy.get(selectors.inputDays).select("15");
  cy.get(selectors.inputMonth).select("12");
  cy.get(selectors.inputYears).select("1989");
  cy.get(selectors.inputFirstName).type("test3");
  cy.get(selectors.inputLastName).type("test3");
  cy.get(selectors.inputCompanyName).type("company1");
  cy.get(selectors.inputAddress1).type("address1");
  cy.get(selectors.inputAddress2).type("address2");
  cy.get(selectors.inputState).type("teststate");
  cy.get(selectors.inputCity).type("testcity");
  cy.get(selectors.inputZipCode).type("12222");
  cy.get(selectors.inputMobileNumber).type("1212121212");
  cy.get(selectors.createAccount).click();
  cy.get(selectors.createAccountContinue).click();
  let productName;
  cy.get(selectors.cartCheck)
    .as("cartLink")
    .then(($cartLink) => {
      if ($cartLink.length > 0) {
        cy.get("@cartLink").first().click();
        cy.get(selectors.cartProductName)
          .contains(cartexpectedProduct)
          .invoke("text")
          .as("productName2");
      }
    });
  cy.get("@productName1").then((productName1) => {
    cy.get("@productName2").then((productName2) => {
      expect(productName1).to.equal(productName2);
    });
  });
  cy.get(selectors.deleteAccount).click();
};

// Function to wait for loading the page for reload

export const waitToload = (wait) => {
  cy.wait(wait);
};

// Function for formatstring for selector

export const formatString = (str, val) => {
  return str.replace(/\{(.+?)\}/g, val);
};
