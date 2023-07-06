const { Subject } = require("rxjs");

const subject = new Subject();

const s1 = subject.subscribe({
  next: (data) => {
    console.log("s1 data: ", data);
  },
  error: (err) => {
    console.log("err: ", err);
  },
  complete: () => {
    console.log("complete");
  },
});
const s2 = subject.subscribe({
  next: (data) => {
    console.log("s2 data: ", data);
  },
  error: (err) => {
    console.log("err: ", err);
  },
  complete: () => {
    console.log("complete");
  },
});

subject.next(14);

setTimeout(() => {
  subject.next(28);
}, 1000);

setTimeout(() => {
  s1.unsubscribe();
}, 500);
