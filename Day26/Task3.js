//Convert a callback-based function into a Promise.
function getDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

getDataPromise().then(result => {
  console.log(result);
});
