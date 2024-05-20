/* Promises lucky draw

The `luckyDraw` function returns a promise. Create a promise chain where the function is called for for each of the players: Joe, Caroline and Sabrina

Log out the resolved value for each promise and handle any promise rejections in the chain. */

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

/* ------- #1 solution -------- */
// Create a promise chain for each player

  luckyDraw("Joe")
  .then((result) => {
    //log the resolved value pf the boolean 
    console.log(result); 
  })
  .catch((error) => {
    //handle the error message
    console.error(error.message); 
  });

luckyDraw("Caroline")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });

luckyDraw("Sabrina")
  .then((result) => {
    console.log(result); 
  })
  .catch((error) => {
    console.error(error.message); 
  });  

  /* -------- # 2 solution ---------- */

 const players = ["Joe", "Caroline", "Sabrina"];


players.forEach((player) => {
  luckyDraw(player)
  .then((result) => {
    console.log(result);
  })
  .catch ((error) => {
    console.error(error.message);
  });
});
 

/* -------- # 3 solution ---------- i'm not sure because if joe lost it won't be executed the other two so for me is not a solution*/

luckyDraw('Joe')
.then((result) => {
  console.log(result); // Logs Joe's result
  return luckyDraw('Caroline');
})
.then((result) => {
  console.log(result); // Logs Caroline's result
  return luckyDraw('Sabrina');
})
.then((result) => {
  console.log(result); // Logs Sabrina's result
})
.catch((error) => {
  console.error(error.message); // Catches any errors during the process
});

