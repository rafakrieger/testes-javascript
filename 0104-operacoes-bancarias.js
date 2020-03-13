
const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };


  function createTransaction(transaction) {
      user.transactions.push(transaction);

      if (transaction.type === "credit") {
          user.balance = user.balance + transaction.value;
      } else {
        user.balance = user.balance - transaction.value;
      }
    }


    function getHigherTransactionByType(type) {
        let higherValue = 0;
        let higherTransaction;

        for (let transaction of user.transactions) {
            if (type == transaction.type && transaction.value > higherValue) {
                higherValue = transaction.value;
                higherTransaction = transaction;
            }
        }
        
        return higherTransaction;
    }
    
    
    function getAverageTransactionValue() {
        let sum = 0
    
        for(let transaction of user.transactions) {
            sum += transaction.value
        }
    
        return sum / user.transactions.length
    }

    /* ALTERNATIVE TO GET AVERAGE
    function getAverageTransactionValue() {
        let sum = 0;
        
        for (let i = 0; i < user.transactions.length; i++) {
            sum += user.transactions[i].value;
            total = i + 1;
        }
        const average = sum / total;
        return average;
    }*/


    function getTransactionsCount() {
        let totalCredit = 0;
        let totalDebit = 0;
        for (let i = 0; i < user.transactions.length; i++) {
            if (user.transactions[i].type === "credit") {
                totalCredit++;
            }else {
                totalDebit++;
            }
        }

        const count = {
            credit: totalCredit,
            debit: totalDebit
        };

        return count;
    }

    createTransaction({ type: "credit", value: 50 });
    createTransaction({ type: "credit", value: 120 });
    createTransaction({ type: "debit", value: 80 });
    createTransaction({ type: "debit", value: 30 });
    
    console.log(user.balance);

    console.log(getHigherTransactionByType("credit"));
    console.log(getHigherTransactionByType("debit"));

    console.log(getAverageTransactionValue());

    console.log(getTransactionsCount());