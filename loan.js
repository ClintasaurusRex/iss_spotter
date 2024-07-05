
// Create a function that creates and returns a promise loan

let creditLimit = 1200;
/*
 * Input: number of dollars to loan out
 * Returns: Promise of loan which may or may not fulfill, based on remaining credit.
 * If creditLimit is less than the requested amount, only the remaining limit is loaned out, otherwise the full amount is loaned out. If $0 remain in the limit, the loan request is rejected (error!).
 */

const loanOut = function(amount) {
  return new Promise((resolve, reject) => {

    if (creditLimit <= 0) {
      reject("Your broke!");
      return creditLimit -= amount;
    } else if (amount > creditLimit) {
      reject("You dont have enough credit");
    } else {
      creditLimit -= amount;
      resolve(amount);
    }


  });

};






console.log("Asking for $150, which should be okay ...");
loanOut(150)
  .then((amountReceived) => {
    console.log(`\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${creditLimit}`);
  })
  .catch((err) => {
    console.log(`\t-> Error: ${err}!`);
  });