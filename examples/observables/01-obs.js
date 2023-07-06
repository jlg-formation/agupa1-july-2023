const { Observable } = require("rxjs");

const o = new Observable((subscriber) => {
  subscriber.next(123);
  subscriber.next(456);
  setTimeout(() => {
    subscriber.next("coucou");
    subscriber.complete();
  }, 1000);
});

o.subscribe({
  next: (data) => {
    console.log("data: ", data);
  },
  error: (err) => {
    console.log("err: ", err);
  },
  complete: () => {
    console.log("complete");
  },
});
