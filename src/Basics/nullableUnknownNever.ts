// nullable types

const getCandidate = (input: string | null) => {
  if (input) {
    console.log(`candidate01 ${input}`);
  } else {
    console.log("ALL candidate");
  }
};

getCandidate(null);

//unknown

const candidateId = (input: unknown) => {
  if (typeof input === "number") {
    const theId = input * 10;
    console.log(theId);
  } else if (typeof input === "string") {
    const [theId] = input.split(" ");
    console.log(Number(theId) * 10);
  } else {
    console.log("wrong Input");
  }
};

candidateId(100)
candidateId("2562")
candidateId(null)

// void

const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("Error...");