const Flutterwave = require("flutterwave-node-v3");

const flw = new Flutterwave(
  "FLWPUBK-375e0dca31930e75e09d872b5b39c66c-X",
  "FLWSECK-792a679ba8829b78f73a56c8a715f6e2-18e00c77377vt-X"
);

// Initiating the transaction
const payload = {
  card_number: "5531886652142950",
  cvv: "564",
  expiry_month: "09",
  expiry_year: "21",
  currency: "NGN",
  amount: "100",
  redirect_url: "https://www.google.com",
  fullname: "Flutterwave Developers",
  email: "developers@flutterwavego.com",
  phone_number: "09000000000",
  enckey: "792a679ba882f7a07f1a2d27",
  tx_ref: "example01",
};

const chargeCard = async () => {
  try {
    const response = await flw.Charge.card(payload);
    console.log(response);

    // Authorizing transactions

    // For PIN transactions
    if (response.meta.authorization.mode === "pin") {
      let payload2 = payload;
      payload2.authorization = {
        mode: "pin",
        fields: ["pin"],
        pin: 3310,
      };
      const reCallCharge = await flw.Charge.card(payload2);

      // Add the OTP to authorize the transaction
      const callValidate = await flw.Charge.validate({
        otp: "12345",
        flw_ref: reCallCharge.data.flw_ref,
      });
      console.log(callValidate);
    }
    // For 3DS or VBV transactions, redirect users to their issue to authorize the transaction
    if (response.meta.authorization.mode === "redirect") {
      var url = response.meta.authorization.redirect;
      open(url);
    }

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

chargeCard();
